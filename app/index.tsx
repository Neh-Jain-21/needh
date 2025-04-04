import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// COMPONENTS
import Header from '@/components/Header/Header';

export default function HomeScreen() {
	return (
		<SafeAreaView style={styles.container}>
			<Header />

			<View style={styles.title}>
				<Text style={styles.titleText}>Needh is committed to </Text>
				<Text style={styles.titleTextBold}>creating spaces </Text>
				<Text style={styles.titleText}>that reflect </Text>
				<Text style={styles.titleTextBold}>comfort </Text>
				<Text style={styles.titleText}>and </Text>
				<Text style={styles.titleTextBold}>a sense of belonging</Text>
			</View>

			<TouchableOpacity style={{ marginTop: 20 }}>
				<Image source={require('@/assets/images/ArrowRightImage.png')} />
			</TouchableOpacity>

			<View style={styles.imgContainer}>
				<Image source={require('@/assets/images/HeroImage.png')} />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'relative',
		paddingHorizontal: 20,
		backgroundColor: '#F2ECE0',
	},
	title: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: 20,
	},
	titleText: {
		fontSize: 24,
	},
	titleTextBold: {
		fontSize: 24,
		fontWeight: 'bold',
	},
	imgContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
	},
});
