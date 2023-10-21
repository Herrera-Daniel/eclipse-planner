import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';
import IonIcons from 'react-native-vector-icons/Ionicons';
import { PaperProvider } from 'react-native-paper';
import Explore from './src/screens/Explore';
import Home from './src/screens/Home';
import SignIn from './src/screens/SignIn';
import SignUp from './src/screens/SignUp';
import Trips from './src/screens/Trips';

const navbarBGColor = '#272643'

function App(): JSX.Element {

    return (
        <NavigationContainer>
            <PaperProvider theme={theme}>
                <Tab.Navigator
                    initialRouteName={'Home'}
                    activeColor={'white'}
                    shifting={true}
                    barStyle={{
                        backgroundColor: navbarBGColor,
                    }}
                >
                    <Tab.Screen options={options('home')} name='Home' component={Home} />
                    <Tab.Screen options={options('compass')} name='Explore' component={Explore} />
                    <Tab.Screen options={options('map')} name='Trips' component={Trips} />
                    <Tab.Screen options={options('map')} name='Sign Up' component={SignUp} />
                    <Tab.Screen options={options('map')} name='Sign In' component={SignIn} />
                </Tab.Navigator>
            </PaperProvider>
        </NavigationContainer>
    );
}

export default App;

const Tab = createMaterialBottomTabNavigator();

const options = (iconName: string) => (
    {
        tabBarIcon: ({ focused }: any) => (
            <IonIcons
                style={{ backgroundColor: '#272643' }}
                color={'#139A43'}
                name={focused ? iconName : iconName + '-outline'}
                size={20}
            />
        ),
    }
);

const theme = {
    colors: {
        secondaryContainer: navbarBGColor,
    },
};
