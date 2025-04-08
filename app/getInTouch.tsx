import { useRouter } from 'expo-router';
import { View, StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// COMPONENTS
import Header from '@/components/Header/Header';
// HELPERS
import COLORS from '@/helpers/Colors';
import { FONT_SIZE } from '@/helpers/Fonts';
import { DIMENSION_Y, DIMENSION_X, _DEVICE_WIDTH } from '@/helpers/Dimensions';

const DATA = [
	{ title: 'Phone Number', data: '+91 600 517 6168', image: require('@/assets/images/PhoneImage.png') },
	{ title: 'Email Address', data: 'hello@needhdesignstudio.com', image: require('@/assets/images/EmailImage.png') },
	{
		title: 'Phone Number',
		data: 'B14/29, First Floor, DLF Phase-1, Sector 26A, Gurgaon 122002',
		image: require('@/assets/images/AddressCardImage.png'),
	},
	{
		title: 'Phone Number',
		data: 'H.No 250, Sector 1/A, Trikuta Nagar, Jammu, J&K 180012',
		image: require('@/assets/images/AddressCardImage.png'),
	},
];

export default function GetInTouchScreen() {
	const router = useRouter();

	return (
		<SafeAreaView style={styles.container}>
			<Header />

			<TouchableOpacity onPress={router.back} style={styles.goBackContainer}>
				<Image source={require('@/assets/images/ArrowLeftImage.png')} />
			</TouchableOpacity>

			<Text style={styles.titleText}>Get in Touch</Text>

			<Text style={styles.captionText}>Reach us out at below details.</Text>

			<View style={styles.details}>
				{DATA.map((item, index) => (
					<View key={index} style={styles.detailsContainer}>
						<Image source={item.image} />

						<View style={styles.textContainer}>
							<Text style={styles.detailsTextTitle}>{item.title}</Text>
							<Text style={styles.detailsTextCaption}>{item.data}</Text>
						</View>
					</View>
				))}
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
	goBackContainer: {
		marginTop: DIMENSION_X._20,
	},
	titleText: {
		marginTop: DIMENSION_X._30,
		fontSize: FONT_SIZE._28,
		fontWeight: 700,
		color: COLORS.TEXT_PRIMARY,
	},
	captionText: {
		marginTop: DIMENSION_X._20,
		fontSize: FONT_SIZE._16,
		fontWeight: 400,
		color: COLORS.TEXT_SECONDARY,
	},
	details: {
		marginTop: DIMENSION_X._30,
		borderBottomWidth: 1,
		borderBottomColor: COLORS.DARK_PRIMARY,
	},
	detailsContainer: {
		display: 'flex',
		borderTopWidth: 1,
		flexDirection: 'row',
		alignItems: 'center',
		gap: DIMENSION_X._40,
		paddingHorizontal: DIMENSION_X._20,
		paddingVertical: DIMENSION_X._20,
		borderTopColor: COLORS.DARK_PRIMARY,
	},
	textContainer: {
		gap: DIMENSION_X._8,
	},
	detailsTextTitle: {
		fontSize: FONT_SIZE._14,
		fontWeight: 400,
	},
	detailsTextCaption: {
		marginTop: DIMENSION_X._10,
		fontSize: FONT_SIZE._14,
		fontWeight: 600,
		width: _DEVICE_WIDTH - DIMENSION_Y._100 - 50,
	},
});
