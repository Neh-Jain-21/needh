import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link, useRouter } from 'expo-router';
// COMPONENTS
import Header from '@/components/Header/Header';
// HELPERS
import COLORS from '@/helpers/Colors';
import { FONT_SIZE } from '@/helpers/Fonts';
import { DIMENSION_Y, DIMENSION_X } from '@/helpers/Dimensions';

export default function HomeScreen() {
	const router = useRouter();

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

			<TouchableOpacity style={{ marginTop: DIMENSION_X._20 }} onPress={() => router.navigate('/login')}>
				<Image source={require('@/assets/images/ArrowRightImage.png')} />
			</TouchableOpacity>

			<View style={styles.imgContainer}>
				<Image style={{ zIndex: -1 }} source={require('@/assets/images/HeroImage.png')} />
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		position: 'relative',
		paddingHorizontal: DIMENSION_Y._20,
		backgroundColor: COLORS.PRIMARY,
	},
	title: {
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
		marginTop: DIMENSION_X._20,
	},
	titleText: {
		fontSize: FONT_SIZE._24,
	},
	titleTextBold: {
		fontSize: FONT_SIZE._24,
		fontWeight: 'bold',
	},
	imgContainer: {
		position: 'absolute',
		bottom: 0,
		left: 0,
		right: 0,
	},
});
