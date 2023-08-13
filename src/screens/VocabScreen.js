import React,{useEffect,useState} from 'react';
import {View,Button,Text,Pressable} from 'react-native';
import {useNavigation } from '@react-navigation/native'
import {API,graphqlOperation} from 'aws-amplify';
import { Language } from '../models';


function VocabScreen() {
    const navigation = useNavigation();
    //Todo: Create drop up to select language
    

    const [userWords, setUserWords] = useState([]);
    const [words,setWords] = useState([]);

    useEffect(() => {
      
      //create function to fetch userwords with language field equal to enum language value of Korean from userword database
      const language = "" + Language.KOREAN;
      const fetchWords = async () => {
        const query = `query MyQuery {
          listUserWords(filter: {wordText: {beginsWith: "${language}"}}) {
            items {
              id
              wordText
              wordTranslation
            }
          }
          listWords(filter: {language: {eq: ${language}}}) {
            items {
              translation
              text
            }
          }
        }`;
        const output = await API.graphql(graphqlOperation(query));
        console.log("userWords",output.data.listUserWords.items )
        const wordsWithoutUserWords = output.data.listWords.items.filter(word => {  
          return !output.data.listUserWords.items.find(userWord => userWord.wordText === word.text && userWord.wordTranslation === word.translation)
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
        mutation MyMutation( $id: String!) {
          deleteUserWord(input: {id: $id}) {
            id
            word {
              translation
              text
            }
          }
        }`;
        const output = await API.graphql(graphqlOperation(mutation, {id: id}));
        setUserWords(userWords.filter(userWord => userWord.id !== output.data.deleteUserWord.id))
        setWords([...words, output.data.deleteUserWord.word])
      }

      const addWord = async (text,translation) => {
        const mutation = `
        mutation createUserWord($wordText: String,$wordTranslation: String) {
          createUserWord(input: {wordText: $wordText, wordTranslation: $wordTranslation}) {
            owner
            id
            wordText
            wordTranslation
            word {
              translation
              text
            }
          }
        }
        `;
        const output = await API.graphql(graphqlOperation(mutation,{wordText: text, wordTranslation: translation}));
        console.log("added word: ",output)
        setUserWords([...userWords, output.data.createUserWord]) 
        setWords(words.filter(word => word.text !== output.data.createUserWord.word.text || word.translation !== output.data.createUserWord.word.translation))
      }


    
    
    
    

    return <View>
      
      <Text style={{fontSize:30}}>Words Added</Text>
      {userWords.map(userWord => {
        return <View key={userWord.id}>
          <Pressable onPress={() => removeUserWord(userWord.id)}>
            <Text>{userWord.wordText + '     ' + userWord.wordTranslation}</Text>
          </Pressable>
        </View>
      })}
      <Text style={{fontSize:30}}>Words Not Added</Text>
      {words.map(word => {
        return <View key={word.text + word.translation}>
          <Pressable onPress={() => addWord(word.text,word.translation)}>
            <Text>{word.text + '     ' + word.translation}</Text>
          </Pressable>
        </View>
      })}

    </View>
  }

export default VocabScreen;