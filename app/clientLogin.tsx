import { useRouter } from 'expo-router';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// COMPONENTS
import Header from '@/components/Header/Header';
import Button from '@/components/Button/Button';
import PhoneNumberInput from '@/components/PhoneNumberInput';
// HELPERS
import COLORS from '@/helpers/Colors';
import { FONT_SIZE } from '@/helpers/Fonts';
import { BORDER_RADIUS, DIMENSION_Y, DIMENSION_X } from '@/helpers/Dimensions';

export default function ClientLoginScreen() {
	const router = useRouter();

	return (
		<SafeAreaView style={styles.container}>
			<Header />

			<Text style={styles.titleText}>Client Login</Text>

			<Text style={styles.captionText}>Welcome back!! Please enter your details.</Text>

			<Text style={styles.phoneNumberText}>Phone Number</Text>

			<PhoneNumberInput />

			<Button title="Login" onPress={() => router.navigate('/otp')} />

			<View style={styles.adminTextContainer}>
				<Text style={styles.adminText}>Are you an Admin? </Text>

				<TouchableOpacity onPress={() => router.navigate('/adminLogin')}>
					<Text style={{ ...styles.adminText, fontWeight: '700' }}>Log In</Text>
				</TouchableOpacity>
			</View>

			<TouchableOpacity style={styles.getInTouchContainer} onPress={() => router.navigate('/getInTouch')}>
				<Text style={styles.getInTouchText}>Get in Touch</Text>
			</TouchableOpacity>
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
	titleText: {
		marginTop: DIMENSION_X._20,
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
	phoneNumberText: {
		marginTop: DIMENSION_X._30,
		fontSize: FONT_SIZE._16,
		fontWeight: 500,
		color: COLORS.TEXT_PRIMARY,
	},
	loginBtn: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginTop: DIMENSION_X._50,
		height: DIMENSION_Y._56,
		backgroundColor: COLORS.DARK_PRIMARY,
		paddingVertical: DIMENSION_Y._10,
		paddingHorizontal: DIMENSION_Y._20,
		borderRadius: BORDER_RADIUS._10,
		borderWidth: 1,
		borderColor: '#fff',
	},
	loginBtnText: {
		color: COLORS.LIGHT,
		fontSize: FONT_SIZE._16,
		fontWeight: 700,
	},
	adminTextContainer: {
		marginTop: DIMENSION_X._30,
		fontSize: FONT_SIZE._16,
		fontWeight: 400,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		color: COLORS.TEXT_PRIMARY,
		justifyContent: 'center',
	},
	adminText: {
		fontSize: FONT_SIZE._16,
		fontWeight: 400,
		color: COLORS.TEXT_PRIMARY,
		textAlign: 'center',
	},
	getInTouchContainer: {
		width: 100,
		marginTop: 'auto',
		borderBottomWidth: 2,
		marginHorizontal: 'auto',
		marginBottom: DIMENSION_X._30,
	},
	getInTouchText: {
		fontWeight: 700,
		textAlign: 'center',
		fontSize: FONT_SIZE._16,
	},
});
