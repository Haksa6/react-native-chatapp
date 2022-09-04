import { View } from "react-native";
import AppText from "./AppText";

const ChatMessage = ({ message }: any) => {
  return (
    <View
      style={{
        padding: 10,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <AppText.Subtitle
          style={{
            fontSize: 18,
            marginRight: "3%",
          }}
        >
          Weeti
        </AppText.Subtitle>
        <AppText style={{}}>02/02/2019</AppText>
      </View>
      <AppText>{message.message}</AppText>
    </View>
  );
};

export default ChatMessage;
