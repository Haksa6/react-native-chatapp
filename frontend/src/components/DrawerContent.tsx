import { View, StyleSheet } from "react-native";
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
import { useApolloClient } from "@apollo/client";
import useCurrentUser from "../hooks/useCurrentUser";

const DrawerContent = ({ navigation }: any) => {
  const [modalVisibility, setModalVisibility] = useState(false);
  const showModal = () => setModalVisibility(true);
  const hideModal = () => setModalVisibility(false);
  const apolloClient = useApolloClient();

  const { currentUser } = useCurrentUser();

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
      <View style={{ display: "flex", alignItems: "center" }}>
        <Button
          mode="contained"
          style={styles.newChatButton}
          onPress={() => navigation.navigate("NewChannel")}
          contentStyle={{ height: 45 }}
        >
          New channel
        </Button>
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
  newChatButton: {
    backgroundColor: theme.colors.backgroundBlue,
    borderRadius: 5,
    width: "90%",
    marginTop: "5%",
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
