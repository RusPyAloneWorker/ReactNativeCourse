import React, {useEffect} from "react";
import {Button, SafeAreaView, ScrollView} from "react-native";
import {HomeScreen} from "./pages/HomeScreen.tsx";
import {GestureHandlerRootView} from "react-native-gesture-handler";

export default function App() {


    return (
        <GestureHandlerRootView>
            <SafeAreaView>
                <HomeScreen></HomeScreen>
            </SafeAreaView>
        </GestureHandlerRootView>
    )
};
