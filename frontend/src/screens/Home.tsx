import React from "react";
import {
  View,
  KeyboardAvoidingView,
  FlatList,
  Platform,
  TextInput,
  StyleSheet,
} from "react-native";
import { Appbar, IconButton } from "react-native-paper";
import AppText from "../components/AppText";
import theme from "../constants/Theme";
import ChatMessage from "../components/ChatMessage";
import { useQuery } from "@apollo/client";
import { GET_USERS_CHANNELS } from "../graphql/queries";

const InputBox = ({}) => {
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      // style={{ backgroundColor: theme.colors.backgroundBlue }}
    >
      <View
        style={{
          flexDirection: "row",
          margin: 10,
          alignItems: "center",
          justifyContent: "center",
          // backgroundColor: theme.colors.backgroundGrey,
        }}
      >
        <View
          style={{
            flex: 1,
            padding: 5,
            flexDirection: "row",
            backgroundColor: theme.colors.backgroundThird,
            borderRadius: 25,
            marginRight: 10,
          }}
        >
          <TextInput
            placeholder="Send a message"
            placeholderTextColor={theme.colors.textSecondary}
            multiline
            style={{
              flex: 1,
              color: theme.colors.textPrimary,
              padding: 2,
            }}
          />
        </View>
        <IconButton
          icon={"send"}
          size={24}
          color={theme.colors.textPrimary}
          onPress={() => {}}
          style={{
            backgroundColor: theme.colors.backgroundBlue,
          }}
        />
      </View>
    </KeyboardAvoidingView>
  );
};

const Home = ({ navigation, route }: any) => {
  const resultChannels = useQuery(GET_USERS_CHANNELS, {
    fetchPolicy: "cache-and-network",
  });

  let position;
  route.params === undefined ? (position = 0) : (position = route.params.index);
  //Get the current chat from the index from drawer or if it doesnt exists just get the 1st one

  if (resultChannels.loading) {
    return <></>;
  }

  const dataChannels = resultChannels.data?.getUsersChannels;
  return (
    <View style={styles.container}>
      <Appbar style={styles.appbar}>
        <Appbar.Action
          icon={"menu"}
          size={30}
          onPress={() => {
            navigation.openDrawer();
          }}
        />
        {dataChannels.length !== 0 ? (
          <>
            <Appbar.Content title={dataChannels[position]?.title} />
            <IconButton
              icon={"account-plus"}
              color={theme.colors.textPrimary}
              onPress={() => {
                navigation.navigate("AddNewUser");
              }}
            ></IconButton>
          </>
        ) : null}
      </Appbar>
      {dataChannels.length !== 0 ? (
        <>
          <FlatList
            data={dataChannels[position].chats}
            renderItem={({ item }) => <ChatMessage message={item} />}
            inverted
          />
          <InputBox />
        </>
      ) : (
        <AppText.Subtitle
          style={{ alignSelf: "center", marginTop: "50%", textAlign: "center" }}
        >
          Open the drawer and make your channel to start chatting
        </AppText.Subtitle>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundPrimary,
    flex: 1,
    display: "flex",
  },
  appbar: {
    backgroundColor: theme.colors.backgroundThird,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  input: {
    backgroundColor: "#202225",
    marginVertical: 7,
    borderRadius: 5,
    color: theme.colors.textPrimary,
    fontSize: 17,
    width: "95%",
  },
});

export default Home;
