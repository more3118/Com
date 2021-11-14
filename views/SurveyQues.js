import React from 'react';
import {StyleSheet, Text, View, Button, ScrollView, Image, TextInput, TouchableOpacity} from 'react-native';
import {useSurveys} from "../providers/SurveysProvider";

function SurveyQues({navigation}) {
  const {createSurvey} = useSurveys();

  const [a1, setA1] = React.useState("A");
  const [a2, setA2] = React.useState("B");
  const [a3, setA3] = React.useState("C");
  const [a4, setA4] = React.useState("D");
  const [a5, setA5] = React.useState("E");
  const [a6, setA6] = React.useState("F");
  const [a7, setA7] = React.useState("G");
  const [a8, setA8] = React.useState("H");

  const handleSubmit = () => {
    createSurvey([a1, a2, a3, a4, a5, a6, a7, a8]);
  }

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
      <Text
        style={{color: 'darkred', fontSize: 16, paddingVertical: 8, paddingHorizontal: 8}}
      >
        This survey has 8 questions and will take up to 3 minutes.
      </Text>
      <ScrollView>
        <View style={styles.questionBox}>
          <Text
            style={styles.questionText}
          >
            1. Over the last 12 months, have you felt so worried about something that you were unable to sleep at night?
          </Text>
          <TextInput
            style={styles.answerText}
            onChangeText={setA1}
            value={a1}
          />
        </View>
        <View style={styles.questionBox}>
          <Text
            style={styles.questionText}
          >
            2. Over the last 12 months, has there ever been a period of time when you had trouble concentrating?
          </Text>
          <TextInput
            style={styles.answerText}
            onChangeText={setA2}
            value={a2}
          />
        </View>
        <View style={styles.questionBox}>
          <Text
            style={styles.questionText}
          >
            3. Over the last 12 months, have you missed more assignment deadlines than usual?
          </Text>
          <TextInput
            style={styles.answerText}
            onChangeText={setA3}
            value={a3}
          />
        </View>
        <View style={styles.questionBox}>
          <Text
            style={styles.questionText}
          >
            4. Over the last 12 months, have you noticed changes in your weight or appetite?
          </Text>
          <TextInput
            style={styles.answerText}
            onChangeText={setA4}
            value={a4}
          />
        </View>
        <View style={styles.questionBox}>
          <Text
            style={styles.questionText}
          >
            5. Do you often feel that your situation is hopeless and that most people are better off than you are?
          </Text>
          <TextInput
            style={styles.answerText}
            onChangeText={setA5}
            value={a5}
          />
        </View>
        <View style={styles.questionBox}>
          <Text
            style={styles.questionText}
          >
            6. Do you prefer to stay at home rather than going out and doing new things?
          </Text>
          <TextInput
            style={styles.answerText}
            onChangeText={setA6}
            value={a6}
          />
        </View>
        <View style={styles.questionBox}>
          <Text
            style={styles.questionText}
          >
            7. Over the last 12 months, have you seriously considered attempting suicide?
          </Text>
          <TextInput
            style={styles.answerText}
            onChangeText={setA7}
            value={a7}
          />
        </View>
        <View style={styles.questionBox}>
          <Text
            style={styles.questionText}
          >
            8. Is there anything else you want to share with your counselor? (optional)
          </Text>
          <TextInput
            style={styles.answerText}
            onChangeText={setA8}
            value={a8}
          />
        </View>
      </ScrollView>
      <View style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <View style={{display: 'flex', flexDirection: 'row', paddingHorizontal: 8, paddingVertical: 12}}>
          <TouchableOpacity
            style={[{backgroundColor: '#4c5c6a'}, styles.button]}
            onPress={() => navigation.goBack()}
          >
            <Text style={{color: 'white'}}>Cancel</Text>
          </TouchableOpacity>
          <View style={{flexGrow: 1}}/>
          <TouchableOpacity
            style={[{backgroundColor: 'darkgreen'}, styles.button]}
            onPress={() => handleSubmit()}
          >
            <Text style={{color: 'white'}}>Submit</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.utd}>
          <Image source={require('../img/utdallas.png')}
                 style={{width: 50, height: 50}}
          />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  questionBox: {
    paddingVertical: 8,
    paddingHorizontal: 8,
  },

  questionText: {
    color: 'black',
    fontSize: 16,
    paddingVertical: 8
  },

  answerText: {
    height: 42,
    width: '100%',
    borderWidth: 1,
    paddingHorizontal: 12,
  },

  button: {
    height: 42,
    width: 120,
    borderRadius: 3,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default SurveyQues;
