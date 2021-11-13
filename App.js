import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Disclaimer from "./views/Disclaimer"
import Statefarm from "./views/Statefarm"
import Survey from "./views/Survey"
import Therapist from "./views/Therapist"
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Disclaimer"
        onPress={() => navigation.navigate('Disclaimer')}
      />
      
      <Button
        title="Survey"
        onPress={() => navigation.navigate('Survey')}
      /> 

      <Button
        title="Therapist"
        onPress={() => navigation.navigate('Therapist')}
      />

      <Button
        title="Statefarm"
        onPress={() => navigation.navigate('Statefarm')}
      />

 
    </View>
  );
}

const Stack = createNativeStackNavigator();

function DetailsScreen({navigate}) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Details Screen</Text>
    </View>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Disclaimer" component={Disclaimer} />
        <Stack.Screen name="Survey" component={Survey} />
        <Stack.Screen name="Therapist" component={Therapist} />
        <Stack.Screen name="Statefarm" component={Statefarm} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// 
// 
// 




