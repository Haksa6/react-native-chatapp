import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
import AppText from "../../components/AppText";
import theme from "../../constants/Theme";
import { Formik } from "formik";
import { Button } from "react-native-paper";
import { TextInput } from "react-native-paper";
import ArrowBack from "../../components/ArrowBack";

const Login = ({ navigation }: any) => {
  //Used to enable/disable password safe view
  const [flatTextSecureEntry, setFlatTextSecureEntry] = useState(true);
  const [usernameText, setUsernameText] = useState("");
  const [passwordText, setPasswordText] = useState("");

  return (
    <View style={styles.container}>
      <ArrowBack navigation={navigation} />

      <AppText.Title style={{ fontWeight: "bold", marginVertical: 5 }}>
        Welcome back!
      </AppText.Title>
      <AppText.Subtext style={{ marginBottom: 15 }}>
        We are so excited to see you again!
      </AppText.Subtext>

      <TextInput
        label="Username"
        style={styles.input}
        dense={true}
        theme={{
          colors: {
            text: theme.colors.textPrimary,
            placeholder: theme.colors.textSecondary,
            primary: theme.colors.textPrimary,
          },
        }}
        onChangeText={(usernameText) => setUsernameText(usernameText)}
        right={
          <TextInput.Icon
            name={usernameText === "" ? "" : "close-circle"}
            color={theme.colors.textSecondary}
            onPress={() => setUsernameText("")}
          />
        }
      />
      <TextInput
        label="Password"
        style={styles.input}
        dense={true}
        selectionColor={theme.colors.textPrimary}
        secureTextEntry={flatTextSecureEntry}
        value={passwordText}
        theme={{
          colors: {
            text: theme.colors.textPrimary,
            placeholder: theme.colors.textSecondary,
            primary: theme.colors.textPrimary,
          },
        }}
        onChangeText={(passwordText) => setPasswordText(passwordText)}
        right={
          <TextInput.Icon
            name={flatTextSecureEntry ? "eye" : "eye-off"}
            onPress={() =>
              flatTextSecureEntry
                ? setFlatTextSecureEntry(false)
                : setFlatTextSecureEntry(true)
            }
            color={theme.colors.textSecondary}
          />
        }
      />
      <Button
        mode="contained"
        style={styles.blueButton}
        onPress={() => console.log("hey")}
        contentStyle={{ height: 45 }}
      >
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundPrimary,
    flex: 9,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  input: {
    backgroundColor: "#202225",
    marginVertical: 7,
    borderRadius: 5,
    padding: 2,
    color: theme.colors.textPrimary,
    fontSize: 17,
    width: "90%",
  },
  blueButton: {
    backgroundColor: theme.colors.backgroundBlue,
    borderRadius: 5,
    width: "90%",
    marginTop: 10,
  },
});

export default Login;
