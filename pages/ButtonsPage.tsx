import React, {FC, useState} from "react";
import {Button, View, Text} from "react-native";

const ButtonsPage: FC  = () => {
	const [pressedCount, setPressedCount] = useState(0);
	const handlePress = () => {
		setPressedCount(pressedCount+1);
	};

	const resetPressCount = () => {
		setPressedCount(0);
	}

	const isDisabled = () => pressedCount >= 3;

	return (
		<View style={{
			flex: 1,
			alignItems: 'center',
			justifyContent: 'center',
			minHeight:150,
			padding:5,
			paddingBottom:30,
			marginTop: 30
		}}>
			<Text style={{ margin: 16 }}>
				{pressedCount > 0
					? `The button was pressed ${pressedCount} times!`
					: 'The button isn\'t pressed yet'
				}
			</Text>
			<Button
				title='Press me'
				onPress={handlePress}
				disabled={isDisabled()}
				color={isDisabled() ? "grey" : "blue"}
			/>

			<Button
				title='Reset'
				onPress={resetPressCount}
			/>
		</View>
	);
};

export default ButtonsPage;
