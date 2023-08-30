import React from 'react';
import {PaperProvider} from 'react-native-paper';
import {withAuthenticator} from '@aws-amplify/ui-react-native';
import {NavigationContainer} from '@react-navigation/native';

import HomeStack from './src/navigation/HomeStack';



const App = () => {
	return (
		<PaperProvider>
			<NavigationContainer>
				<HomeStack />
			</NavigationContainer>
		</PaperProvider>
	);
};

export default withAuthenticator(App);
