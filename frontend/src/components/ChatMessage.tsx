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
          {message.senderName}
        </AppText.Subtitle>
        <AppText>{message.date}</AppText>
      </View>
      <AppText>{message.text}</AppText>
    </View>
  );
};

export default ChatMessage;
