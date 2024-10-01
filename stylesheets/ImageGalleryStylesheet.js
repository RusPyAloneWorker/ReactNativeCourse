import { StyleSheet } from "react-native";

export default StyleSheet.create({
	container: {
		paddingVertical: 20,
		alignItems: 'center',
	},
	header: {
		fontSize: 20,
		fontWeight: 'bold',
		marginBottom: 20,
	},
	gallery: {
		flexDirection: 'row',
		flexWrap: 'wrap',
		justifyContent: 'center',
	},
	imageContainer: {
		margin: 10,
		alignItems: 'center',
	},
	image: {
		width: 150,
		height: 150,
		borderRadius: 10,
	},
	imageTitle: {
		marginTop: 5,
		fontSize: 16,
	},
});