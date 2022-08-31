import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import AppText from "../components/AppText";
import theme from "../constants/Theme";
import { Formik } from "formik";
import { Button, Appbar } from "react-native-paper";
import { TextInput } from "react-native-paper";
import * as yup from "yup";
import useLogin from "../hooks/useLogin";

// Required settings for the form fields
const validationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

// Initial values for formik
const initialValues = {
  username: "",
  password: "",
};

const Login = ({ navigation }: any) => {
  //Used to enable/disable password safe view
  const [flatTextSecureEntry, setFlatTextSecureEntry] = useState(true);

  const [login] = useLogin();
  const onSubmit = async (values: any) => {
    try {
      const { username, password } = values;
      await login(username, password);
      navigation.navigate("Root");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, handleChange, errors, setFieldTouched, touched }) => (
        <View style={styles.container}>
          <Appbar style={styles.appbar}>
            <Appbar.BackAction
              size={26}
              color={theme.colors.textPrimary}
              onPress={() => {
                navigation?.goBack();
              }}
              style={{ elevation: 0 }}
            />
          </Appbar>

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
                primary:
                  errors.username && touched.username
                    ? theme.colors.error
                    : theme.colors.textPrimary,
              },
            }}
            onChangeText={handleChange("username")}
            onBlur={() => setFieldTouched("username")}
            right={
              <TextInput.Icon
                name={errors.username && touched.username ? "alert-circle" : ""}
                color={theme.colors.error}
              />
            }
          />
          {errors.username && touched.username ? (
            <AppText.Error testID="errorUsername" style={{ width: "90%" }}>
              {errors.username}
            </AppText.Error>
          ) : null}

          <TextInput
            label="Password"
            style={styles.input}
            dense={true}
            selectionColor={theme.colors.textPrimary}
            secureTextEntry={flatTextSecureEntry}
            theme={{
              colors: {
                text: theme.colors.textPrimary,
                placeholder: theme.colors.textSecondary,
                primary:
                  errors.password && touched.password
                    ? theme.colors.error
                    : theme.colors.textPrimary,
              },
            }}
            onChangeText={handleChange("password")}
            onBlur={() => setFieldTouched("password")}
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
          {errors.password && touched.password ? (
            <AppText.Error testID="errorUsername" style={{ width: "90%" }}>
              {errors.password}
            </AppText.Error>
          ) : null}
          <Button
            mode="contained"
            style={styles.blueButton}
            onPress={handleSubmit}
            contentStyle={{ height: 45 }}
          >
            Login
          </Button>
        </View>
      )}
    </Formik>
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
  appbar: {
    backgroundColor: theme.colors.backgroundPrimary,
    alignSelf: "flex-start",
    borderColor: theme.colors.backgroundPrimary,
    elevation: 0,
  },
});

export default Login;
