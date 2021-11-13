import React, { useState } from "react";
import { Button, Text, View } from "react-native";
import Modal from "react-native-modal";
import tailwind from "tailwind-rn"

function ModalTester() {
  const [isModalVisible, setModalVisible] = useState(true);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <Button title="Show Disclaimer" onPress={toggleModal} />

      <Modal isVisible={isModalVisible}>
        <View style={tailwind("justify-center")}>
          <Text style={tailwind("text-3xl text-white bg-red-500 text-center mx-2 my-4 rounded-full")} > In a Real Emergency Call 911 </Text>
          <Button title="Accept Terms" color="orange"  onPress={toggleModal}></Button>
          
        </View>
      </Modal>
    </View>
  );
}

export default ModalTester;