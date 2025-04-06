import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CountryAwarePhoneInput, usePhoneNumberInput, CountryPickerModal, InputManager } from 'rn-phone-number-input';
// COMPONENTS
import Header from '@/components/Header/Header';
// HELPERS
import COLORS from '@/helpers/Colors';
import { FONT_SIZE } from '@/helpers/Fonts';
import { BORDER_RADIUS, DIMENSION_Y, DIMENSION_X } from '@/helpers/Dimensions';
import { useMemo } from 'react';

const PhoneNumberInput = (manager: InputManager) => {
	const { state, dispatch, isValid, getNumberInfo } = manager;

	// open modal
	dispatch({ type: 'setHidden', payload: false });

	// close modal
	dispatch({ type: 'setHidden', payload: true });

	// change country – requires both ISO code and tel to avoid ambiguity
	dispatch({ type: 'updateCountry', payload: { tel: '+1', code: 'US' } });

	// process user input, parses number & updates number / formatted text
	// copy-pasted / auto-completed number are handled automatically
	dispatch({ type: 'processInput', payload: '7071001000' });

	// advanced phone number logic through libphonenumber-js
	const phoneNumber = getNumberInfo();
	if (phoneNumber) {
		console.log(phoneNumber.getType()); // e.g., "MOBILE"
		console.log(phoneNumber.getURI()); // e.g., "tel:+12345678900"
	}

	// provide (visual) feedback for valid numbers
	const valid = useMemo(() => isValid(), [state.number]);

	return (
		<View
			style={
				state.darkMode
					? {
							/* ... */
					  }
					: {
							/* ... */
					  }
			}
		>
			{/* e.164-formatted phone number, e.g. '+12345678900' */}
			<Text>{state.number}</Text>
			{/* country calling code, e.g. '+1' */}
			<Text>{state.countryTel}</Text>
			{/* ISO-3166 country code, e.g. 'US' */}
			<Text>{state.countryCode}</Text>
			{/* phone number in user-friendly formatting, e.g. '(234) 567-8900' */}
			<Text>{state.formattedText}</Text>
			{/* direct text input by user, e.g. '2345678900' */}
			<Text>{state.inputText}</Text>
		</View>
	);
};

export default function LoginScreen() {
	const inputManager = usePhoneNumberInput({ defaultCountry: 'IN' });

	return (
		<SafeAreaView style={styles.container}>
			<Header />

			<Text style={styles.titleText}>Client Login</Text>

			<Text style={styles.captionText}>Welcome back!! Please enter your details.</Text>

			<Text style={styles.phoneNumberText}>Phone Number</Text>

			<PhoneNumberInput {...inputManager} />

			{/* <CountryAwarePhoneInput
				manager={{ ...inputManager, state: { ...inputManager.state, inputText: inputManager.state.inputText || 'Mobile Number' } }}
				textStyles={{ color: COLORS.TEXT_SECONDARY }}
				fieldStyles={{ backgroundColor: '#fff', borderRadius: BORDER_RADIUS._10 }}
				containerStyles={{ marginLeft: 0, marginRight: 0, marginTop: DIMENSION_X._20, gap: DIMENSION_X._20 }}
				onEndEditing={() => {
					console.log('Finished inputting number');
					// check if number is valid
					console.log('Is valid: ' + inputManager.isValid());
					// output number in e.164 format (e.g., +12133734253)
					console.log(inputManager.getNumber());
				}}
			/> */}

			<CountryPickerModal manager={inputManager} />
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
