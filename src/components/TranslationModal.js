import React from 'react';
import {Text, Modal} from 'react-native-paper';

function TranslationModal({sentence, index, visible, closeModal}) {
	return (
		<Modal visible={visible} onDismiss={closeModal}>
			<Text>
				{sentence.phrases[index]} (root word:{' '}
				{sentence.words.items[index].wordText.split('::')[1]})
			</Text>
			<Text>{sentence.meanings[index]}</Text>
		</Modal>
	);
}

export default TranslationModal;
