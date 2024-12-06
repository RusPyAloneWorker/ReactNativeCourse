import React, {useEffect} from "react";
import {Button, Linking, ScrollView} from "react-native";
import {HomeScreen} from "./pages/HomeScreen.tsx";
import {NavigationContainer} from "@react-navigation/native";
import {DeepLinking} from "./base/DeepLinking.ts";
import Navigation, {LINKING_PREFIX} from "./base/Navigation.ts";
import AboutScreen from "./pages/AboutScreen.tsx";
import {createNativeStackNavigator} from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
    useEffect(() => {
        Linking.getInitialURL().then(async deepLinkInitialURL => {
            if (deepLinkInitialURL) {
                console.log(deepLinkInitialURL)
                await DeepLinking.handleInitialNavigate(deepLinkInitialURL);
            }
        });
    }, []);

    return (
        <ScrollView>
            <ScrollView>
                <NavigationContainer linking={DeepLinking.linking} ref={Navigation.navigationRef}>
                    <Stack.Navigator>
                        <Stack.Screen name={"Home"} component={HomeScreen} />
                        <Stack.Screen name={"About"} component={AboutScreen} />
                    </Stack.Navigator>
                </NavigationContainer>
            </ScrollView>
            <Button title={"Press me"} onPress={()=>Linking.openURL(`${LINKING_PREFIX}Home`)}></Button>
        </ScrollView>
    )
};
