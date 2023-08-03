import React from 'react';
import {View,Button,Text, BackHandler} from 'react-native';
import {useNavigation, useRoute,useFocusEffect } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const stack = createNativeStackNavigator();

function PracticeScreen() {

  const navigation = useNavigation();
  const {number} = useRoute().params;

  
  useFocusEffect(
    React.useCallback(() => {
      const onBackPress = () => {
        //navigation.navigate("Home");
        return true;
      };

      const subscription = BackHandler.addEventListener(
        'hardwareBackPress',
        onBackPress
      );

      return () => subscription.remove();
    }, [number])
  );
    
    return <View><Button title={"Practice " + number} onPress={() => navigation.push('Practice',{number:number+1})}/></View>
  }

function PracticeStack() {
  return (
    <stack.Navigator>
      <stack.Screen name="Practice" component={PracticeScreen} initialParams={{number: 1}}/>
    </stack.Navigator>
  )
}


export default PracticeStack;