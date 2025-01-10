import styles from "../stylesheets/HomepageStyleSheet.js";
import {Text, View} from "react-native";
import {useTranslation} from "react-i18next";

export default function ChatPage () {
    const {t} = useTranslation("chatPage");

    return (
        <View style={styles.centerized}>
            <Text>{t("chat")}</Text>
        </View>
    )
}
