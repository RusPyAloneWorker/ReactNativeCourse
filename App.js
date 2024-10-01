import {ScrollView, Text, View} from 'react-native';
import Header from "./components/Header";
import ImageGallery from "./components/ImageGallery";
import styles from "./stylesheets/HomepageStyleSheet";

export default function App() {
  return (
      <View style={styles.container}>
        <Header />
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.greetingWrapper}>
            <View style={styles.greeting}>
              <Text style={{ fontSize:25, textAlign:"center", fontWeight:"800" }}>Welcome to my React Native App!</Text>
            </View>
          </View>
          <ImageGallery />
          <Text style={styles.textContent}>This is my first React Native App!</Text>
        </ScrollView>
      </View>
  );
}