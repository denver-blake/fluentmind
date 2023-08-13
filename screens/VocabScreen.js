import React,{useEffect,useState} from 'react';
import {View,Button,Text,Pressable} from 'react-native';
import {useNavigation } from '@react-navigation/native'
import {API,graphqlOperation} from 'aws-amplify';

import { listUserWords, listWords } from '../graphql/database/queries';
import { onCreateUserWord, onCreateWord, onDeleteUserWord, onUpdateUserWord, onUpdateWord } from '../graphql/database/subscriptions';
import { Language } from '../models';
import { createUserWord, deleteUserWord } from '../graphql/database/mutations';
function VocabScreen() {
    const navigation = useNavigation();

    


    const [userWords, setUserWords] = useState([]);
    const [words,setWords] = useState([]);

    useEffect(() => {
      
      //create function to fetch userwords with language field equal to enum language value of Korean from userword database
      const fetchWords = async () => {
        const query = `query FetchWords {
          listWords {
            items {
              id
              word
              
            }
          }
          listUserWords(filter: {_deleted: {attributeExists: false}}) {
            items {
              id
              Word {
                word
                id
              }
            }
          }
        }`;
        const output = await API.graphql(graphqlOperation(query));
        console.log("userWords",output.data.listUserWords.items )
        const wordsWithoutUserWords = output.data.listWords.items.filter(word => {  
          return !output.data.listUserWords.items.find(userWord => userWord.Word.id === word.id)
        });

        setUserWords(output.data.listUserWords.items);
        setWords(wordsWithoutUserWords);
      }
      
      

      
      
      fetchWords();

      
        return () => {

        }
      }, [])


      const removeUserWord = async (id) => {
        const mutation = `
        mutation MyMutation( $id: ID!) {
          deleteUserWord(input: {id: $id, _version: 1}) {
            owner
            id
            Word {
              word
              id
            }
          }
        }`;
        const output = await API.graphql(graphqlOperation(mutation, {id: id}));
        setUserWords(userWords.filter(userWord => userWord.Word.id !== output.data.deleteUserWord.Word.id))
        setWords([...words, output.data.deleteUserWord.Word])
      }

      const addWord = async (id) => {
        const mutation = `
        mutation createUserWord($wordID: ID!) {
          createUserWord(input: {wordID: $wordID}) {
            owner
            id
            Word {
              word
              id
            }
          }
        }
        `;
        const output = await API.graphql(graphqlOperation(mutation,{wordID:id}));
        console.log("added word: ",output)
        setUserWords([...userWords, output.data.createUserWord]) 
        setWords(words.filter(word => word.id !== output.data.createUserWord.Word.id))
      }


    
    
    
    

    return <View>
      
      <Text style={{fontSize:30}}>Words Added</Text>
      {userWords.map(userWord => {
        return <View key={userWord.id}>
          <Pressable onPress={() => removeUserWord(userWord.id)}>
            <Text>{userWord.Word.word}</Text>
          </Pressable>
        </View>
      })}
      <Text style={{fontSize:30}}>Words Not Added</Text>
      {words.map(word => {
        return <View key={word.id}>
          <Pressable onPress={() => addWord(word.id)}>
            <Text>{word.word}</Text>
          </Pressable>
        </View>
      })}

    </View>
  }

export default VocabScreen;