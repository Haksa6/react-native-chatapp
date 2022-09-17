import React, { useState } from "react";
import {
  View,
  KeyboardAvoidingView,
  Platform,
  TextInput,
  StyleSheet,
} from "react-native";
import { SEND_MESSAGE } from "../graphql/mutations";
import { useMutation } from "@apollo/client";
import { GET_USERS_CHANNELS } from "../graphql/queries";
import useCurrentUser from "../hooks/useCurrentUser";
import theme from "../constants/Theme";
import { IconButton } from "react-native-paper";

const ChatInputBox = ({ channelID }: any) => {
  const { currentUser } = useCurrentUser();
  const [sendMessage] = useMutation(SEND_MESSAGE);
  const [inputText, setInputText] = useState("");

  const onSubmit = async () => {
    try {
      await sendMessage({
        variables: {
          channelId: channelID,
          senderName: currentUser.username,
          text: inputText,
          date: new Date(Date.now()).toDateString(),
        },
        refetchQueries: () => [
          {
            query: GET_USERS_CHANNELS,
          },
        ],
      });
      setInputText("");
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      // style={{ backgroundColor: theme.colors.backgroundBlue }}
    >
      <View style={styles.mainContainer}>
        <View style={styles.secondContainer}>
          <TextInput
            placeholder="Send a message"
            placeholderTextColor={theme.colors.textSecondary}
            multiline
            // eslint-disable-next-line @typescript-eslint/no-shadow
            onChangeText={inputText => setInputText(inputText)}
            value={inputText}
            style={styles.textInput}
          />
        </View>
        <IconButton
          icon={"send"}
          size={24}
          color={theme.colors.textPrimary}
          onPress={onSubmit}
          style={{
            backgroundColor: theme.colors.backgroundBlue,
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flexDirection: "row",
    margin: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  secondContainer: {
    flex: 1,
    padding: 5,
    flexDirection: "row",
    backgroundColor: theme.colors.backgroundThird,
    borderRadius: 25,
    marginRight: 10,
  },
  textInput: {
    flex: 1,
    color: theme.colors.textPrimary,
    padding: 2,
  },
});

export default ChatInputBox;
