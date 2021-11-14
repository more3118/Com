import {Calendar, CalendarList, Agenda} from 'react-native-calendars';
import React, { useState } from "react";
import { Alert, Button, Text, View } from "react-native";
import Modal from "react-native-modal";
import tailwind from "tailwind-rn"
import axios from 'axios';


function Cal() {
    const [count, setCount] = useState('No Date Selected!');
    const [isModalVisible, setModalVisible] = useState(false);
    const [isModalVisible2, setModalVisible2] = useState(false);
    const [time, setTime] = useState('No Time Selected!');
    const [doctor, setDoc] = useState('No Health Provider Selected!');
    
    function cal_submit(){ axios.post('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/hackutd-sgusk/service/calendar/incoming_webhook/webhook0', { name: 'Shreyas More',count:count,time:time,doctor:doctor,}, {
  headers: {
    // 'application/json' is the modern content-type for JSON, but some
    // older servers may use 'text/json'.
    // See: http://bit.ly/text-json
    'content-type': 'application/json'
  }
});
    }
  {/*function postDataUsingSimplePostCall() { axios('https://us-east-1.aws.webhooks.mongodb-realm.com/api/client/v2.0/app/hackutd-sgusk/service/calendar/incoming_webhook/webhook0', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    data: JSON.stringify({cpfcnpj: "15060655709"})
  }).then(function(response) {
      console.log(response.data);

    });};
    
    
  */}
    const toggleModal = () => {
    setModalVisible(!isModalVisible);
    };
    const toggleModal2 = () => {
      setModalVisible2(!isModalVisible2);
      };
  return (

    <View>
    <CalendarList
    style={{
        borderWidth: 1,
        borderColor: 'gray',
        height: 350
      }}
      // Specify theme properties to override specific styles for calendar parts. Default = {}
      theme={{
        backgroundColor: '#ffffff',
        calendarBackground: '#ffffff',
        textSectionTitleColor: '#b6c1cd',
        textSectionTitleDisabledColor: '#d9e1e8',
        selectedDayBackgroundColor: '#00adf5',
        selectedDayTextColor: '#ffffff',
        todayTextColor: '#00adf5',
        dayTextColor: '#2d4150',
        textDisabledColor: '#d9e1e8',
        dotColor: '#00adf5',
        selectedDotColor: '#ffffff',
        arrowColor: 'orange',
        disabledArrowColor: '#d9e1e8',
        monthTextColor: 'blue',
        indicatorColor: 'blue',
        textDayFontFamily: 'monospace',
        textMonthFontFamily: 'monospace',
        textDayHeaderFontFamily: 'monospace',
        textDayFontWeight: '300',
        textMonthFontWeight: 'bold',
        textDayHeaderFontWeight: '300',
        textDayFontSize: 16,
        textMonthFontSize: 16,
        textDayHeaderFontSize: 16
      }}
    // Initially visible month. Default = Date()
    current={'2021-11-14'}
    // Minimum date that can be selected, dates before minDate will be grayed out. Default = undefined
    minDate={'2021-11-14'}
    // Maximum date that can be selected, dates after maxDate will be grayed out. Default = undefined
    maxDate={'2022-05-30'}
    // Handler which gets executed on day press. Default = undefined
    onDayPress={(day) => {setCount(day.dateString)}}
    // Handler which gets executed on day long press. Default = undefined
    onDayLongPress={(day) => {console.log('selected day', day)}}
    // Month format in calendar title. Formatting values: http://arshaw.com/xdate/#Formatting
    monthFormat={'yyyy MM'}
    // Handler which gets executed when visible month changes in calendar. Default = undefined
    onMonthChange={(month) => {console.log('month changed', month)}}
    // Hide month navigation arrows. Default = false
    hideArrows={true}
    // Replace default arrows with custom ones (direction can be 'left' or 'right')
    renderArrow={(direction) => (<Arrow/>)}
    // Do not show days of other months in month page. Default = false
    hideExtraDays={true}
    // If hideArrows = false and hideExtraDays = false do not switch month when tapping on greyed out
    // day from another month that is visible in calendar page. Default = false
    disableMonthChange={true}
    // If firstDay=1 week starts from Monday. Note that dayNames and dayNamesShort should still start from Sunday
    firstDay={1}
    // Hide day names. Default = false
    hideDayNames={false}
    // Show week numbers to the left. Default = false
    showWeekNumbers={true}
    // Handler which gets executed when press arrow icon left. It receive a callback can go back month
    onPressArrowLeft={subtractMonth => subtractMonth()}
    // Handler which gets executed when press arrow icon right. It receive a callback can go next month
    onPressArrowRight={addMonth => addMonth()}
    // Disable left arrow. Default = false
    disableArrowLeft={true}
    // Disable right arrow. Default = false
    disableArrowRight={true}
    // Disable all touch events for disabled days. can be override with disableTouchEvent in markedDates
    disableAllTouchEventsForDisabledDays={true}
    // Replace default month and year title with custom one. the function receive a date as parameter
    renderHeader={(date) => {/*Return JSX*/}}
    // Enable the option to swipe between months. Default = false
    enableSwipeMonths={true}
  />
  <Text style={tailwind("text-center text-2xl my-2 font-bold")}>Your Date: {count}</Text>
  <Text style={tailwind("text-center text-2xl my-2 font-bold")}>Your Time: {time}</Text>
  <Text style={tailwind("text-center text-2xl my-2 font-bold")}>Your Doctor: {doctor}</Text>
  <Button title="Choose Times" onPress={toggleModal}></Button>
  <Text></Text>
  <Button title="Doctor" onPress={toggleModal2}></Button>
  <Button title="Submit" onPress={cal_submit}></Button>
  <Modal isVisible={isModalVisible}>
        <View style={tailwind("justify-center")}>
          <Button title="8:30AM" color="orange"  onPress={(time) => {setTime("8:30AM")}}></Button>
          <Text></Text>
          <Button title="12:00PM" color="orange"  onPress={(time) => {setTime("12:00PM")}}></Button>
          <Text></Text>
          <Button title="2:30PM" color="orange"  onPress={(time) => {setTime("2:30PM")}}></Button>
          <Text></Text>
          <Button title="4:30PM" color="orange"  onPress={(time) => {setTime("4:30PM")}}></Button>
          <Text></Text>
          <Button title="Done" color="black"  onPress={() => toggleModal()}></Button>
        </View>
    </Modal>
    <Modal isVisible={isModalVisible2}>
        <View style={tailwind("justify-center")}>
          <Button title="Doctor" color="orange"  onPress={(doctor) => {setDoc("Doctor1")}}></Button>
          <Text></Text>
          <Button title="Doctor2" color="orange"  onPress={(doctor) => {setDoc("Doctor2")}}></Button>
          <Text></Text>
          <Button title="Doctor3" color="orange"  onPress={(doctor) => {setDoc("Doctor3")}}></Button>
          <Text></Text>
          <Button title="Doctor4" color="orange"  onPress={(doctor) => {setDoc("Doctor4")}}></Button>
          <Text></Text>
          <Button title="Done" color="black"  onPress={() => toggleModal2()}></Button>
        </View>
    </Modal>
</View>

  );
}
export default Cal;