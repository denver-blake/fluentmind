import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import VocabScreen from '../screens/VocabScreen';

const Tab = createBottomTabNavigator();

function BottomTab() {
	return (
		<Tab.Navigator >
			<Tab.Screen name="Home" component={HomeScreen} />
			<Tab.Screen name="Vocab" component={VocabScreen} />
			<Tab.Screen name="Profile" component={ProfileScreen} />
		</Tab.Navigator>
	);
}

export default BottomTab;
