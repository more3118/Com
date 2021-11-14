import React, {useEffect} from 'react';
import {StyleSheet, Text, View, TextInput, Image, TouchableOpacity, Alert} from 'react-native';
import {useAuth} from "../providers/AuthProvider";
import {useSurveys} from "../providers/SurveysProvider";

function Survey({navigation}) {
  const {user, signIn, signOut} = useAuth();
  const {surveys, getSurveys} = useSurveys();
  const [netId, setNetId] = React.useState('');

  const STATUS_INITIAL = 'init'
  const STATUS_OLD_USER = 'old'
  const [status, setStatus] = React.useState(STATUS_INITIAL);

  useEffect(() => {

  }, [user]);

  const handleSubmit = async () => {
    console.log("Press sign in");
    try {
      const user = await signIn(netId);
      const surveys = await getSurveys(user.id);
      if (surveys.length === 0) {
        setStatus(STATUS_INITIAL);
        navigation.navigate("SurveyQues");
      } else {
        setStatus(STATUS_OLD_USER);
      }
    } catch (error) {
      Alert.alert(`Failed to sign in: ${error.message}`);
    }
  };

  return (

    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', paddingTop: 24, paddingHorizontal: 36}}>
      <View style={{display: 'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
        <Image
          source={require('../img/mascot.png')}
          style={{width: 80, height: 80}}
        />
        <Text
          style={{color: 'darkgreen', fontWeight: 'bold', fontSize: 32,}}
        >
          Comet Health
        </Text>
      </View>

      <View style={{height: 2, width: '100%', backgroundColor: 'darkgreen', marginVertical: 16}}/>

      <Text
        style={{color: 'darkgreen', fontSize: 32}}
      >
        Mental Health Survey
      </Text>

      <View style={{width: '100%', paddingHorizontal: 20}}>
        <Text style={{marginTop: 64, fontSize: 16, fontWeight: 'bold'}}>NetID</Text>
        <TextInput
          style={{height: 42, width: '100%', borderWidth: 1, paddingHorizontal: 12, borderRadius: 3}}
          onChangeText={setNetId}
          value={netId}
          placeholder='XXX190001'
          editable={status !== STATUS_OLD_USER}
        />

        {
          status === STATUS_OLD_USER ? (
            <Text style={styles.infoText}>You are a returning user. We highly recommend that you submit a new survey on
              every visit.</Text>
          ) : (
            <Text style={styles.infoText}>You are a new user. Click below to start.</Text>
          )
        }

        <View style={{marginTop: 64}}>
          {
            status === STATUS_INITIAL ?
              (
                <TouchableOpacity
                  style={[{backgroundColor: '#e58143'}, styles.button]}
                  onPress={() => handleSubmit()}
                >
                  <Text style={{color: 'white'}}>Submit</Text>
                </TouchableOpacity>
              ) :
              (
                <>
                  <TouchableOpacity
                    style={[{backgroundColor: '#e58143'}, styles.button]}
                    onPress={() => navigation.navigate('SurveyQues')}
                  >
                    <Text style={{color: 'white'}}>Start Survey</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    style={[{backgroundColor: '#4c5c6a'}, styles.button]}
                  >
                    <Text style={{color: 'white'}}>Continue with Previous Result</Text>
                  </TouchableOpacity>
                </>
              )
          }
        </View>
      </View>

      <View style={styles.back}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}>
          <Text style={{color: 'darkgreen', fontWeight: 'bold'}}>Go back</Text>
        </TouchableOpacity>

      </View>
      <View style={styles.utd}>
        <Image source={require('../img/utdallas.png')}
               style={{width: 50, height: 50}}
        />
      </View>

    </View>
  );
}


export default Survey;


const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  },

  boldgreen: {
    color: 'darkgreen',
    fontWeight: 'bold',
    fontSize: 25,
  },

  green: {
    color: 'darkgreen',
    fontSize: 25,
  },

  comet: {
    marginTop: 80,
  },

  line: {
    backgroundColor: 'darkgreen',
    height: 1,
    width: 300,
  },

  img: {
    marginTop: 30,
    flexDirection: "row",
    flex: 0.5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  utd: {
    flex: 0.15,
    alignItems: 'center',
    justifyContent: 'center',
  },

  button: {
    marginTop: 20,
    height: 42,
    width: '100%',
    borderRadius: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },

  input: {
    height: 40,
    width: '100%',
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },

  inputview: {
    alignItems: 'center',
    justifyContent: 'center',
  },

  infoText: {
    color: 'darkred',
    fontWeight: 'bold',
    paddingVertical: 8,
  },

  survey: {
    marginTop: 20,
  },

  surveybutton: {
    marginTop: 100,
  },

  back: {
    marginTop: 100,
    marginLeft: 250,
  },

  textview: {
    marginLeft: 85,
    marginRight: 85,
  }

});

//   {/* <Button
//     color= "orange"
//     onPress={() => navigation.navigate('SurveyQues')}
//     title="Start Survey"/> */}

// <Button
//     color= "grey"
//     title="Continue with Previous Result"/>

// <Button onPress={() => navigation.goBack()} title="Go back" />

