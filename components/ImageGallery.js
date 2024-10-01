import React from 'react';
import { View, Image, ScrollView, Text } from 'react-native';
import styles from '../stylesheets/ImageGalleryStylesheet';

const ImageGallery = () => {
	const images = [
		{ uri: 'https://upload.wikimedia.org/wikipedia/ru/thumb/a/ab/DeathstorkeTheNew52.jpg/230px-DeathstorkeTheNew52.jpg', id: 1, title: 'Image 1' },
		{ uri: 'https://s1.zerochan.net/Calcharo.600.4179256.jpg', id: 2, title: 'Image 2' },
		{ uri: 'https://news.microsoft.com/wp-content/uploads/prod/sites/46/2021/11/fh5mnc.jpg', id: 3, title: 'Image 3' },
		{ uri: 'https://i.etsystatic.com/12047134/r/il/5ae49b/5238607580/il_570xN.5238607580_le3w.jpg', id: 4, title: 'Image 4' },
		{ uri: 'https://i.etsystatic.com/12047134/r/il/5ae49b/5238607580/il_570xN.5238607580_le3w.jpg', id: 5, title: 'Image 5' },
		{ uri: 'https://i.etsystatic.com/12047134/r/il/5ae49b/5238607580/il_570xN.5238607580_le3w.jpg', id: 6, title: 'Image 6' },
		{ uri: 'https://i.etsystatic.com/12047134/r/il/5ae49b/5238607580/il_570xN.5238607580_le3w.jpg', id: 7, title: 'Image 7' },
	];
	
	return (
		<ScrollView contentContainerStyle={styles.container}>
			<Text style={styles.header}>Image Gallery</Text>
			<View style={styles.gallery}>
				{images.map((image) => (
					<View key={image.id} style={styles.imageContainer}>
						<Image source={{ uri: image.uri }} style={styles.image} />
						<Text style={styles.imageTitle}>{image.title}</Text>
					</View>
				))}
			</View>
		</ScrollView>
	);
};

export default ImageGallery;