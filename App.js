import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Disclaimer from "./views/Disclaimer"
import Statefarm from "./views/Statefarm"
import Survey from "./views/Survey"
import Therapist from "./views/Therapist"
import SurveyQues from "./views/SurveyQues"
import { StyleSheet, Text, View, Button, Image} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModalTester from './components/Popup';

function HomeScreen({ navigation }) {
  return (
    <View style={{ backgroundColor: '#fff', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={styles.container}>
        <Text style={styles.green}>Comet Health</Text>
      </View>
      <View style={styles.img}>
        <Image source={require('./img/mascot.png')} 
        style={{ width: 300, height: 300 }}
        />
      </View>
      <View style={styles.button}>
      <Button 
        color = "white"
        title="Mental Health Survey"
        onPress={() => navigation.navigate('Survey')}
      /> 
      </View>
      <View style={styles.button}>
      <Button
        color = "white"
        title="List of Counselors"
        onPress={() => navigation.navigate('Therapist')}
      />
      </View>
      <View style={styles.button}>
      <Button
        color = "white"
        title="State Farm Insurance"
        onPress={() => navigation.navigate('Statefarm')}
      />
      </View>
      <View style={styles.button}>
      <Button
        color = "white"
        title="Disclaimer"
        onPress={() => navigation.navigate('Disclaimer')}
      />
      </View>
      

      <View style={styles.utd}>
        <Image source={require('./img/utdallas.png')} 
        style={{ width: 50, height: 50 }}
        />
      </View>

    </View>
  );
}

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen}
        options={{
          headerShown: false
        }} />
        <Stack.Screen name="Disclaimer" component={Disclaimer} 
        options={{
          headerShown: false
        }}/>
        <Stack.Screen name="Survey" component={Survey} 
        options={{
          headerShown: false
        }}
        />
        <Stack.Screen name="Therapist" component={Therapist} 
        options={{
          headerShown: true
        }}/>
        <Stack.Screen name="Statefarm" component={Statefarm} 
        options={{
          headerShown: false
        }}/>
        <Stack.Screen name="SurveyQues" component={SurveyQues} 
        options={{
          headerShown: false
        }}/>

      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
    flex: 0.4,
    backgroundColor: '#fff',
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

});






