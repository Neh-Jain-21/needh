import { Image, StyleSheet, Text, View } from 'react-native';

export default function Header() {
	return (
		<View style={styles.container}>
			<Image source={require('../../assets/images/Logo.png')} style={styles.logo} />

			<View style={{ marginLeft: 10 }}>
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
		marginBottom: 20,
	},
	logo: {
		width: 32,
		height: 32,
	},
	logoTitle: {
		fontSize: 26,
		fontWeight: '400',
		color: '#111',
		lineHeight: 26,
	},
	logoBody: {
		fontSize: 14,
		fontWeight: '400',
		color: '#111',
		lineHeight: 14,
	},
	line: {
		flex: 1,
		height: 1,
		backgroundColor: '#111',
		marginLeft: 20,
	},
});
