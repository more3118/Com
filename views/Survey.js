import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image, TouchableOpacity} from 'react-native';
import Home from '../App';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from '../App';

function Survey({ navigation}) {
    const [text, onChangeText] = React.useState("Useless Text");

    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View style={styles.img}>
        <Image source={require('../img/mascot.png')} 
        style={{ width: 120, height: 120 }}
        />
        <View style={styles.comet}>
        <Text style={styles.boldgreen}>Comet Health</Text>
        </View>
        </View>
        <View style={styles.line}></View>

        <View style={styles.survey}>
           <Text style={styles.green}>Mental Health Survey</Text>
        </View>
       
        <View style={{marginRight: 210, marginTop: 50}}>
        <Text>NetID</Text>
        </View>
        <View style={styles.inputview}>

        <TextInput 
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        />
        <View style={styles.textview}>
        <Text style={styles.text}>You are a new user. Click below to start.</Text>
        <Text style={styles.text}>You are a returning user. We highly recommend that you submit a new survey on every visiy.</Text>
        </View>
        </View>

        <View style={styles.surveybutton}>
        <TouchableOpacity 
        style={[{backgroundColor: '#ff6347'}, styles.button]}
        onPress={() => navigation.navigate('SurveyQues')}>
            <Text style={{color: 'white'}}>Start Survey</Text> 
        </TouchableOpacity> 

        </View>
        <View>
        <TouchableOpacity 
        style={[{backgroundColor: '#4c5c6a'}, styles.button]}>
            <Text style={{color: 'white'}}>Continue with Previous Result</Text> 
        </TouchableOpacity> 
        
        </View>

        <View style={styles.back}>
        <TouchableOpacity 
        onPress={() => navigation.goBack()}>
            <Text style={{color: 'darkgreen', fontWeight: 'bold'}}>Go back</Text> 
        </TouchableOpacity> 
        
        </View>
        <View style={styles.utd}>
        <Image source={require('../img/utdallas.png')} 
        style={{ width: 50, height: 50 }}
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
      height: 40,
      width: 250,
      alignItems: 'center',
      justifyContent: 'center',
    },

    input: {
        height: 40,
        width: 250,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },

    inputview: {
        alignItems: 'center',
        justifyContent: 'center',
    },

    text: {
        color: 'red',
        fontWeight: 'bold',
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

  