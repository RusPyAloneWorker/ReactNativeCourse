import React, {FC, useEffect, useState} from "react";
import {ScrollView, View, Text, Image, Button, TextInput} from "react-native";
import {useRootStore} from "./base/customUseContext.ts";
import {observer} from 'mobx-react';
import styles from "./stylesheets/HomepageStyleSheet.js";
import User, {UserParams} from "./domain/entities/User.ts";
import {RealmClient} from "./infrastructure/RealmClient.ts";

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
		let user = { id: null, first_name: firstName, last_name: lastName };
		await userStore.addUser(user)
	}

	const handleRefreshUsers = async () => await userStore.refreshUsers();

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

							<Button title={"Refresh users"} onPress={handleRefreshUsers}/>
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

export const UserRow = ({avatar, first_name, last_name, id, email}: UserParams) => {
	return (
		<View style={styles.userRow}>
			{(avatar !== undefined && avatar !== null)
				? <Image style={styles.avatar} source={{uri:avatar}} ></Image>
				: (
					<View style={styles.absentAvatar}>
						<Text style={styles.absentAvatar.text}>?</Text>
					</View>
				)
			}
			<Text>Id: {id}, name: {first_name}, last name: {last_name}</Text>
		</View>
	)
}
