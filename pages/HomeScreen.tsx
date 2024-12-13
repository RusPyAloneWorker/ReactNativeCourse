import React, {useEffect, useRef, useState} from "react";
import {ScrollView, View, Text, Image, Button, TextInput, Animated, Alert, FlatList} from "react-native";
import {useRootStore} from "../base/customUseContext.ts";
import {observer} from 'mobx-react';
import styles from "../stylesheets/HomepageStyleSheet.js";
import User from "../domain/entities/User.ts";
import {Modalize} from "react-native-modalize";

export const HomeScreen = observer(() => {
	const { userStore } = useRootStore();
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const modalizeRef = useRef<Modalize>(null);

	useEffect(() => {
		(async function() {
			await userStore.getUsers()
		}) ();
	}, []);

	const handleAddUser = async () => {
		let user = new User({first_name: firstName, last_name: lastName});
		await userStore.addUser(user)
	}

	const onDelete = (user: User) => {
		Alert.alert('Delete', 'Are you sure you want to delete this user?', [
			{
				text: 'No',
				style: 'cancel',
			},
			{text: 'Yes', onPress: async () => await handleDeleteUser(user)},
		]);
	}

	const handleDeleteUser: (user: User) => Promise<void> = async (user: User) => {
		await userStore.removeUser(user);
	}

	const openModal = () => {
		modalizeRef.current?.open();
	};

	// Функция для закрытия модального окна
	const closeModal = () => {
		modalizeRef.current?.close();
	};

	return (
		<ScrollView>
			{!userStore.isLoading
			    ? (
					<View style={styles.usersMenu}>
						<View style={styles.usersList}>
							<Text style={styles.textContent}>Users:</Text>
					        {(userStore.users.map((user, key) =>
					            <View key={key} style={{display:"flex"}}>
						            <UserRow user={user} deletable={true} onDelete={onDelete}></UserRow>
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
						<View style={{marginTop:50}}><Button title={"Open Modal Window"} onPress={openModal}></Button></View>
					</View>
				)
			    : (
					<View>
			            <Text>Data is loading...</Text>
			        </View>
				)
			}
			<UserModal modalRef={modalizeRef} users={userStore.users}></UserModal>
		</ScrollView>
	)
});

interface IUserRowProps {
	user: User,
	deletable: boolean,
	onDelete: ((user: User) => void) | null
}

export const UserRow = ({user, deletable=false, onDelete=null} : IUserRowProps) => {
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
			<Text>{user?.first_name} {user?.last_name}</Text>
			{deletable && <Button color={'darkred'} title={"Del"} onPress={() => onDelete?.(user)}></Button>}
		</View>
	)
}


const UserModal = ({ modalRef, users }: { modalRef: React.RefObject<Modalize>, users: Array<User> }) => {
	return (
		<Modalize
			ref={modalRef}
			modalHeight={400}
			handlePosition="inside">
			<View style={{margin:20}}>
				<View style={{display:"flex", alignItems:"center"}}>
					<Text>Список пользователей</Text>
				</View>
				{(users.map((user, key) =>
					<View key={key} style={{display:"flex"}}>
						<UserRow user={user} deletable={false} onDelete={null}></UserRow>
					</View>
				))}
			</View>
		</Modalize>
	);
};
