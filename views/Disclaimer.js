import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function Disclaimer({navigation}) {
    return (
      <View style={{ backgroundColor: '#fff', flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <View style={styles.container}>
        <Text style={styles.green}>Comet Health</Text>
      </View>
      <View style={styles.img}>
        <Image source={require('../img/mascot.png')} 
        style={{ width: 300, height: 300 }}
        />
      </View>
      <View style={styles.claim}>
        <View>
          <Text style={{fontWeight: 'bold',}}>Comet Health Application Disclaimer</Text></View>
        <View style={{marginTop: 20}}>
        <Text style={styles.text}>This application is not a substitute for medical advice. Users of the application should consult with healthcare professional before making any health or medical-related decisions.</Text>
        </View>
        <View style={{marginTop: 20}}>
        <Text style={styles.text}>Call 911 for Emergency</Text>
        </View>
      </View>
      <TouchableOpacity
      onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={{color: 'darkgreen', fontWeight: 'bold'}}>Accept</Text> 
        </TouchableOpacity> 

      <View style={styles.utd}>
        <Image source={require('../img/utdallas.png')} 
        style={{ width: 50, height: 50 }}
        />
      </View>
      
    );
  }

  export default Disclaimer;

  const styles = StyleSheet.create({
    container: {
      flex: 1.5,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    green: {
      color: 'darkgreen',
      fontWeight: 'bold',
      fontSize: 50,
    },
  
    img: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    utd: {
      flex: 1,
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

    claim:{
      marginTop: 50,
      marginRight: 50,
      marginLeft: 50,
      alignItems: 'center', 
      justifyContent: 'center',
      flex: 1.5
    },

    text: {
      color: 'grey',
      fontSize: 15,
  },
  
  });