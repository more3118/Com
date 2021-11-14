import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function StatefarmInfo({navigation}) {

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
        <View style={{marginTop: 30, marginBottom: 30}}>
        <Image source={require('../img/statefarm.png')}
        />
        </View>
        <View style={{marginBottom: 30, marginRight: 60}}>
        <Text style={{color: 'red', fontSize: 18}}>Last Visited</Text>
        <Text>Dr. Leah M. Johnson</Text>
        <Text>110 Cityline Dr, Richardson, TX 75082</Text>
        </View>
        <View style={{marginBottom: 20}}><Text style={{color: 'red', fontSize: 18}}>Doctors Near Me (within 5 miles)</Text></View>
        <View style={{alignContent: 'flex-start'}}>
            <View style={{marginBottom: 20}}>
                <Text>Dr. Eddie Kim</Text>
                <Text>452 Water Blvd #104, Richardson, TX 75080</Text></View>
            <View style={{marginBottom: 20}}>
                <Text>Dr. Bill R. Villanueva</Text>
                <Text>1009 Waterpark Dr, #45 Richardson, TX 75081</Text></View>

        <Text>Dr. Leah M. Johnson </Text>
        <Text>110 Cityline Dr, Richardson, TX 75082</Text>
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

  export default StatefarmInfo;

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
        marginTop: 15,
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
      flex: 0.5,
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: 10
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
        marginTop: 80,
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