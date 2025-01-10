import React, {useState} from "react";
import {TextInput, View, Text, Button} from "react-native";
import styles from "../stylesheets/TextInputBlockStyleSheet.js"
import { useTranslation } from "react-i18next";

const TextInputPage = () => {
	const LOGIN = "логин";
	const PASSWORD = "пароль";

	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [isLoginAttempted, setLoginAttempted] = useState(false);
	const [isLoginSucceed, setIsLoginSucceed] = useState(false);
	const { t } = useTranslation("textInputPage");


	const handleLogin = () => {
		setLoginAttempted(true);
		setIsLoginSucceed(login === LOGIN && password === PASSWORD);
	};

	return (
		<>
			{ !isLoginSucceed && <View style={styles.content}>
				{isLoginAttempted && <Text style={{marginVertical: 16, flex: 1}}>
					{!isLoginSucceed && t("incorrectLoginTextMessage")}
				</Text>}
				<Text>{t("login")}: {login}</Text>
				<TextInput
					placeholder={'Логин'}
					style={styles.textInput}
					onChangeText={text => setLogin(text)}
				/>
				<Text>{t("password")}: {password}</Text>
				<TextInput
					placeholder={'Пароль'}
					style={styles.textInput}
					onChangeText={text => setPassword(text)}
				/>
				<View style={styles.button}>
					<Button title={t("logInButton")} onPress={handleLogin}/>
				</View>
			</View>
			}
			{ isLoginSucceed &&
				<View style={styles.content}>
					<Text style={{ fontSize:30, fontWeight:"500", }}>{t("welcomeTestMessage")}</Text>
				</View>
			}
		</>
	);
};

export default TextInputPage;
