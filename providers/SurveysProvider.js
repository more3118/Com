import React, {useContext, useState, useEffect, useRef} from "react";
import Realm from "realm";
import {Survey} from "../schemas";
import {useAuth} from "./AuthProvider";

const SurveysContext = React.createContext(null);

const SurveysProvider = ({children, surveyPartition}) => {
  const [surveys, setSurveys] = useState([]);
  const {user} = useAuth();

  // Use a Ref to store the realm rather than the state because it is not
  // directly rendered, so updating it should not trigger a re-render as using
  // state would.
  const realmRef = useRef(null);

  useEffect(() => {
    if (!user) {
      return;
    }

    // Enables offline-first: opens a local realm immediately without waiting
    // for the download of a synchronized realm to be completed.
    const OpenRealmBehaviorConfiguration = {
      type: 'openImmediately',
    };
    const config = {
      schema: [Survey.schema],
      sync: {
        user: user,
        partitionValue: `user=${user.id}`,
        newRealmFileBehavior: OpenRealmBehaviorConfiguration,
        existingRealmFileBehavior: OpenRealmBehaviorConfiguration,
      },
    };
    // open a realm for this particular project
    Realm.open(config).then(async (userRealm) => {
      realmRef.current = userRealm;
      let surveys = await userRealm.objects("Survey");
      surveys = Array.from(surveys).sort((a, b) => b.created_at - a.created_at);
      setSurveys(surveys);
    });

    return () => {
      // cleanup function
      const projectRealm = realmRef.current;
      if (projectRealm) {
        projectRealm.close();
        realmRef.current = null;
        setSurveys([]);
      }
    };
  }, [user, surveyPartition]);

  const createSurvey = ([a1, a2, a3, a4, a5]) => {
    const userRealm = realmRef.current;
    userRealm.write(async () => {
      // Create a new task in the same partition -- that is, in the same project.
      await userRealm.create(
        "Survey",
        new Survey({
          partition: surveyPartition,
          a1: a1,
          a2: a2,
          a3: a3,
          a4: a4,
          a5: a5,
          createdAt: new Date(),
        }),
      );
    });
  };

  // Render the children within the TaskContext's provider. The value contains
  // everything that should be made available to descendants that use the
  // useTasks hook.
  return (
    <SurveysContext.Provider
      value={{
        createSurvey,
        surveys
      }}
    >
      {children}
    </SurveysContext.Provider>
  );
};

// The useTasks hook can be used by any descendant of the TasksProvider. It
// provides the tasks of the TasksProvider's project and various functions to
// create, update, and delete the tasks in that project.
const useSurveys = () => {
  const survey = useContext(SurveysContext);
  if (survey == null) {
    throw new Error("useSurveys() called outside of a SurveysProvider?"); // an alert is not placed because this is an error for the developer not the user
  }
  return survey;
};

export {SurveysProvider, useSurveys};
