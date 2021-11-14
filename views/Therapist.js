import React from 'react';
import { StyleSheet, Text, View, Button} from 'react-native';
import tailwind from 'tailwind-rn';

function Therapist({navigate}) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={tailwind("text-3xl text-white text-center p-4 rounded-full bg-black h-64 w-64")}>Student Services Building 4th floor
              SSB 4.700 
        </Text>
        <View>
        <Text style={tailwind("text-3xl text-white text-center p-4 rounded-full bg-black h-64 w-64")}>Send email reminder</Text>
        <Button title="hello"></Button>
        </View>
      </View>
    );
  }

export default Therapist;

