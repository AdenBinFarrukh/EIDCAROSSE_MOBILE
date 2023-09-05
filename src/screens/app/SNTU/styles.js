import { StyleSheet } from "react-native";
import { height, width } from "../../../utills/Dimension";
import AppColors from "../../../utills/AppColors";

const styles = StyleSheet.create({
  mainViewContainer: {
    alignItems: "center",
    padding: width(1),
    backgroundColor: AppColors.white,
  },
  imageview: {

    width: width(96),
    borderRadius: width(1),
    alignItems: "center",
    justifyContent: "center",
  },
  container: {
    flexDirection: "column",
    padding: width(5),
    width: width(96),
    borderRadius: width(1),
    margin: width(1),
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    height: height(18),
    resizeMode: "contain",
    marginVertical: width(5),
  },
  title: {
    fontSize: width(4),
    fontWeight: "bold",
    color: "black",
    margin: width(5),
  },
  description: {
    fontSize: width(4),
  },
  button: {
    backgroundColor: AppColors.primery,
    width: width(96),
    borderRadius: width(1),
  },
});
export default styles;
