import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ModalTester from '../components/Popup';
import Cal from '../components/Calendar';
import tailwind from 'tailwind-rn';


function Disclaimer() {
    return (
      <View>
        <Text style={tailwind("text-3xl text-center font-bold my-16")}>Appointment Calendar</Text>
        <Cal />
      </View>
    );
  }

  export default Disclaimer;