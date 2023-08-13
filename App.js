import React from 'react';
import {View,Button,Text} from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { withAuthenticator } from '@aws-amplify/ui-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import VocabScreen from './src/screens/VocabScreen';
import PracticeStack from './src/screens/PracticeStack';
import AddVocabScreen from './src/screens/AddVocabScreen';
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
            <Stack.Group screenOptions={{ presentation: 'modal' }}>
              <Stack.Screen name="AddVocab" component={AddVocabScreen} />
            </Stack.Group>
        </Stack.Navigator>
      </NavigationContainer>
    </PaperProvider>
  );
};

export default withAuthenticator(App);

