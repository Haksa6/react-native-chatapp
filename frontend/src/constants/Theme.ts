//Select font based on the platform
import { Platform } from "react-native";

const theme = {
  colors: {
    textPrimary: "#FFFFFF",
    textSecondary: "#B9BBBE",
    backgroundPrimary: "#424549",
    backgroundSecondary: "#282b30",
    backgroundThird: "#36393e",
    backgroundBlue: "#6665d2",
    backgroundGrey: "#99AAB5",
    error: "#FF0000",
  },
  fontSizes: {
    body: 16,
    subheading: 24,
    heading: 28,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
