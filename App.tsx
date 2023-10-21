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

const Tab = createMaterialBottomTabNavigator();

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
                </Tab.Navigator>
            </PaperProvider>
        </NavigationContainer>
    );
}

const theme = {
    colors: {
        secondaryContainer: navbarBGColor,
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
