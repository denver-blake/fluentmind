import {useNavigation} from '@react-navigation/native';
import {API, graphqlOperation} from 'aws-amplify';
import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {getAllUserWords} from '../graphql/queries';
import {Language} from '../models';
import {List, IconButton, Modal, Portal, TextInput, Button} from 'react-native-paper';
import {ScrollView} from 'react-native';
import {deleteUserWord,createUserWord} from '../graphql/mutations';
function VocabScreen() {
	const navigation = useNavigation();
	//Todo: Create drop up to select language

	const [words, setWords] = useState([]);
	const [showAddModal,setShowAddModal] = useState(false);
	const [newWord,setNewWord] = useState('');

	useEffect(() => {
		//create function to fetch userwords with language field equal to enum language value of Korean from userword database
		const language = '' + Language.KOREAN;
		const fetchWords = async () => {
			const output = await API.graphql(
				graphqlOperation(getAllUserWords, {language}),
			);
			console.log('userWords', output.data.listUserWords.items);

			setWords(output.data.listUserWords.items);
		};
		fetchWords();

		return () => {};
	}, []);

	const removeWord = async (id, _version) => {
		console.log('AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA');
		const output = await API.graphql(
			graphqlOperation(deleteUserWord, {id, _version}),
		);
		setWords(
			words.filter(word => word.id !== output.data.deleteUserWord.id),
		);
	};

	const addWord = async (wordText) => {
		
		const output = await API.graphql(
			graphqlOperation(createUserWord, {wordText}),
		);
		console.log('added word: ', output);
		setWords([...words, output.data.createUserWord]);
		setShowAddModal(false);
		
	};

	return (
		<ScrollView>
			<View>
				<Portal>
					<Modal visible={showAddModal} contentContainerStyle={{backgroundColor: 'white', padding: 20}} onDismiss={() => setShowAddModal(false)}>
						<TextInput label={'New word'} mode='outlined' value={newWord} onChangeText={text => setNewWord(text) }/>
						<Button mode='contained' onPress={() => addWord('KOREAN::' + newWord)}>Add</Button>
					</Modal>
				</Portal>

				<Button mode='contained' onPress={() => setShowAddModal(true)}>Add Word</Button>
				<List.Section title="Words">
					{words.map(word => {
						return (
							<List.Item
								key={word.id}
								title={word.wordText.split('::')[1]}
								right={() => (
									<View style={styles.iconButtonContainer}>
										<IconButton
											icon="close-circle"
											style={styles}
											onPress={() =>
												removeWord(
													word.id,
													word._version,
												)
											}
										/>
									</View>
								)}
								onPress={() => console.log('PRESSSSSSSSSSSS')}
							/>
						);
					})}
				</List.Section>
			</View>
		</ScrollView>
		// <View>
		// 	<Text style={{fontSize: 30}}>Words Added</Text>

		// 	<Text style={{fontSize: 30}}>Words Not Added</Text>

		// </View>
	);
}

const styles = StyleSheet.create({
	inline: {
		flex: 1,
		flexDirection: 'row',
	},
	content: {
		flex: 1,
		justifyContent: 'center',
		paddingHorizontal: 16,
	},
	card: {
		padding: 16,
	},
	button: {
		margin: 16,
	},
	iconButtonContainer: {
		width: 24,
		height: 24,
		justifyContent: 'center',
		alignItems: 'center',
	},
});

export default VocabScreen;
