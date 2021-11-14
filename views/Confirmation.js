import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import tailwind from 'tailwind-rn';

function Confirmation({navigation}) {
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
        <View style={{marginRight: 50, marginLeft:50, marginTop: 100, marginBottom:50, flex: 0.7}}>
            <Text style={{color:'orange', fontWeight:'bold', fontSize:20}}>Your appointment is booked. You will receive an email confirmation shortly.
 </Text>
            <View style={{marginTop:20}}>
            <Text style={{color:'orange', fontWeight:'bold', fontSize:20}}>Comet Health is rooting for you!</Text>
            </View>
        </View>
        <View style={styles.back}>
        <TouchableOpacity 
        onPress={() => navigation.navigate('HomeScreen')}>
            <Text style={{color: 'darkgreen', fontWeight: 'bold'}}>Go to home page</Text> 
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

export default Confirmation;

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
      marginTop: 50,
      flexDirection: "row",
      flex: 0.7,
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
    },

    text: {
        color: 'red',
        fontWeight: 'bold',
    },

    back: {
        marginTop: 100,
        marginLeft: 50,
        marginRight: 50,
    },

    textview: {
        marginLeft: 85,
        marginRight: 85,
    },

    allcounselor:{
        marginTop: 30,
        flex: 2,
    },

    counselor:{
        marginTop: 20,
    },

    black:{
        fontSize: 15,
    },

    list: {
        marginTop: 20,
    },
     survey: {
        marginTop: 30,
    },
  
  });