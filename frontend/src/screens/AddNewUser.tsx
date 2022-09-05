import { View, FlatList, StyleSheet, Pressable } from "react-native";
import { Appbar, Searchbar, Avatar } from "react-native-paper";
import { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import AppText from "../components/AppText";
import theme from "../constants/Theme";
import { GET_ALL_USERS } from "../graphql/queries";
import { ADD_USER_TO_CHANNEL } from "../graphql/mutations";

const UserItem = ({ user, channelID }: any) => {
  const [addUserToChannel] = useMutation(ADD_USER_TO_CHANNEL);
  const onSubmit = async () => {
    try {
      console.log(user.username);
      console.log(channelID);
      await addUserToChannel({
        variables: { username: user.username, channelId: channelID },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <Pressable onPress={onSubmit}>
      <View
        style={{
          width: "95%",
          flex: 1,
          flexDirection: "row",
          padding: 10,
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <Avatar.Text label={user.username[0].toUpperCase()} size={34} />
        <AppText.Subtitle style={{ fontSize: 16, marginLeft: 10 }}>
          {user.username}
        </AppText.Subtitle>
      </View>
    </Pressable>
  );
};

const AddNewUser = ({ navigation, route }: any) => {
  //Searhbar text
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query: string) => setSearchQuery(query);

  //Get users list from the backend
  const result = useQuery(GET_ALL_USERS, { fetchPolicy: "cache-and-network" });

  //Filter results based on the searchbar
  let filteredResult = null;

  //Load null if still loading the users
  if (!result.loading) {
    filteredResult = result.data.getAllUsers.filter((u: any) =>
      u.username.includes(searchQuery),
    );
  }

  return (
    <View style={styles.container}>
      <Appbar style={styles.appbar}>
        <Appbar.BackAction
          onPress={() => {
            navigation?.goBack();
          }}
        />
        <Appbar.Content title="Invite people" />
      </Appbar>
      <Searchbar
        placeholder="Search"
        onChangeText={onChangeSearch}
        value={searchQuery}
        style={styles.searchbar}
        theme={{
          colors: {
            text: theme.colors.textPrimary,
            placeholder: theme.colors.textPrimary,
            primary: theme.colors.textPrimary,
          },
        }}
      />
      {result.loading ? null : (
        <FlatList
          data={filteredResult}
          renderItem={({ item }) => (
            <UserItem user={item} channelID={route.params.channelID} />
          )}
        />
      )}
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
  searchbar: {
    width: "95%",
    margin: 10,
    backgroundColor: theme.colors.backgroundGrey,
  },
});

export default AddNewUser;
