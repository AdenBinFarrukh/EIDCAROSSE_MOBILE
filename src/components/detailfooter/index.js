import {
  AntDesign,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";
import { View } from "react-native";
import { width } from "../../utills/Dimension";
import IconButton from "../Iconbutton";
import styles from "./styles";
import AppColors from "../../utills/AppColors";
export default function DetailFooter({
  onPressCall,
  onPressMail,
  onPressChat,
  user,
}) {
  return (
    <View style={styles.container}>
      {!user?.showNumber && (
        <IconButton
          onPress={onPressCall}
          icon={
            <Ionicons size={width(4)} name="call" color={AppColors.white} />
          }
          title={"Call"}
        />
      )}
      <IconButton
        onPress={onPressMail}
        icon={<AntDesign size={width(4)} name="mail" color={AppColors.white} />}
        title={"Email"}
      />
      <IconButton
        onPress={onPressChat}
        icon={
          <MaterialCommunityIcons
            size={width(4)}
            name="chat-processing"
            color={AppColors.white}
          />
        }
        title={"Chat"}
      />
    </View>
  );
}
