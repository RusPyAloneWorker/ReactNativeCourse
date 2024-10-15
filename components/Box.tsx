import {View} from "react-native";
import React, {FC} from "react";

export const Box: FC<BoxPropsType> = (props: BoxPropsType) => {
	return <View style={{ width: props.width, height: props.height, backgroundColor: props.color}} ></View>;
}

const MAX_WIDTH = 200;
const MAX_HEIGHT = 200;

export class BoxPropsType {

	constructor(color: string, width: number, height: number) {
		if (width <= 0 || width > MAX_WIDTH) {
			throw new Error("Width is out of bound");
		}

		if (height <= 0 || height > MAX_HEIGHT) {
			throw new Error("Height is out of bound");
		}

		if (color === "" || color === null) {
			throw new Error("No color was provided");
		}

		this.color = color;
		this.width = width;
		this.height = height;
	}

	height: number;
	width: number;
	color: string
}


