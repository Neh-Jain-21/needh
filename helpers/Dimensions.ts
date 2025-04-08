import { Dimensions, StatusBar } from 'react-native';

export const _STATUS_BAR_HEIGHT = StatusBar.currentHeight;
export const _DEVICE_WIDTH = Dimensions.get('window').width;
export const _DEVICE_HEIGHT = Dimensions.get('window').height;

/** Width of mobile present in figma design. */
const _iPHONE_8_WIDTH = 440;

/** Height of mobile present in figma design. */
const _iPHONE_8_HEIGHT = 956;

/** WIDTH CONSTANTS */
export const DIMENSION_Y = {
	_10: (_DEVICE_WIDTH * 10) / _iPHONE_8_WIDTH,
	_16: (_DEVICE_WIDTH * 16) / _iPHONE_8_WIDTH,
	_20: (_DEVICE_WIDTH * 20) / _iPHONE_8_WIDTH,
	_32: (_DEVICE_WIDTH * 32) / _iPHONE_8_WIDTH,
	_40: (_DEVICE_WIDTH * 40) / _iPHONE_8_WIDTH,
	_50: (_DEVICE_WIDTH * 50) / _iPHONE_8_WIDTH,
	_53: (_DEVICE_WIDTH * 53) / _iPHONE_8_WIDTH,
	_56: (_DEVICE_WIDTH * 56) / _iPHONE_8_WIDTH,
	_70: (_DEVICE_WIDTH * 70) / _iPHONE_8_WIDTH,
	_100: (_DEVICE_WIDTH * 100) / _iPHONE_8_WIDTH,
	_150: (_DEVICE_WIDTH * 150) / _iPHONE_8_WIDTH,
};

/** HEIGHT CONSTANTS */
export const DIMENSION_X = {
	_8: (_DEVICE_HEIGHT * 8) / _iPHONE_8_HEIGHT,
	_10: (_DEVICE_HEIGHT * 10) / _iPHONE_8_HEIGHT,
	_15: (_DEVICE_HEIGHT * 15) / _iPHONE_8_HEIGHT,
	_20: (_DEVICE_HEIGHT * 20) / _iPHONE_8_HEIGHT,
	_30: (_DEVICE_HEIGHT * 30) / _iPHONE_8_HEIGHT,
	_32: (_DEVICE_HEIGHT * 32) / _iPHONE_8_HEIGHT,
	_40: (_DEVICE_HEIGHT * 40) / _iPHONE_8_HEIGHT,
	_50: (_DEVICE_HEIGHT * 50) / _iPHONE_8_HEIGHT,
	_100: (_DEVICE_HEIGHT * 100) / _iPHONE_8_HEIGHT,
	_150: (_DEVICE_HEIGHT * 150) / _iPHONE_8_HEIGHT,
	_200: (_DEVICE_HEIGHT * 200) / _iPHONE_8_HEIGHT,
};

/** BORDER RADIUS CONSTANTS */
export const BORDER_RADIUS = {
	_5: DIMENSION_Y._10 / 2,
	_8: DIMENSION_Y._16 / 2,
	_10: DIMENSION_Y._20 / 2,
	_20: DIMENSION_Y._40 / 2,
	_25: DIMENSION_Y._50 / 2,
};
