import { LinearGradient } from 'expo-linear-gradient';
// HELPERS
import COLORS from '@/helpers/Colors';

const TabBarBackground = () => (
	<LinearGradient style={{ height: '100%' }} colors={[COLORS.LIGHT, COLORS.PRIMARY]} start={{ x: 0, y: 0 }} end={{ x: 0, y: 1 }} />
);

export default TabBarBackground;
