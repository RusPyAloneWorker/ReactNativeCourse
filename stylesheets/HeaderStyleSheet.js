import { StyleSheet } from 'react-native';

export default StyleSheet.create({
	header: {
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		height: 60,
		backgroundColor: '#6200EE',
		zIndex: 1000,
		elevation: 1000,
	},
	headerContent: {
		flex: 1,
		justifyContent: 'center',
		alignItems: 'center',
	},
	headerTitle: {
		color: '#fff',
		fontSize: 20,
		fontWeight: 'bold',
	},
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},
});