import React, {useState} from 'react';
import {View,Button,Text,TextInput} from 'react-native';
import {API,graphqlOperation} from 'aws-amplify';
import { createTestUserModel } from '../graphql/testModel/mutations';
import {useNavigation } from '@react-navigation/native'


function AddVocabScreen() {
    const navigation = useNavigation();
    // const [formState,setFormState] = useState({data: ''})

    // function setInput(key,value) {
    //     setFormState({...formState,[key]:value});
    // }

    // async function addVocab() {
    //     try {
    //         const vocab = {...formState};
    //         await API.graphql(graphqlOperation(createTestUserModel,{input:vocab}));
    //         navigation.goBack();
    //     } catch(err) {
    //         console.log("error creating vocab: ",err);
    //     }
    // }

    return <View>
        {/* <TextInput 
            onChangeText={value => setInput('data',value)}
            placeholder='Name'
        />
        <Button title="Add" onPress={addVocab}/> */}
    </View>
  }

export default AddVocabScreen;