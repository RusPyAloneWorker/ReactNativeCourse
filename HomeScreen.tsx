import React, {useEffect} from "react";
import {ScrollView, View, Text, Image} from "react-native";
import {useRootStore} from "./base/customUseContext.ts";
import {observer} from "mobx-react";

export const HomeScreen = observer(() => {
	const { userStore } = useRootStore();

	useEffect(() => {
		(async function() {
			await userStore.getUsers()
		}) ();
	}, []);

	return (
		<ScrollView>
			{/*<Text>{`${userStore.isLoading}`}</Text>*/}
			{/*{!userStore.isLoading*/}
			{/*    ?	<View><Text>Users:</Text>*/}
			{/*        {(userStore.users.map((user, key) =>*/}
			{/*            <View key={key}>*/}
			{/*                <Image src={user.avatar}></Image>*/}
			{/*                <Text>Id: {user.id}, name: {user.first_name}, last name: {user.last_name}</Text>*/}
			{/*            </View>*/}
			{/*        ))}*/}
			{/*    </View>*/}
			{/*    :   (<View>*/}
			{/*        <Text>Data is loading</Text>*/}
			{/*    </View>)*/}
			{/*}*/}
			<View>
				<Text>Users:</Text>
				{(userStore.users.map((user, key) =>
					<View key={key}>
						<Image src={user.avatar}></Image>
						<Text>Id: {user.id}, name: {user.first_name}, last name: {user.last_name}</Text>
					</View>
				))}
			</View>
		</ScrollView>
	)
});
