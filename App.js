import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, Button, View } from 'react-native';
import * as Notifications from 'expo-notifications';
import { Asset } from 'expo-asset';

export default function App() {

  const handlePress = async () => {
    const { status } = await Notifications.requestPermissionsAsync();
    const trigger = new Date(Date.now() + 3 * 1000); // 1 minute from now
    await Notifications.scheduleNotificationAsync({
      content: {
        sound: 'default_critical',
        title: 'My Notification',
        body: 'This is my notification message!',
        ios: {
          sound: true,
        },
      },
      trigger,
    }).catch(error => console.log(error));
  };


  
  return (
    <View style={styles.container}>
      <Text style={styles.helpText}> This is a piece of text </Text>

      <Text style={styles.helpText}> This is another piece of text </Text>

      <Text style={styles.helpText}> And another</Text>

      <Button title="Send a notification" onPress={handlePress} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    alignItems: 'center',
    justifyContent: 'start',
  },
  helpText: {
    paddingTop: 30,
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20,
  },
  button: {

  }
});
