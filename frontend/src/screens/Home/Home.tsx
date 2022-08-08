import React from "react";
import {
  View,
  KeyboardAvoidingView,
  FlatList,
  Text,
  Platform,
  TextInput,
} from "react-native";
import { styles } from "./styles";
import { Appbar, IconButton } from "react-native-paper";
import theme from "../../constants/Theme";

const DATA = [
  {
    message: "First Item",
  },
  {
    message: "Second Item",
  },
  {
    message: "Third Item",
  },
  {
    message: "First Item",
  },
  {
    message:
      "SSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond ItemSecond Itemv",
  },
  {
    message: "First Item",
  },
  {
    message: "Second Item",
  },
  {
    message: "Third Item",
  },
  {
    message: "First Item",
  },
  {
    message: "Second Item",
  },
  {
    message: "Second Item",
  },
  {
    message: "Third Item",
  },
  {
    message: "First Item",
  },
  {
    message: "Second Item",
  },
  {
    message: "Second Item",
  },
  {
    message: "Third Item",
  },
  {
    message: "First Item",
  },
  {
    message: "Second Item",
  },
];

const ChatMessage = ({ message }: any) => {
  return (
    <View style={{ padding: 5 }}>
      <View style={{ borderRadius: 5, padding: 10 }}>
        <Text style={{ color: "white" }}> {message.message}</Text>
      </View>
    </View>
  );
};
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
            placeholder="Message e"
            placeholderTextColor={theme.colors.textSecondary}
            multiline
            style={{
              flex: 1,
              color: theme.colors.textSecondary,
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

const Home = ({ navigation }: any) => {
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
        <Appbar.Content title={"e"} />
      </Appbar>
      <FlatList
        data={DATA}
        renderItem={({ item }) => <ChatMessage message={item} />}
        inverted
      />
      <InputBox />
    </View>
  );
};

export default Home;
