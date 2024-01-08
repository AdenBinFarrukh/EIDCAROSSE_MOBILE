import { StyleSheet } from "react-native";
import { height, width } from "../../../utills/Dimension";
import AppColors from "../../../utills/AppColors";

const styles = StyleSheet.create({
  mainViewContainer: {
    alignItems: "center",
    padding: width(1),
    backgroundColor: AppColors.white,
  },
  container: {
    flexDirection: "column",
    padding: width(5),
    width: width(96),
    borderRadius: width(1),
    backgroundColor: AppColors.white,
    margin: width(1),
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation:3
  },
  image: {
    height: height(18),
    resizeMode: "contain",
  },
  title: {
    fontSize: height(2),
    fontWeight: "bold",
    color: "black",
    margin: width(5),
  },
  description: {
    fontSize: height(1.8),
  },
});
export default styles;
