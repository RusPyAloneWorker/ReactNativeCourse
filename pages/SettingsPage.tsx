import styles from "../stylesheets/HomepageStyleSheet.js";
import {Text, View} from "react-native";
import {useTranslation} from "react-i18next";

export default function SettingsPage () {
    const {t} = useTranslation("settingsPage")

    return (
        <View style={styles.centerized}>
            <Text>{t("settings")}</Text>
        </View>
    )
}
