import { View, StyleSheet } from "react-native";
import { Appbar, TextInput, Button } from "react-native-paper";
import theme from "../constants/Theme";
import AppText from "../components/AppText";
import { useState } from "react";
import { useMutation } from "@apollo/client";
import { CREATE_CHANNEL } from "../graphql/mutations";
import { GET_USERS_CHANNELS } from "../graphql/queries";

const NewChannel = ({ navigation }: any) => {
  const [inputText, setInputText] = useState("");
  const [createChannel] = useMutation(CREATE_CHANNEL, {
    refetchQueries: () => [
      {
        query: GET_USERS_CHANNELS,
      },
    ],
  });

  const onSubmit = async () => {
    try {
      await createChannel({ variables: { title: inputText } });
      navigation.navigate("Root");
    } catch (e) {
      console.log(e);
    }
  };

  return (
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
      <AppText.Title style={{ marginBottom: "2%" }}>
        Create Your Channel
      </AppText.Title>
      <AppText.Subtext
        style={{ textAlign: "center", width: "90%", marginBottom: "6%" }}
      >
        Your channel is where you and friends hang out. Make yours and start
        talking
      </AppText.Subtext>
      <AppText.Subtext style={{ width: "90%", fontWeight: "900" }}>
        CHANNEL NAME
      </AppText.Subtext>
      <TextInput
        style={styles.input}
        dense={true}
        activeUnderlineColor="transparent"
        selectionColor={theme.colors.textPrimary}
        right={
          inputText === "" ? null : (
            <TextInput.Icon
              color={theme.colors.textPrimary}
              icon={"close-circle"}
              onPress={() => setInputText("")}
            />
          )
        }
        value={inputText}
        // eslint-disable-next-line @typescript-eslint/no-shadow
        onChangeText={inputText => setInputText(inputText)}
        theme={{
          colors: {
            text: theme.colors.textPrimary,
          },
        }}
      ></TextInput>
      <Button
        style={styles.blueButton}
        mode="contained"
        disabled={inputText === "" ? true : false}
        onPress={onSubmit}
      >
        Create Channel
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundPrimary,
    flex: 1,
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
    marginBottom: "3%",
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

export default NewChannel;
