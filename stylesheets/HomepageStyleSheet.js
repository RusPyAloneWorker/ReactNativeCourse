import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	scrollContent: {
		paddingTop: 70,
	},
	textContent: {
		fontSize: 20,
		fontWeight: "bold",
		padding: 10,
	},
	textInput: {
		borderColor: "gray",
		width: "100%",
		borderWidth: 1,
		borderRadius: 5,
		padding: 10,
		marginBottom: 5,
	},
	usersMenu: {
		margin:10
	},
	usersList: {
		marginBottom:20,
	},
	avatar: {
		width: 50,
		height: 50,
		borderRadius: 20,
	},
	absentAvatar: {
		width: 50,
		height: 50,
		borderRadius: 20,
		backgroundColor: "#bebebe",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		text: {
			color: "white"
		}
	},
	userRow: {
		display:"flex",
		flexDirection:"row",
		alignItems:"center",
		justifyContent: "space-between",
		margin: 5,
	}
});
