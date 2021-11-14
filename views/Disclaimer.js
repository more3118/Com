import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModalTester from '../components/Popup';
import Cal from '../components/Calendar';
import tailwind from 'tailwind-rn';


function Disclaimer({navigation}) {
    return (
      <View>
        <Text style={tailwind("text-3xl text-center font-bold my-4")}>Appointment Calendar</Text>
      </View>
    );
  }

  export default Disclaimer;