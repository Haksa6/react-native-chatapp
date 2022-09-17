import React from "react";
import { View, FlatList, StyleSheet } from "react-native";
import { Appbar, IconButton } from "react-native-paper";
import AppText from "../components/AppText";
import theme from "../constants/Theme";
import ChatMessage from "../components/ChatMessage";
import { useQuery } from "@apollo/client";
import { GET_USERS_CHANNELS } from "../graphql/queries";
import ChatInputBox from "../components/ChatInputBox";
// import { MESSAGE_SUBSCRIPTION } from "../graphql/subscriptions";

const Home = ({ navigation, route }: any) => {
  const { ...result } = useQuery(GET_USERS_CHANNELS, {
    fetchPolicy: "cache-and-network",
  });

  if (result.loading) {
    return <></>;
  }
  const dataInChannel = result.data?.getUsersChannels;

  let position: number;
  //Get the current chat from the index from drawer or if it doesnt exists just get the 1st one
  route.params === undefined ? (position = 0) : (position = route.params.index);

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
        {dataInChannel.length !== 0 ? (
          <>
            <Appbar.Content title={dataInChannel[position]?.title} />
            <IconButton
              icon={"account-plus"}
              color={theme.colors.textPrimary}
              onPress={() => {
                navigation.navigate("AddNewUser", {
                  channelID: dataInChannel[position]._id,
                });
              }}
            ></IconButton>
          </>
        ) : null}
      </Appbar>
      {dataInChannel.length !== 0 ? (
        <>
          <FlatList
            data={dataInChannel[position]?.chats}
            renderItem={({ item }) => <ChatMessage message={item} />}
          />
          <ChatInputBox channelID={dataInChannel[position]._id} />
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
