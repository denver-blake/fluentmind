import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTab from './BottomTab';
import PracticeStack from './PracticeStack';

const Stack = createNativeStackNavigator();

function HomeStack() {
	return (
		<Stack.Navigator screenOptions={{headerShown:false}}>
			<Stack.Screen name="MainTab" component={BottomTab} />
			<Stack.Screen name="PracticeStack" component={PracticeStack} />
		</Stack.Navigator>
	);
}

export default HomeStack;
