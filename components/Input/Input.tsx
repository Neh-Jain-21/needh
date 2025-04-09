import { useState } from 'react';
import { StyleProp, StyleSheet, Text, ViewStyle, TextInput, View, Image, Pressable } from 'react-native';
// HELPERS
import COLORS from '@/helpers/Colors';
import { FONT_SIZE } from '@/helpers/Fonts';
import { BORDER_RADIUS, DIMENSION_Y, DIMENSION_X } from '@/helpers/Dimensions';
// ASSETS
import EyeOpenImage from '@/assets/images/EyeOpenImage.png';
import EyeCloseImage from '@/assets/images/EyeCloseImage.png';

type InputProps = {
	title: string;
	containerStyles?: StyleProp<ViewStyle>;
	disabled?: boolean;
	inputType?: 'password';
	onPress?: () => void;
};

export default function Input(props: InputProps) {
	const [showPassword, setShowPassword] = useState(false);

	const handleChangeShowPassword = () => setShowPassword((prev) => !prev);

	return (
		<View style={[styles.container, props.containerStyles]}>
			<Text style={styles.titleText}>{props.title}</Text>

			<View style={{ position: 'relative', marginTop: DIMENSION_X._15 }}>
				<TextInput
					secureTextEntry={props.inputType === 'password' && !showPassword}
					style={styles.input}
					placeholder={props.title}
				/>

				{props.inputType === 'password' && (
					<Pressable style={styles.eyeIcon} onPress={handleChangeShowPassword}>
						<Image source={showPassword ? EyeOpenImage : EyeCloseImage} />
					</Pressable>
				)}
			</View>
		</View>
	);
}
33;
const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'column',
	},
	titleText: {
		color: COLORS.DARK_PRIMARY,
		fontSize: FONT_SIZE._16,
		fontWeight: 500,
	},
	input: {
		padding: DIMENSION_X._16,
		borderRadius: BORDER_RADIUS._10,
		height: DIMENSION_Y._56,
		backgroundColor: COLORS.LIGHT,
	},
	eyeIcon: {
		position: 'absolute',
		right: 10,
		top: 14,
	},
});
