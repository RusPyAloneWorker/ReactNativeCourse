import React, {FC} from "react";
import {Button, Text, View} from "react-native";
import styles from "../stylesheets/HomepageStyleSheet.js"
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import TextInputBlock from "./TextInputPage.tsx";
import ButtonsBlock from "./ButtonsPage.tsx";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import BoxesPage from "./BoxesPage.tsx";

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
    return (
        <View style={styles.centerized}>
            <Text>О приложении</Text>
        </View>
    );
}

function HomeScreen() {
    return (
        <View style={styles.centerized}>
            <Text>Домашняя страница</Text>
        </View>
    );
}

function HomeNavigationScreen() {
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen
                name="Home"
                component={HomeScreen}
                options={({ navigation }) => ({
                    headerTitle: () => null,
                    title: "Домашняя страница",
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
                options={{ title: 'О приложении' }}
            />
    </HomeStack.Navigator>)
}

export default HomePage;
