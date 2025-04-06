import { useMemo } from 'react';
import { Text, View } from 'react-native';
import { InputManager } from 'rn-phone-number-input';
// HELPERS
import { DIMENSION_X } from '@/helpers/Dimensions';

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
		<View style={{ marginLeft: 0, marginRight: 0, marginTop: DIMENSION_X._20, gap: DIMENSION_X._20 }}>
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

export default PhoneNumberInput;
