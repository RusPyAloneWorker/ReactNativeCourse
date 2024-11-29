import React, {FC, useEffect, useState} from "react";
import {ScrollView, View, Text, Image, Button, TextInput} from "react-native";
import {useRootStore} from "./base/customUseContext.ts";
import {observer} from 'mobx-react';
import styles from "./stylesheets/HomepageStyleSheet.js";
import User from "./domain/entities/User.ts";

export const HomeScreen = observer(() => {
	const { userStore } = useRootStore();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");

	useEffect(() => {
		(async function() {
			await userStore.getUsers()
		}) ();
	}, []);

	const handleAddUser = async () => {
		let user = new User({first_name: firstName, last_name: lastName});
		await userStore.addUser(user)
	}

	return (
		<ScrollView>
			{!userStore.isLoading
			    ? (
					<View style={styles.usersMenu}>
						<View style={styles.usersList}>
							<Text style={styles.textContent}>Users:</Text>
					        {(userStore.users.map((user, key) =>
					            <View key={key}>
						            <UserRow {...user}></UserRow>
					            </View>
					        ))}
						</View>

						<View>
							<TextInput
								style={styles.textInput}
								aria-label={"First name"}
								onChangeText={text => setFirstName(text)}>
							</TextInput>
							<TextInput
								style={styles.textInput}
								aria-label={"Last name"}
								onChangeText={text => setLastName(text)}>
							</TextInput>
							<Button title={"Add user"} onPress={handleAddUser}/>
						</View>
			        </View>
				)
			    : (
					<View>
			            <Text>Data is loading...</Text>
			        </View>
				)
			}
		</ScrollView>
	)
});

export const UserRow : FC<User> = (user: User) => {
	return (
		<View style={styles.userRow}>
			{(user.avatar !== undefined && user.avatar !== null)
				? <Image style={styles.avatar} source={{uri:user.avatar}} ></Image>
				: (
					<View style={styles.absentAvatar}>
						<Text style={styles.absentAvatar.text}>?</Text>
					</View>
				)
			}
			<Text>Id: {user?.id}, name: {user?.first_name}, last name: {user?.last_name}</Text>
		</View>
	)
}
