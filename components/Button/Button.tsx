import { StyleProp, StyleSheet, Text, TouchableOpacity, ViewStyle } from 'react-native';
// HELPERS
import COLORS from '@/helpers/Colors';
import { FONT_SIZE } from '@/helpers/Fonts';
import { BORDER_RADIUS, DIMENSION_Y, DIMENSION_X } from '@/helpers/Dimensions';

type ButtonProps = {
	title: string;
	disabled?: boolean;
	onPress?: () => void;
};

export default function Button(props: ButtonProps) {
	const btnStyles: StyleProp<ViewStyle> = [styles.btn];

	if (props.disabled) btnStyles.push(styles.disabledBtn);

	return (
		<TouchableOpacity style={btnStyles} disabled={props.disabled} onPress={props.onPress}>
			<Text style={styles.btnText}>{props.title}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	btn: {
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
	disabledBtn: {
		backgroundColor: COLORS.DARK_TERTIARY,
	},
	btnText: {
		color: COLORS.LIGHT,
		fontSize: FONT_SIZE._16,
		fontWeight: 700,
	},
});
