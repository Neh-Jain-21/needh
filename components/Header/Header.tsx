import { Image, StyleSheet, Text, View } from 'react-native';
// HELPERS
import { FONT_SIZE } from '@/helpers/Fonts';
import { DIMENSION_Y, DIMENSION_X } from '@/helpers/Dimensions';

export default function Header() {
	return (
		<View style={styles.container}>
			<Image source={require('../../assets/images/Logo.png')} style={styles.logo} />

			<View style={{ marginLeft: DIMENSION_Y._10 }}>
				<Text style={styles.logoTitle}>Needh</Text>
				<Text style={styles.logoBody}>Design Studio</Text>
			</View>

			<View style={styles.line} />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center',
		marginBottom: DIMENSION_Y._20,
	},
	logo: {
		width: DIMENSION_Y._32,
		height: DIMENSION_X._32,
	},
	logoTitle: {
		fontSize: FONT_SIZE._26,
		fontWeight: '400',
		color: '#111',
		lineHeight: FONT_SIZE._26,
	},
	logoBody: {
		fontSize: FONT_SIZE._14,
		fontWeight: '400',
		color: '#111',
		lineHeight: FONT_SIZE._14,
	},
	line: {
		flex: 1,
		height: 1,
		backgroundColor: '#111',
		marginLeft: DIMENSION_Y._20,
	},
});
