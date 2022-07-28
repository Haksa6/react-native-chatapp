import { Pressable, StyleSheet } from "react-native";
import React, { useState } from "react";
import theme from "../constants/Theme";
import AppText from "./AppText";

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundBlue,
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
    marginTop: 50,
    width: "90%",
  },
  greyButton: {
    backgroundColor: theme.colors.backgroundGrey,
    alignItems: "center",
    borderRadius: 5,
    padding: 10,
    marginTop: 15,
    width: "90%",
  },
});

interface Props {
  title: string;
  onPress?: () => void;
  // margin: number;
}

const Button = (props: Props) => {
  const [opacityPressed, setOpacityPressed] = useState(0);

  const { title, onPress } = props;
  return (
    <Pressable
      onPress={() => {
        setOpacityPressed(opacityPressed + 1), onPress;
      }}
      style={({ pressed }) => [
        styles.container,
        { opacity: pressed ? 0.5 : 1 },
      ]}
    >
      <AppText style={{ fontWeight: "bold", fontSize: 18 }}>{title}</AppText>
    </Pressable>
  );
};

Button.Grey = (props: Props) => {
  const [opacityPressed, setOpacityPressed] = useState(0);

  const { title, onPress } = props;
  return (
    <Pressable
      onPress={() => {
        setOpacityPressed(opacityPressed + 1), onPress;
      }}
      style={({ pressed }) => [
        styles.greyButton,
        { opacity: pressed ? 0.5 : 1 },
      ]}
    >
      <AppText style={{ fontWeight: "bold", fontSize: 18 }}>{title}</AppText>
    </Pressable>
  );
};

export default Button;
