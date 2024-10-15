import React, {useState} from "react";
import {TextInput, View, Text, Button} from "react-native";
import styles from "../stylesheets/TextInputBlockStyleSheet.js"

const TextInputPage = () => {
	const LOGIN = "логин";
	const PASSWORD = "пароль";

	const [login, setLogin] = useState('');
	const [password, setPassword] = useState('');
	const [isLoginAttempted, setLoginAttempted] = useState(false);
	const [isLoginSucceed, setIsLoginSucceed] = useState(false);


	const handleLogin = () => {
		setLoginAttempted(true);
		setIsLoginSucceed(login === LOGIN && password === PASSWORD);
	};

	return (
		<>
			{ !isLoginSucceed && <View style={styles.content}>
				{isLoginAttempted && <Text style={{marginVertical: 16, flex: 1}}>
					{!isLoginSucceed && "Неверный пароль или логин"}
				</Text>}
				<Text>Логин: {login}</Text>
				<TextInput
					placeholder={'Логин'}
					style={styles.textInput}
					onChangeText={text => setLogin(text)}
				/>
				<Text>Пароль: {password}</Text>
				<TextInput
					placeholder={'Пароль'}
					style={styles.textInput}
					onChangeText={text => setPassword(text)}
				/>
				<View style={styles.button}>
					<Button title={"Войти"} onPress={handleLogin}/>
				</View>
			</View>
			}
			{ isLoginSucceed &&
				<View style={styles.content}>
					<Text style={{ fontSize:30, fontWeight:"500", }}>Добро пожаловать</Text>
				</View>
			}
		</>
	);
};

export default TextInputPage;
