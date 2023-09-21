import React, { useState } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import Icons from "../../../asset/images";
import { MyListingView, ScreenWrapper } from "../../../components";
import Header from "../../../components/header";
import {
  selectUserAds,
  selectUserMeta,
  setUserAds,
} from "../../../redux/slices/user";
import ScreenNames from "../../../routes/routes";
import AppColors from "../../../utills/AppColors";
import { height, width } from "../../../utills/Dimension";
import styles from "./styles";
import { getOwneAd } from "../../../backend/auth";
import { useFocusEffect } from "@react-navigation/native";
export default function MyListing({ navigation, route }) {
  const dispatch = useDispatch();
  const data = useSelector(selectUserAds);
  const userdata = useSelector(selectUserMeta);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh =  () => {
    setRefreshing(true);
    myAdsFunction()
    setRefreshing(false);
  };
  useFocusEffect(
    React.useCallback(() => {
      myAdsFunction()
    }, [])
  );
  const myAdsFunction=async()=>{
    const userAd = await getOwneAd(userdata?._id);
    dispatch(setUserAds(userAd));
  }
  return (
    <ScreenWrapper
      headerUnScrollable={() => <Header navigation={navigation} />}
      statusBarColor={AppColors.primary}
      barStyle="light-content"
      refreshing={refreshing}
      onRefresh={onRefresh}
      scrollEnabled
    >
      <View style={styles.mainViewContainer}>
        <View style={{ width: width(100), alignItems: "center" }}>
          {data?.length === 0 ? (
            <View style={{ height: height(100) }}>
              <Image
                source={Icons.empty}
                style={{ height: width(50), width: width(60) }}
              />
            </View>
          ) : (
            data?.map((item, index) => (
              <TouchableOpacity
                activeOpacity={0.8}
                onPress={() => {
                  navigation.navigate(ScreenNames.DETAIL, item);
                }}
                key={index}
                style={{ width: width(100), alignItems: "center" }}
              >
                <MyListingView data={item} />
              </TouchableOpacity>
            ))
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
}
