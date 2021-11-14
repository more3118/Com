import React from 'react';
import { StyleSheet, Text, View, Button, Image, TouchableOpacity} from 'react-native';
import tailwind from 'tailwind-rn';

function Therapist({navigation}) {
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
        <View style={styles.list}>
           <Text style={styles.green}>List of Counselors</Text>
        </View>
        <View style={styles.allcounselor}>
            <View style={styles.counselor}>
            <Text style={styles.black}>Amy Han</Text>
            <Text style={styles.black}>Office: SSB4.700</Text>
            <Text style={styles.black}>Email: amy.han@utdallas.edu</Text>
            </View>
            <View style={styles.counselor}>
            <Text style={styles.black}>Amanda Amith</Text>
            <Text style={styles.black}>Office: SSB2.101</Text>
            <Text style={styles.black}>Email: amanda.smith@utdallas.edu</Text>
            </View>
            <View style={styles.counselor}>
            <Text style={styles.black}>Fayad Tiah</Text>
            <Text style={styles.black}>Office: SSB4.171</Text>
            <Text style={styles.black}>Email: fayad.tiah@utdallas.edu</Text>
            </View>
            <View style={styles.counselor}>
            <Text style={styles.black}>Jimmy Nguyen</Text>
            <Text style={styles.black}>Office: ECSS2.105</Text>
            <Text style={styles.black}>Email: jimmy.nguyen@utdallas.edu</Text>
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
        style={{ width: 50, height: 50 }}
        />
      </View>

      </View>
    );
  }

export default Therapist;

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
      flex: 1,
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
