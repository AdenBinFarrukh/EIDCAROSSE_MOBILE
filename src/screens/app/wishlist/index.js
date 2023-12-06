import React, { useCallback, useEffect, useState } from "react";
import { ActivityIndicator, Image, TouchableOpacity, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { Head, ScreenWrapper } from "../../../components";
import CardView from "../../../components/CardView";
import { selectFavAds, selectUserMeta } from "../../../redux/slices/user";
import ScreenNames from "../../../routes/routes";
import AppColors from "../../../utills/AppColors";
//import { data } from "../../../utills/Data";
import { height, width } from "../../../utills/Dimension";
import styles from "./styles";
import { useFocusEffect } from "@react-navigation/native";
import { setAppLoader } from "../../../redux/slices/config";
import { getFavAds } from "../../../backend/auth";
import Icons from "../../../asset/images";
export default function WishList({ navigation, route }) {
  const dispatch = useDispatch();
  const userInfo = useSelector(selectUserMeta);
  const userFav = useSelector(selectFavAds);
  const id = userInfo?._id;

  const [data, setData] = useState([]);
  const [loader, setLoader] = useState(false);

  useEffect(() => {
    getData(id);
  }, []);
  const getData = useCallback(async (id) => {
    setLoader(true);
    let d = await getFavAds(id);
    if (d) setData(d);
    else setData([]);
    setLoader(false);
  });
  return (
    <ScreenWrapper
      headerUnScrollable={() => (
        <Head headtitle={"wishList.title"} navigation={navigation} />
      )}
      statusBarColor={AppColors.primary}
      barStyle="light-content"
      scrollEnabled
    >
      <View style={styles.mainViewContainer}>
        <View style={{ width: width(100), alignItems: "center" }}>
          {data?.length === 0 ? (
            loader ? (
              <ActivityIndicator color={AppColors.primary} size={"large"} />
            ) : (
              <View style={{ height: height(100) }}>
                <Image
                  source={Icons.empty}
                  style={{ height: width(30), width: width(30) }}
                />
              </View>
            )
          ) : (
            data.map((item, index) => (
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => {
                  navigation.navigate(ScreenNames.DETAIL, item);
                }}
                key={index}
                style={{ width: width(100), alignItems: "center" }}
              >
                <CardView data={item} />
              </TouchableOpacity>
            ))
          )}
        </View>
      </View>
    </ScreenWrapper>
  );
}
