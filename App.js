import React from 'react';
import {View,Button,Text} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { withAuthenticator } from '@aws-amplify/ui-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './screens/HomeScreen';
import ProfileScreen from './screens/ProfileScreen';
import VocabScreen from './screens/VocabScreen';
import PracticeStack from './screens/PracticeStack';
const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

function EmptyScreen() {
  return <View/>;
}


function MainTabs() {
  return (
    <Tab.Navigator>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Vocab" component={VocabScreen}/>
    <Tab.Screen name="Profile" component={ProfileScreen}/>
  </Tab.Navigator>
  )
}


const App = () => {
 

  return (
    <PaperProvider>
      <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name="MainTab" component={MainTabs}/>
            <Stack.Screen name='PracticeStack' component={PracticeStack}/>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default withAuthenticator(App);

