import { Dimensions } from "react-native";
const guidelineBaseWidth = 360;
const guidelineBaseHeight = 592;
const { height, width } = Dimensions.get("window");
export const scale = (size: number) => (width / guidelineBaseWidth) * size;
export const verticalScale = (size: number) =>
  (height / guidelineBaseHeight) * size;
export const moderateScale = (size: number, factor = 0.5) =>
  size + (scale(size) - size) * factor;
