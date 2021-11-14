import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity, TextInput} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function Statefarm({navigation}) {
    const [number, onChangeNumber] = React.useState(null);
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
        <View style={{marginTop: 60, marginBottom: 60}}>
        <Image source={require('../img/statefarm.png')}
        
        />
        </View>

        <View style={{marginRight: 80, marginLeft: 80}}>
        <Text style={{color: 'red', fontWeight: 'bold'}}>Please type your State Farm Policy Number to begin the referal process.</Text>
        <View style={{marginTop: 30}}>
        <Text style={{fontWeight: 'bold'}}>State Farm Policy Number</Text>
        <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Type your policy number here"
        keyboardType="numeric"
      />
        </View>
        </View>

        <View style={{marginTop: 50}}>
        <TouchableOpacity 
        style={[{backgroundColor: '#ff6347'}, styles.button]}
        onPress={() => navigation.navigate('StatefarmInfo')}>
            <Text style={{color: 'white'}}>See Who's Near Me</Text> 
        </TouchableOpacity> 
        
        </View>

        <View style={styles.back}>
        <TouchableOpacity 
            onPress={() => navigation.goBack()}>
            <Text style={{color: 'darkgreen', fontWeight: 'bold', fontSize:18}}>Go back</Text> 
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

  export default Statefarm;

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
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
  
    utd: {
      flex: 0.3,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom:30
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
        marginTop: 50,
        marginLeft: 250,
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
  
  });