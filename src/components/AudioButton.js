import React, {useEffect, useState} from 'react';
import {View, BackHandler, StyleSheet, SafeAreaView} from 'react-native';
import {
  useNavigation,
  useRoute,
  useFocusEffect,
} from '@react-navigation/native';
import {API, graphqlOperation} from 'aws-amplify';
import {Appbar, Button, Card, Text} from 'react-native-paper';
import Sound from 'react-native-sound';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';




function AudioButton({soundFile}) {


    // Initialize the sound
  // const sound = new Sound(soundFile, undefined, (error) => {
  //   if (error) {
  //     console.log('Failed to load the sound', error);
  //     return;
  //   }
  // });
    // Play the sound
  const playSound = () => {
    // sound.play((success) => {
    //   if (!success) {
    //     console.log('Sound did not play successfully');
    //   }
    // });
  };

    return <Button icon="volume-high" mode="contained" onPress={playSound}></Button>;

}

export default AudioButton;
