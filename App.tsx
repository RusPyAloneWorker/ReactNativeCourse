import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import styles from "./stylesheets/HomepageStyleSheet.js"
import React from "react";
import {Button, Image, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import HomePage from "./pages/HomePage.tsx";
import SettingsPage from "./pages/SettingsPage.tsx";
import ChatPage from "./pages/ChatPage.tsx";
import NewsPage from "./pages/NewsPage.tsx";
import langStore from "./lang/LangStore.ts";
import {useTranslation} from "react-i18next";

const Tab = createBottomTabNavigator();

export default function App() {
    const {i18n} = useTranslation();

    return (
        <NavigationContainer>
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    headerTitle: () => (
                       <Button
                           title={i18n.language}
                           onPress={langStore.switchLang}
                       ></Button>
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
