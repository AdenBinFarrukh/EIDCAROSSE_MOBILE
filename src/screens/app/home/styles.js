import { StyleSheet } from "react-native";
import { height, width } from "../../../utills/Dimension";
import AppColors from "../../../utills/AppColors";

const styles = StyleSheet.create({
  mainViewContainer: {
    alignItems: "center",
    padding: width(4),
    paddingBottom: width(15),
    backgroundColor: AppColors.white,
  },
  title: {
    color: AppColors.black,
    fontWeight: "bold",
    fontSize: width(4),
    marginBottom: height(2),
  },
  searchinput: {
    width: width(90),
    alignSelf: "center",
    borderWidth: 1,
    borderRadius: width(1),
    padding: width(2),

  },
  titleview: {
    justifyContent: "space-between",
    padding: width(1),
    flexDirection: "row",
    width: width(90),
  },

  searchbox: {
    width: width(90),
    borderRadius: width(1),
    // borderWidth: 0,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    shadowRadius: 1,
    elevation: 2,
    backgroundColor: "white",
  },
  dropdown: { borderRadius: width(1), width: width(90),borderWidth:0 },
});
export default styles;
