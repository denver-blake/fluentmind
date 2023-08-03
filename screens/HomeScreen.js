import React from 'react';
import {View,Button,Text} from 'react-native';
import {useNavigation, NavigationProp } from '@react-navigation/native'
function HomeScreen() {
    const navigation = useNavigation();
    return <View><Button title="Practice" onPress={() => navigation.navigate('PracticeStack')}/></View>
  }



export default HomeScreen;