import {createNativeStackNavigator} from '@react-navigation/native-stack';
import PracticeScreen from '../screens/PracticeScreen';

const stack = createNativeStackNavigator();

function PracticeStack() {
	return (
		<stack.Navigator>
			<stack.Screen
				name="Practice"
				component={PracticeScreen}
				initialParams={{index: 0}}
			/>
		</stack.Navigator>
	);
}

export default PracticeStack;
