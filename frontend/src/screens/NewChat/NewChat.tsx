import { View, FlatList } from "react-native";
import { styles } from "./styles";
import { Appbar, Searchbar, Avatar } from "react-native-paper";
import { useState } from "react";
import { useQuery } from "@apollo/client";
import AppText from "../../components/AppText";
import theme from "../../constants/Theme";
import GET_ALL_USERS from "../../queries/getAllUsers";

const User = ({ username }: any) => {
  return (
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
      <Avatar.Text label={username.username[0].toUpperCase()} size={34} />
      <AppText.Subtitle style={{ fontSize: 16, marginLeft: 10 }}>
        {username.username}
      </AppText.Subtitle>
    </View>
  );
};

const NewChat = ({ navigation }: any) => {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query: string) => setSearchQuery(query);
  const result = useQuery(GET_ALL_USERS);

  const filteredResult = result.data.getAllUsers.filter((u: any) =>
    u.username.includes(searchQuery),
  );

  return (
    <View style={styles.container}>
      <Appbar style={styles.appbar}>
        <Appbar.BackAction
          onPress={() => {
            navigation?.goBack();
          }}
        />
        <Appbar.Content title="Start Chatting" />
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
      <FlatList
        data={filteredResult}
        renderItem={({ item }) => <User username={item} />}
      />
    </View>
  );
};

export default NewChat;
