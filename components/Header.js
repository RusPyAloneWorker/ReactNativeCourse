import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import styles from "../stylesheets/HeaderStyleSheet" ;

const Header = () => {
	return (
		<SafeAreaView style={styles.header}>
			<View style={styles.headerContent}>
				<Text style={styles.headerTitle}>Header</Text>
			</View>
		</SafeAreaView>
	);
};

export default Header;