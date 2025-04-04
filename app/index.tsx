import { View, Text, StyleSheet } from 'react-native';
import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen() {
	return (
		<View style={styles.container}>
			<View style={styles.title}>
				<ThemedText style={styles.titleText}>Needh is committed to </ThemedText>
				<ThemedText style={styles.titleTextBold}>creating spaces </ThemedText>
				<ThemedText style={styles.titleText}>that reflect </ThemedText>
				<ThemedText style={styles.titleTextBold}>comfort </ThemedText>
				<ThemedText style={styles.titleText}>and </ThemedText>
				<ThemedText style={styles.titleTextBold}>a sense of belonging</ThemedText>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
	},
	title: {
		paddingHorizontal: 10,
		display: 'flex',
		flexDirection: 'row',
		flexWrap: 'wrap',
	},
	titleText: {
		fontSize: 20,
	},
	titleTextBold: {
		fontSize: 20,
		fontWeight: 'bold',
	},
});
