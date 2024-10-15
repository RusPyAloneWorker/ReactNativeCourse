import React, {useState} from 'react';
import {View, Text, TextInput, Button, TouchableOpacity, ScrollView} from 'react-native';
import {Box, BoxPropsType} from "../components/Box.tsx";
import styles from "../stylesheets/HomepageStyleSheet.js"
import inputStyles from "../stylesheets/TextInputBlockStyleSheet.js"

export default function BoxesPage()  {
	const COLOR_BOX_WIDTH = 50;
	const COLOR_BOX_HEIGHT = 50;

	const [boxesProps, setBoxesProps] = useState(Array<BoxPropsType>);
	const [width, setWidth] = useState(100);
	const [height, setHeight] = useState(100);
	const [color, setColor] = useState(String);
	const [errorText, setErrorText] = useState(String);

	function handleWidthInput(widthText: string) {
		let width = parseInt(widthText);

		if(!isNaN(width))
			setWidth(width);
	}

	function handleHeightInput(heightText: string) {
		let width = parseInt(heightText);

		if(!isNaN(width))
			setHeight(width);
	}

	function handleSubmit () {
		try {
			let boxProp = new BoxPropsType(color, width, height);
			setErrorText("");
			setBoxesProps(boxesProps =>  ([...boxesProps, boxProp]));
		}
		catch (error) {
			if (error instanceof Error) {
				setErrorText(error.message);
			}
		}
	}

	return (
		<View style={styles.centerized}>

			<ScrollView>
				<View>
				{ boxesProps.map((box, key) =>
					<View style={{ margin:5 }} key={key}>
						<Box {...box}></Box>
					</View>
				)}
				</View>
			</ScrollView>

			<Text>{errorText}</Text>

			<Text>Ширина</Text>
			<TextInput style={inputStyles.textInput} keyboardType={"numeric"} onChangeText={text => handleWidthInput(text)} />

			<Text>Высота</Text>
			<TextInput style={inputStyles.textInput} keyboardType={"numeric"} onChangeText={text => handleHeightInput(text)} />

			<View style={{display:"flex", flexDirection:"row", margin:5}}>
				<TouchableOpacity onPress={()=>setColor("blue")}>
					<Box height={COLOR_BOX_HEIGHT} width={COLOR_BOX_WIDTH} color={"blue"}></Box>
				</TouchableOpacity>
				<TouchableOpacity onPress={()=>setColor("red")}>
					<Box height={COLOR_BOX_HEIGHT} width={COLOR_BOX_WIDTH} color={"red"}></Box>
				</TouchableOpacity>
				<TouchableOpacity onPress={()=>setColor("green")}>
					<Box height={COLOR_BOX_HEIGHT} width={COLOR_BOX_WIDTH} color={"green"}></Box>
				</TouchableOpacity>
			</View>

			<View style={{display:"flex", flexDirection:"row"}}>
				<Button title={"Добавить"} onPress={handleSubmit}></Button>
				<Button title={"Очистить"} onPress={()=>setBoxesProps([])}></Button>
			</View>
		</View>
	)
};
