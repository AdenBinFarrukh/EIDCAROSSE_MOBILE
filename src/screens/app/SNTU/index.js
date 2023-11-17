import React from "react";
import { Image, Text, View } from "react-native";
import Icons from "../../../asset/images";
import { Button, Head, ScreenWrapper } from "../../../components";
import AppColors from "../../../utills/AppColors";
import styles from "./styles";
import { useTranslation } from "react-i18next";

export default function SNTU({ navigation, route }) {
 const {t}=useTranslation();
  return (
    <ScreenWrapper
      headerUnScrollable={() => (
        <Head headtitle={"SNTU.sntu"} navigation={navigation} />
      )}
      statusBarColor={AppColors.primary}
      backgroundColor={AppColors.white}
      barStyle="light-content"
      scrollEnabled
    >
      <View style={styles.mainViewContainer}>
        <View style={styles.imageview}>
          <Image source={Icons.sellnow} style={styles.image} />
        </View>
        <View style={styles.container}>
          <Text style={styles.description}>{t("SNTU.data")}</Text>
        </View>
        <Button containerStyle={styles.button} title={"SNTU.sntu"} />
      </View>
    </ScreenWrapper>
  );
}
