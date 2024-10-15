import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	container: {
		flex: 1,
	},
	scrollContent: {
		paddingTop: 70,
	},
	textContent: {
		fontSize: 18,
		padding: 20,
	},
	greetingWrapper: {
		margin: 20,
		display: "flex",
	},
	centerized: {
		alignItems: 'center',
		flex: 1,
		justifyContent: 'center',
	},
	wrapperBlock: {
		flex: 1,
		backgroundColor: '#ff9',
		alignItems: 'center',
		justifyContent: 'center',
		minHeight:150,
		padding:5,
		paddingBottom:30,
		marginTop: 30
	},
});
