import React, {FC} from "react";
import {Button, Text, View} from "react-native";
import styles from "../stylesheets/HomepageStyleSheet.js"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import TextInputBlock from "./TextInputPage.tsx";
import ButtonsBlock from "./ButtonsPage.tsx";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import BoxesPage from "./BoxesPage.tsx";
import {useTranslation} from "react-i18next";

const Tab = createBottomTabNavigator();
const HomeStack = createNativeStackNavigator();

const HomePage: FC = () => {
    return (
        <>
            <Tab.Navigator initialRouteName="Home" screenOptions={{headerShown: false, tabBarIcon: () => null}}>
                <Tab.Screen name={"HomeScreen"} component={HomeNavigationScreen} />
                <Tab.Screen name={"TextInputBlock"} component={TextInputBlock}/>
                <Tab.Screen name={"ButtonsBlock"} component={ButtonsBlock} />
                <Tab.Screen name={"BoxesPage"} component={BoxesPage} />
            </Tab.Navigator>
        </>
    );
}

function HomeAboutScreen() {
    const {t} = useTranslation("homePage");

    return (
        <View style={styles.centerized}>
            <Text>{t("homeAbout")}</Text>
        </View>
    );
}

function HomeScreen() {
    const {t} = useTranslation("homePage");

    return (
        <View style={styles.centerized}>
            <Text>{t("homeScreen")}</Text>
        </View>
    );
}

function HomeNavigationScreen() {
    const {t} = useTranslation("homePage");

    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={({ navigation }) => ({
                    headerTitle: () => null,
                    title: t("homeScreen"),
                    headerLeft: () => (
                        <Button
                            onPress={() => navigation.navigate('HomeAbout')}
                            title="HomeAbout"
                        />
                    ),
                })}
            />
            <HomeStack.Screen
                name="HomeAbout"
                component={HomeAboutScreen}
                options={{ title: t("homeAbout") }}
            />
    </HomeStack.Navigator>)
}

export default HomePage;
