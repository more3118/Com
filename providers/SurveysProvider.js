import React, {useContext, useState} from "react";
import {useAuth} from "./AuthProvider";
import axios from 'axios';

const SurveysContext = React.createContext(null);

const SurveysProvider = ({children}) => {
  const [surveys, setSurveys] = useState([]);
  const {user} = useAuth();

  // Use a Ref to store the realm rather than the state because it is not
  // directly rendered, so updating it should not trigger a re-render as using
  // state would.

  const createSurvey = async ([a1, a2, a3, a4, a5, a6, a7, a8]) => {
    const data = {
      userId: user.id, a1, a2, a3, a4, a5, a6, a7, a8,
    }
    axios
      .post('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/hackutd-sgusk/service/survey/incoming_webhook/webhook0', data)
      .then((res) => {
        console.log('Successfully created survey');
      })
  };

  const getSurveys = async () => {
    if (!user) {
      return;
    }

    const response = await axios.get('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/hackutd-sgusk/service/survey/incoming_webhook/webhook0', {
      params: {
        userId: user.id
      }
    }).catch((err) => {
      console.log(err)
    });

    const surveys = response.data.sort((a, b) => b.created_at.$date.$numberLong - a.created_at.$date.$numberLong)
    setSurveys(surveys)
    return surveys;
  };

  // Render the children within the TaskContext's provider. The value contains
  // everything that should be made available to descendants that use the
  // useTasks hook.
  return (
    <SurveysContext.Provider
      value={{
        createSurvey,
        getSurveys,
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
