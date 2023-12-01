import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { ImageBackground, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import Icons from "../../../asset/images";
import Modal from "react-native-modal";
import { Button, Head, Input, ScreenWrapper } from "../../../components";
import AppColors from "../../../utills/AppColors";
import { height, width } from "../../../utills/Dimension";
import styles from "./styles";
import { CountdownCircleTimer } from "react-native-countdown-circle-timer";
import { verifyCodeAPI, forgetPasswordAPI } from "../../../backend/auth";
import { errorMessage, successMessage } from "../../../utills/Methods";
import ScreenNames from "../../../routes/routes";
//import i18n from "../../../translation";
export default function ForgetPassword({ navigation, route }) {
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [code, setCode] = useState("");
  const [modal, setModel] = useState(false);
  const [token, setToken] = useState("");

  async function forgetpassword() {
    const d = await forgetPasswordAPI(email);
    if (d?.success) {
      setToken(d?.data);
      successMessage("Code send at your given Email");
      setTimeout(() => setModel(true), 600);
    }
  }
  async function checkPassword(code) {
    const d = await verifyCodeAPI(code);
    console.log("====================================");
    console.log("check", d);
    console.log("====================================");
    if (d?.success) {
      navigation.navigate(ScreenNames.CPF, { token, email });
    } else {
      errorMessage("Wrong Pin code");
    }
  }
  return (
    <ScreenWrapper
      statusBarColor={AppColors.primary}
      barStyle="light-content"
      scrollEnabled
      headerUnScrollable={() => <Head navigation={navigation} />}
    >
      <View style={styles.mainViewContainer}>
        <ImageBackground source={Icons.bglogo} style={styles.bg}>
          <View style={styles.imageiner}>
            <Text style={styles.logintext}>{t("Forget Password")}</Text>
          </View>
        </ImageBackground>
        <View style={{ paddingTop: width(10) }}>
          <Input
            value={email}
            setvalue={setEmail}
            title={"login.emailTitle"}
            placeholder={"login.yourEmailAddress"}
          />
          <Button
            disabled={token ? true : false}
            containerStyle={styles.button}
            title={"Forget"}
            onPress={() => {
              if (email) {
                forgetpassword();
              } else {
                errorMessage("Enter your register Email to forget Password");
              }
            }}
          />
        </View>
      </View>
      <Modal isVisible={modal}>
        <View
          style={{
            backgroundColor: AppColors.white,
            height: height(40),
            width: width(90),
            borderRadius: width(5),
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <CountdownCircleTimer
            isPlaying
            duration={60}
            colors={["#004777", "#F7B801", "#A30000", "#A30000"]}
            colorsTime={[30, 15, 10, 0]}
            size={100}
          >
            {({ remainingTime }) => {
              if (remainingTime == 0) {
                setModel(false);
                setToken("");
              }
              return (
                <Text style={{ fontSize: width(5) }}>{remainingTime}</Text>
              );
            }}
          </CountdownCircleTimer>
          <View style={{ paddingTop: width(10) }}>
            <Input
              value={code}
              setvalue={setCode}
              placeholder={"Enter Code"}
              containerStyle={{
                width: width(60),
                borderWidth: width(0.2),
                borderRadius: width(5),
              }}
            />
            <Button
              containerStyle={{ width: width(60), margin: width(3) }}
              title={"Submit"}
              onPress={() => {
                checkPassword(code);
                //setModel(false);
              }}
            />
          </View>
        </View>
      </Modal>
    </ScreenWrapper>
  );
}
