import React, {useContext} from "react";
import {Button, View} from "react-native";
import {ThemeContext, ThemeProvider} from "./stylesheets/theme/ThemeProvider.tsx";
import {useTheme} from "./stylesheets/theme/useTheme.ts";
import {ThemeTypes} from "./stylesheets/theme/ThemeTypes.tsx";
import BoxesPage from "./pages/BoxesPage.tsx";


export default function App() {
    return (
        <ThemeProvider>
            <BaseApp></BaseApp>
        </ThemeProvider>
    )
}

function BaseApp() {
    const themeContext = useContext(ThemeContext);
    const {Colors} = useTheme();

    const handleChangeTheme = () => {
        let currentTheme = themeContext?.theme;

        if (currentTheme !== undefined) {
            themeContext?.changeTheme(ThemeTypes.DARK);
        }

        let newTheme = currentTheme === ThemeTypes.LIGHT ? ThemeTypes.DARK : ThemeTypes.LIGHT;
        themeContext?.changeTheme(newTheme);
    }

    return (
        <View style={{backgroundColor: Colors.backgroundPrimary, height:'100%'}}>
            <Button color={Colors.accentDefault} title={"Change theme"} onPress={handleChangeTheme}></Button>
            <BoxesPage></BoxesPage>
        </View>
    )
}
