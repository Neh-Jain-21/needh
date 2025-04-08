import { useState } from 'react';
// HELPERS
import { BORDER_RADIUS, DIMENSION_X, DIMENSION_Y } from '@/helpers/Dimensions';
import PhoneInput, { ICountry } from 'react-native-international-phone-number';
import COLORS from '@/helpers/Colors';

const PhoneNumberInput = () => {
	const [selectedCountry, setSelectedCountry] = useState<null | ICountry>(null);
	const [inputValue, setInputValue] = useState<string>('');

	function handleInputValue(phoneNumber: string) {
		setInputValue(phoneNumber);
	}

	function handleSelectedCountry(country: ICountry) {
		setSelectedCountry(country);
	}

	return (
		<PhoneInput
			value={inputValue}
			placeholder="Mobile Number"
			phoneInputStyles={{
				divider: { display: 'none' },
				container: { borderWidth: 0, backgroundColor: 'transparent', marginTop: DIMENSION_X._20, gap: DIMENSION_X._10 },
				flagContainer: { backgroundColor: COLORS.LIGHT, borderRadius: BORDER_RADIUS._10 },
				callingCode: { marginLeft: DIMENSION_X._10, color: COLORS.TEXT_SECONDARY },
				caret: { marginLeft: DIMENSION_X._10 },
				input: {
					height: DIMENSION_Y._53,
					color: COLORS.TEXT_SECONDARY,
					backgroundColor: COLORS.LIGHT,
					borderRadius: BORDER_RADIUS._10,
				},
			}}
			selectedCountry={selectedCountry}
			onChangePhoneNumber={handleInputValue}
			onChangeSelectedCountry={handleSelectedCountry}
		/>
	);
};

export default PhoneNumberInput;
