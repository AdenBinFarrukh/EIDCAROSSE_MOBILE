import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomNav from "../BottomNav";
import { CustomDrawer } from "../../components";
import AppColors from "../../utills/AppColors";
import { width } from "../../utills/Dimension";
import ScreenNames from "../routes";

const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    // <Drawer.Navigator
    // screenOptions={{headerShown:false}}
    // >
    //   <Drawer.Screen name="Feed" component={BottomNav} />
    // </Drawer.Navigator>
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerInactiveBackgroundColor: AppColors.white,
        drawerActiveBackgroundColor: AppColors.white,
        drawerActiveTintColor: AppColors.primary,
        overlayColor: AppColors.transparent,
        drawerHideStatusBarOnOpen: true,
        drawerStyle: {
          backgroundColor: "#E5E8E8",
          width: width(65),
        },
        sceneContainerStyle: {
          backgroundColor: "#E5E8E8",
        },
      }}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name={ScreenNames.BUTTOM} component={BottomNav} />
    </Drawer.Navigator>
  );
}
export default MyDrawer;
