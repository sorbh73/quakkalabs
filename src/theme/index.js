import colors from './colors';
import fonts from './fonts';
import matrics from './matrics';
var heightRef = 710;
var widthRef = 360;

const ratioHeight = matrics.screenHeight / heightRef;
const ratioWidth = matrics.screenWidth / widthRef;

export {
  colors,
  matrics,
  fonts,
  heightRef,
  widthRef,
  ratioHeight,
  ratioWidth,
};
