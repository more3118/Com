import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, Image} from 'react-native';
import Home from '../App';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import App from '../App';

function Survey({ navigation}) {
    const [text, onChangeText] = React.useState("Useless Text");

    return (

      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <View>
        <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={text}
        />
        <Text>You are a new user. Click below to start</Text>
        <Text>You are a returning user. We highly recommend that you submit a new survey on every visiy.</Text>
        </View>

        <View> 
        <Button
            onPress={() => navigation.navigate('SurveyQues')}
            title="Start Survey"/>
        </View>
        <View>
        <Button
            title="Continue with Previous Result"/>
        </View>

        <Button onPress={() => navigation.goBack()} title="Go back" />

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
        flex: 0.4,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
    },
  
    green: {
      flex: 1,
      color: 'darkgreen',
      fontWeight: 'bold',
      fontSize: 50,
    },
  
    img: {
      flex: 1.5,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    utd: {
      flex: 0.5,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    button: {
      marginTop: 20,
      height: 40,
      width: 250,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'darkgreen',
    },

    input: {
        height: 40,
        width: 250,
        margin: 12,
        borderWidth: 1,
        padding: 10,
    },
  
  });

  