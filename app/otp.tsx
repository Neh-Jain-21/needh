import { useState } from 'react';
import { useRouter } from 'expo-router';
import { StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
// COMPONENTS
import Header from '@/components/Header/Header';
import Button from '@/components/Button/Button';
import OtpInput from '@/components/OtpInput/OtpInput';
// HELPERS
import COLORS from '@/helpers/Colors';
import { FONT_SIZE } from '@/helpers/Fonts';
import { BORDER_RADIUS, DIMENSION_Y, DIMENSION_X } from '@/helpers/Dimensions';

export default function OtpScreen() {
	const router = useRouter();

	const [otp, setOtp] = useState('');

	return (
		<SafeAreaView style={styles.container}>
			<Header />

			<Text style={styles.titleText}>Check your messages</Text>

			<Text style={styles.captionText}>We sent a 4 digit OTP to +91 XXXXXXXXXX</Text>

			<OtpInput
				handleTextChange={setOtp}
				offTintColor={COLORS.LIGHT}
				containerStyle={{ width: '95%', marginTop: DIMENSION_Y._50, marginHorizontal: 'auto' }}
				tintColor={COLORS.DARK_SECONDARY}
				textInputStyle={{
					backgroundColor: COLORS.LIGHT,
					borderWidth: 2,
					borderBottomWidth: 2,
					borderColor: COLORS.DARK_SECONDARY,
					borderRadius: BORDER_RADIUS._10,
				}}
			/>

			<Button title="Login" disabled={otp.length !== 4} />

			<TouchableOpacity style={styles.backToLoginContainer} onPress={router.back}>
				<Image source={require('@/assets/images/ArrowLeftImage.png')} />
				<Text style={styles.backToLoginText}>Back to Login</Text>
			</TouchableOpacity>

			<TouchableOpacity style={styles.getInTouchContainer}>
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
		marginTop: DIMENSION_X._50,
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
	backToLoginContainer: {
		marginTop: DIMENSION_X._30,
		fontSize: FONT_SIZE._16,
		gap: DIMENSION_X._15,
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		color: COLORS.TEXT_PRIMARY,
		justifyContent: 'center',
	},
	backToLoginText: {
		fontSize: FONT_SIZE._16,
		fontWeight: 700,
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
