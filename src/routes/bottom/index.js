import React from "react";
import {
  Alert,
  Animated,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";

import { CurvedBottomBarExpo } from "react-native-curved-bottom-bar";
import { Ionicons, AntDesign, FontAwesome5 } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import AppColors from "../../utills/AppColors";
import {
  CategoryScreen,
  ChatScreen,
  HomeScreen,
  MyListingScreen,
  ProfileScreen,
} from "../../screens/app";
import ScreenNames from "../routes";
import { DrawerSceneWrapper } from "../../components";
import { selectIsLoggedIn, setIsLoggedIn } from "../../redux/slices/user";
import { PreLogin } from "../../screens/auth";
import { height, width } from "../../utills/Dimension";

const Screen1 = () => {
  return <View style={styles.screen1} />;
};

const Screen2 = () => {
  return <View style={styles.screen2} />;
};

export default function BottomNav({ navigation }) {
  const islogin = useSelector(selectIsLoggedIn);
  console.log(islogin);
  const _renderIcon = (routeName, selectedTab) => {
    let icon = "";

    switch (routeName) {
      case "title1":
        icon = "ios-home-outline";
        break;
      case "title2":
        icon = "chatbubble-ellipses-outline";
        break;
      case ScreenNames.MYADS:
        icon = "file-tray-stacked-outline";
        break;
      case "title4":
        icon = "person-outline";
        break;
    }

    return (
      <Ionicons
        name={icon}
        size={25}
        color={routeName === selectedTab ? AppColors.primary : "gray"}
      />
    );
  };
  const renderTabBar = ({ routeName, selectedTab, navigate }) => {
    return (
      <TouchableOpacity
        onPress={() => navigate(routeName)}
        style={styles.tabbarItem}
      >
        {_renderIcon(routeName, selectedTab)}
      </TouchableOpacity>
    );
  };

  return (
    <DrawerSceneWrapper>
      <CurvedBottomBarExpo.Navigator
        type="UP"
        style={styles.bottomBar}
        shadowStyle={styles.shawdow}
        height={55}
        circleWidth={50}
        bgColor="white"
        initialRouteName="title1"
        borderTopLeftRight
        renderCircle={({ selectedTab, navigate }) => (
          <Animated.View style={styles.btnCircleUp}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                // islogin ?
                //
                navigation.navigate("tit");
              }}
            >
              <FontAwesome5 name={"plus"} color={"white"} size={22} />
            </TouchableOpacity>
          </Animated.View>
        )}
        tabBar={renderTabBar}
        screenOptions={{ headerShown: false }}
      >
        <CurvedBottomBarExpo.Screen
          name="title1"
          position="LEFT"
          component={() => <HomeScreen navigation={navigation} />}
        />
        <CurvedBottomBarExpo.Screen
          name="tit"
          component={() =>
        //    islogin ? (
              <CategoryScreen navigation={navigation} value="ADD" />
            // ) : (
            //   <PreLogin navigation={navigation} />
            // )
          }
        />
        <CurvedBottomBarExpo.Screen
          name="title2"
          position="LEFT"
          component={() =>
            islogin ? (
              <ChatScreen navigation={navigation} />
            ) : (
              <PreLogin navigation={navigation} />
            )
          }
        />
        <CurvedBottomBarExpo.Screen
          name={ScreenNames.MYADS}
          component={() =>
            islogin ? (
              <MyListingScreen navigation={navigation} />
            ) : (
              <PreLogin navigation={navigation} />
            )
          }
          position="RIGHT"
        />
        <CurvedBottomBarExpo.Screen
          name="title4"
          component={() =>
            islogin ? (
              <ProfileScreen navigation={navigation} />
            ) : (
              <PreLogin navigation={navigation} />
            )
          }
          position="RIGHT"
        />
      </CurvedBottomBarExpo.Navigator>
    </DrawerSceneWrapper>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: "#DDDDDD",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    justifyContent: "center",
    width: width(10),
    height: height(5),
    justifyContent: "center",
    alignItems: "center",
  },
  bottomBar: {
    //backgroundColor:'rgba(0,0,0,0)'
  },
  btnCircleUp: {
    width: 50,
    height: 50,
    borderRadius: 30,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: AppColors.primary,
    bottom: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 25,
    height: 25,
    tintColor: "black",
  },
  tabbarItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  img: {
    width: 30,
    height: 30,
  },
  screen1: {
    flex: 1,
    backgroundColor: "#BFEFFF",
  },
  screen2: {
    flex: 1,
    backgroundColor: "#FFEBCD",
  },
});
