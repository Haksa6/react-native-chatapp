import React, { useState } from "react";
import { View } from "react-native";
import theme from "../../constants/Theme";
import { TextInput } from "react-native-paper";
import AppText from "../../components/AppText";
import ArrowBack from "../../components/ArrowBack";
import { Button } from "react-native-paper";
import { Formik } from "formik";
import * as yup from "yup";
import { styles } from "./styles";

// Required settings for the form fields
const validationSchema = yup.object().shape({
  username: yup.string().min(1).max(30).required("Username is required"),
  password: yup
    .string()
    .min(5)
    .max(30)
    .required("Password has to be 5-30 characters"),
});

// Initial values for formik
const initialValues = {
  username: "",
  password: "",
};

const Register = ({ navigation }: any) => {
  // Used to enable/disable password safe view
  const [flatTextSecureEntry, setFlatTextSecureEntry] = useState(true);
  const login = () => navigation.navigate("Root");

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={login}
      validationSchema={validationSchema}
    >
      {({ handleSubmit, handleChange, errors, setFieldTouched, touched }) => (
        <View style={styles.container}>
          <ArrowBack navigation={navigation} />
          <AppText.Title style={{ fontWeight: "bold", marginVertical: 15 }}>
            Register
          </AppText.Title>
          <AppText.Subtext style={{ fontWeight: "bold" }}>
            WHAT DO YOU WANT TO BE CALLED?
          </AppText.Subtext>
          <TextInput
            label="Username"
            style={styles.input}
            dense={true}
            testID="usernameField"
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
            testID="passwordField"
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
            testID="registerButton"
          >
            Register
          </Button>
        </View>
      )}
    </Formik>
  );
};

export default Register;
