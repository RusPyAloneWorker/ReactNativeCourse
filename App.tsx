import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import styles from "./stylesheets/HomepageStyleSheet.js"
import React from "react";
import {Image, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import HomePage from "./pages/HomePage.tsx";
import SettingsPage from "./pages/SettingsPage.tsx";
import ChatPage from "./pages/ChatPage.tsx";
import NewsPage from "./pages/NewsPage.tsx";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerTitle: () => (
                       <Image
                           source={require('./assets/logo.webp')}
                           style={{ width: 60, height: 60, alignItems: 'flex-end' }}
                           resizeMode="contain"
                       />
                    ),
                    tabBarActiveTintColor: 'tomato',
                    tabBarInactiveTintColor: 'gray',
                    tabBarIcon: () => null,
                    headerTitleAlign:"center"
                })}>
                    <Tab.Screen name={"Homepage"} component={HomePage} />
                    <Tab.Screen name={"Settings"} component={SettingsPage} />
                    <Tab.Screen name={"ChatPage"} component={ChatPage} />
                    <Tab.Screen name={"NewsPage"} component={NewsPage} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}
