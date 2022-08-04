import React from "react";
import { Appbar } from "react-native-paper";
import { StyleSheet } from "react-native";
import theme from "../constants/Theme";

const ArrowBack = ({ navigation }: any) => {
  return (
    <Appbar style={styles.container}>
      <Appbar.BackAction
        size={26}
        color={theme.colors.textPrimary}
        onPress={() => {
          navigation?.goBack();
        }}
      />
    </Appbar>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundPrimary,
    alignSelf: "flex-start",
    borderColor: theme.colors.backgroundPrimary,
    elevation: 0,
  },
});

export default ArrowBack;
