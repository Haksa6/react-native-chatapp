import { View, StyleSheet, FlatList, Pressable } from "react-native";
import { useState } from "react";
import {
  Appbar,
  Avatar,
  Button,
  IconButton,
  Portal,
  Modal,
} from "react-native-paper";
import AppText from "./AppText";
import theme from "../constants/Theme";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useApolloClient, useQuery } from "@apollo/client";
import useCurrentUser from "../hooks/useCurrentUser";
import { GET_USERS_CHANNELS } from "../graphql/queries";

const ChannelItem = ({ channel, index, navigation }: any) => {
  const onClick = () => {
    navigation.navigate("Home", {
      index: index,
    });
  };
  return (
    <Pressable onPress={onClick}>
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          alignItems: "center",
          marginBottom: 10,
          marginTop: 10,
        }}
      >
        <Avatar.Text
          label={channel.title[0]}
          size={34}
          style={{ marginRight: 10 }}
        />
        <AppText.Subtext>{channel.title}</AppText.Subtext>
      </View>
    </Pressable>
  );
};

const DrawerContent = ({ navigation }: any) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const showModal = () => setModalVisibility(true);
  const hideModal = () => setModalVisibility(false);
  const apolloClient = useApolloClient();

  const { currentUser } = useCurrentUser();
  const result = useQuery(GET_USERS_CHANNELS, {
    fetchPolicy: "cache-and-network",
  });

  if (result.loading) {
    return <></>;
  }

  const data = result.data?.getUsersChannels;
  console.log(data);

  const logOut = async () => {
    await AsyncStorage.removeItem("token");
    apolloClient.resetStore();
    setModalVisibility(false);
    navigation.navigate("Welcome");
  };

  return (
    <View style={styles.container}>
      <Appbar style={styles.appbar}>
        <Avatar.Text
          size={36}
          label={currentUser?.username[0].toUpperCase()}
          style={{ marginLeft: 6 }}
        />
        <Appbar.Content title={currentUser?.username} />
        <IconButton
          icon="logout"
          size={26}
          color={theme.colors.textPrimary}
          onPress={showModal}
        />
      </Appbar>
      <View
        style={{
          alignItems: "center",
          padding: "7%",
        }}
      >
        <Button
          mode="contained"
          style={styles.newChannelButton}
          onPress={() => navigation.navigate("NewChannel")}
          contentStyle={{ height: 45 }}
        >
          New channel
        </Button>

        {data.length !== 0 ? (
          <FlatList
            data={data}
            contentContainerStyle={{
              paddingBottom: "15%",
              paddingTop: "10%",
            }}
            renderItem={({ item, index }) => (
              <ChannelItem
                channel={item}
                index={index}
                navigation={navigation}
              />
            )}
          />
        ) : (
          <AppText.Subtext
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: "50%",
            }}
          >
            No channels found. Make your own and they will appear here
          </AppText.Subtext>
        )}

        <Portal>
          <Modal
            visible={modalVisibility}
            onDismiss={hideModal}
            contentContainerStyle={styles.modalContainer}
          >
            <View style={styles.modalTextContainer}>
              <AppText.Subtitle>Log Out</AppText.Subtitle>
            </View>

            <View style={styles.modalTextContainer}>
              <AppText.Subtext>
                Are you sure you want to log out?
              </AppText.Subtext>
            </View>
            <View style={styles.modalButtonsContainer}>
              <Button
                uppercase={false}
                theme={{ colors: { primary: theme.colors.textPrimary } }}
                onPress={hideModal}
              >
                Cancel
              </Button>
              <Button
                uppercase={false}
                mode="contained"
                style={{ backgroundColor: theme.colors.error }}
                onPress={logOut}
              >
                Log Out
              </Button>
            </View>
          </Modal>
        </Portal>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.colors.backgroundPrimary,
    flex: 1,
  },
  appbar: {
    backgroundColor: theme.colors.backgroundThird,
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  newChannelButton: {
    backgroundColor: theme.colors.backgroundBlue,
    borderRadius: 5,
    width: "100%",
    marginTop: "3%",
  },
  modalContainer: {
    backgroundColor: theme.colors.backgroundPrimary,
    width: "85%",
    alignSelf: "center",
    borderRadius: 4,
  },
  modalTextContainer: {
    borderBottomWidth: 0.5,
    borderBottomColor: theme.colors.backgroundGrey,
    padding: 15,
    justifyContent: "center",
  },
  modalButtonsContainer: {
    padding: 15,
    justifyContent: "flex-end",
    flexDirection: "row",
    backgroundColor: theme.colors.backgroundThird,
  },
});

export default DrawerContent;
