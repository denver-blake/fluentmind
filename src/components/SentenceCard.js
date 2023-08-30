import React from 'react';
import {View, StyleSheet} from 'react-native';

import {Card, Text, Tooltip} from 'react-native-paper';

function SentenceCard({sentence, showTranslation, onWordPress}) {
	return (
		<View style={styles.content}>
			<Card style={styles.card}>
				<Card.Content>
					<View style={styles.sentence}>
						{sentence.phrases.map((phrase, index) => {
							return (
								<Tooltip
									key={index}
									title={sentence.meanings[index]}>
									<Text>{phrase} </Text>
								</Tooltip>
							);
						})}
					</View>

					{showTranslation && (
						<>
							<View
								style={{
									height: 1,
									backgroundColor: 'black',
									marginVertical: 10,
								}}
							/>
							<Text>{sentence.translation.split('::')[1]}</Text>
						</>
					)}
				</Card.Content>
			</Card>
		</View>
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
	sentence: {
		//flex: 1,
		flexDirection: 'row',
		//justifyContent: 'center',
		paddingBottom: 15,
	},
});
export default SentenceCard;
