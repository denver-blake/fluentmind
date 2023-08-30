import React, {useEffect, useState} from 'react';
import {View, BackHandler, StyleSheet, SafeAreaView} from 'react-native';
import {
	useNavigation,
	useRoute,
	useFocusEffect,
} from '@react-navigation/native';
import {API, graphqlOperation} from 'aws-amplify';
import {Appbar, Button} from 'react-native-paper';
import SentenceCard from '../components/SentenceCard';
import TranslationModal from '../components/TranslationModal';
import {generateSentence} from '../graphql/mutations';
import LoadingScreen from './LoadingScreen';

const ButtonState = {
	ShowTranslation: 'Show Translation',
	NextSentence: 'Next Sentence',
	Finish: 'Finish',
};
function PracticeScreen() {
	const navigation = useNavigation();
	const {index, sentencesParam = []} = useRoute().params;

	const [loading, setLoading] = useState(index === 0);
	const [sentences, setSentences] = useState(sentencesParam);
	const [buttonState, setButtonState] = useState(ButtonState.ShowTranslation);
	const [showTranslation, setShowTranslation] = useState(false);
	const [translationModalProps, setTranslationModalProps] = useState({
		visible: false,
	});

	useEffect(() => {
		const fetchNewSentences = async () => {
			// const output = await API.graphql(graphqlOperation(generateSentence));
			// console.log(output.data.generateSentence);
			// setSentences(output.data.generateSentence);
			setSentences([
				{
					translation: 'ENGLISH::An apple fell under the tree.',
					meanings: ['tree', 'under', 'apple', 'fell'],
					phrases: ['나무', '아래에', '사과가', '떨어졌다'],
					text: 'KOREAN::나무 아래에 사과가 떨어졌다.',
					words: {
						items: [
							{
								wordText: 'KOREAN::사과',
							},
							{
								wordText: 'KOREAN::나무',
							},
							{
								wordText: 'KOREAN::아래',
							},
							{
								wordText: 'KOREAN::떨어지다',
							},
						],
					},
				},
				{
					translation:
						'ENGLISH::I went to the water park with my friend.',
					meanings: [
						'with friend',
						'together',
						'water',
						'park',
						'went',
					],
					phrases: ['친구와', '함께', '물', '공원에', '갔다'],
					text: 'KOREAN::친구와 함께 물 공원에 갔다.',
					words: {
						items: [
							{
								wordText: 'KOREAN::물',
							},
							{
								wordText: 'KOREAN::공원',
							},
							{
								wordText: 'KOREAN::가다',
							},
							{
								wordText: 'KOREAN::친구',
							},
							{
								wordText: 'KOREAN::함께',
							},
						],
					},
				},
				{
					translation: 'ENGLISH::There were many clouds in the sky.',
					meanings: [
						'in the sky',
						'cloud',
						'a lot',
						'floating',
						'was',
					],
					phrases: ['하늘에는', '구름이', '많이', '떠', '있었다'],
					text: 'KOREAN::하늘에는 구름이 많이 떠 있었다.',
					words: {
						items: [
							{
								wordText: 'KOREAN::하늘',
							},
							{
								wordText: 'KOREAN::뜨다',
							},
							{
								wordText: 'KOREAN::구름',
							},
							{
								wordText: 'KOREAN::많이',
							},
							{
								wordText: 'KOREAN::있다',
							},
						],
					},
				},
			]);
			setLoading(false);
		};
		if (index === 0) {
			fetchNewSentences();
		}
	}, []);
	useFocusEffect(
		React.useCallback(() => {
			setButtonState(ButtonState.ShowTranslation);
			setShowTranslation(false);
			const onBackPress = () => {
				//navigation.navigate("Home");
				return true;
			};

			const subscription = BackHandler.addEventListener(
				'hardwareBackPress',
				onBackPress,
			);

			return () => subscription.remove();
		}, [index]),
	);

	const handleButton = () => {
		switch (buttonState) {
			case ButtonState.ShowTranslation:
				setShowTranslation(true);
				if (index === sentences.length - 1) {
					setButtonState(ButtonState.Finish);
				} else {
					setButtonState(ButtonState.NextSentence);
				}
				break;
			case ButtonState.NextSentence:
				navigation.push('Practice', {
					index: index + 1,
					sentencesParam: sentences,
				});
				break;
			case ButtonState.Finish:
				navigation.navigate('Home');
				break;
		}
	};

	if (loading) {
		return <LoadingScreen />;
	}

	return (
		<SafeAreaView style={styles.container}>
			<Appbar.Header>
				<Appbar.Content title={`Sentence ${index + 1}`} />
			</Appbar.Header>

			<SentenceCard
				sentence={sentences[index]}
				showTranslation={showTranslation}
			/>

			<Button
				mode="contained"
				onPress={handleButton}
				style={styles.button}>
				{buttonState.toString()}
			</Button>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
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
});

export default PracticeScreen;
