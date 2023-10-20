import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import {
	StyleSheet, useColorScheme
} from 'react-native';
import IonIcons from 'react-native-vector-icons/Ionicons';

import { PaperProvider } from 'react-native-paper';
import {
	Colors
} from 'react-native/Libraries/NewAppScreen';
import Explore from './src/screens/Explore';
import Home from './src/screens/Home';
import Trips from './src/screens/Trips';
import { createClient } from '@supabase/supabase-js';

const supabase = createClient('https://eclipse-planner.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imh5aGRjeGtocm9wZG1ueXRpaWxoIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTY0NzQyMDIsImV4cCI6MjAxMjA1MDIwMn0.RUdMvotH9Rh5PW9rfK4b-QoATsmTFvDkKiiy7lowjCA')

const options = (iconName: string) => (
	{
		tabBarIcon: ({ focused }: any) => (
			<IonIcons
				style={{borderRadius: 20, backgroundColor: '#171b25' }}
				color={'#139A43'}
				name={focused ? iconName : iconName + '-outline'}
				size={24}
			/>
		),
	}
);

const Tab = createMaterialBottomTabNavigator();

function App(): JSX.Element {
	const isDarkMode = useColorScheme() === 'dark';

	const backgroundStyle = {
		backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
		flex: 1,
	};

	return (
		<NavigationContainer>
			<PaperProvider theme={theme}>
				<Tab.Navigator
					initialRouteName={'Home'}
					activeColor={'white'}
					shifting={true}
					barStyle={{
						backgroundColor: '#171b25',
					}}
				>
					<Tab.Screen options={options('home')} name='Home' component={Home} />
					<Tab.Screen options={options('compass')} name='Explore' component={Explore} />
					<Tab.Screen options={options('map')} name='Trips' component={Trips} />
				</Tab.Navigator>
			</PaperProvider>
		</NavigationContainer>
	);
}

const theme = {
    colors: {
        secondaryContainer: '#171b25',
    },
};

const styles = StyleSheet.create({
	sectionContainer: {
		marginTop: 32,
		paddingHorizontal: 24,
	},
	sectionTitle: {
		fontSize: 24,
		fontWeight: '600',
	},
	sectionDescription: {
		marginTop: 8,
		fontSize: 18,
		fontWeight: '400',
	},
	highlight: {
		fontWeight: '700',
	},
});

export default App;
