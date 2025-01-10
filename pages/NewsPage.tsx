import styles from "../stylesheets/HomepageStyleSheet.js";
import {Text, View} from "react-native";
import {useTranslation} from "react-i18next";

export default function NewsPage () {
    const {t} = useTranslation("newsPage");

    return (
        <View style={styles.centerized}>
            <Text>{t("news")}</Text>
        </View>
    )
}
