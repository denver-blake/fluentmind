import React from 'react';
import {View,Button,Text} from 'react-native';
import {useNavigation } from '@react-navigation/native'
import {Auth} from 'aws-amplify';
function HomeScreen() {


    const navigation = useNavigation();

    async function signOut() {
      try {
        await Auth.signOut();
      } catch (error) {
        console.log('error signing out: ', error);
      }
    }

    return <View>
      <Button title="Practice Old Sentences" onPress={() => navigation.navigate('PracticeStack')}/>
      <Button title="Practice New Sentences" onPress={() => navigation.navigate('PracticeStack')}/>
      <Button title="Sign out" onPress={ () => signOut()} />
      </View>
  }



export default HomeScreen;