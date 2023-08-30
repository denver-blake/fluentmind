import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {Auth} from 'aws-amplify';
import {View} from 'react-native';
import {Button} from 'react-native-paper';

function HomeScreen() {
	const navigation = useNavigation();

	async function signOut() {
		try {
			await Auth.signOut();
		} catch (error) {
			console.log('error signing out: ', error);
		}
	}

	return (
		<View>
			<Button
				mode='contained'
				onPress={() => navigation.navigate('PracticeStack')}>
				Practice Old Sentences
			</Button>
			<Button
				mode='contained'
				onPress={() => navigation.navigate('PracticeStack')}>
				Practice New Sentences
			</Button>
			<Button mode='contained' onPress={() => signOut()}>
				Sign Out
			</Button>
		</View>
	);
}

export default HomeScreen;
