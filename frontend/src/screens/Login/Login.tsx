import React, { useState } from "react";
import { View } from "react-native";
import AppText from "../../components/AppText";
import theme from "../../constants/Theme";
import { Formik } from "formik";
import { Button } from "react-native-paper";
import { TextInput } from "react-native-paper";
import ArrowBack from "../../components/ArrowBack";
import * as yup from "yup";
import { styles } from "./styles";

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

export default Login;
