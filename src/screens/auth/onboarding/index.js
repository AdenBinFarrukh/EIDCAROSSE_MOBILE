import React from "react";
import { Image, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import Icons from "../../../asset/images";
import { Button, ScreenWrapper } from "../../../components";
import ScreenNames from "../../../routes/routes";
import AppColors from "../../../utills/AppColors";
import { width } from "../../../utills/Dimension";
import styles from "./styles";
export default function OnBoarding({ navigation, route }) {
  const dispatch = useDispatch();
  return (
    <ScreenWrapper statusBarColor={AppColors.primery} barStyle="light-content">
      <View style={styles.mainViewContainer}>
        <View style={{ flex: 2, justifyContent: "center" }}>
          <Image
            source={Icons.login}
            style={{ width: width(70), height: width(70) }}
            resizeMode="stretch"
          />
        </View>
        <View style={{ flex: 1, alignItems: "center", padding: width(5) }}>
          <Text style={[styles.title]}>You must login to continue</Text>
          <Button
            onPress={() => {
              navigation.navigate(ScreenNames.LOGIN);
            }}
            containerStyle={styles.button}
            textStyle={{ color: AppColors.primery }}
            title={"Login"}
          />
          <Button
            title={"Register"}
            containerStyle={styles.button}
            textStyle={{ color: AppColors.primery }}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
