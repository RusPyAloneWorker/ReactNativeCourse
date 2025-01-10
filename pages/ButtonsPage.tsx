import React, {FC, useState} from "react";
import {Button, View, Text} from "react-native";
import {useTranslation} from "react-i18next";

const ButtonsPage: FC  = () => {
	const {t}= useTranslation("buttonsPage");
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
					? t("buttonPress", {value: pressedCount})
					: t("buttonNotPressed")
				}
			</Text>
			<Button
				title={t("pressMeButtonText")}
				onPress={handlePress}
				disabled={isDisabled()}
				color={isDisabled() ? "grey" : "blue"}
			/>

			<Button
				title={t("resetButtonText")}
				onPress={resetPressCount}
			/>
		</View>
	);
};

export default ButtonsPage;
