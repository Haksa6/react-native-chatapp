import React from "react";
import { Text as NativeText, StyleSheet, TextProps } from "react-native";

import theme from "../constants/Theme";

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
    fontWeight: "400",
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  fontSizeHeading: {
    fontSize: theme.fontSizes.heading,
  },
  fontSizeSubHeading: {
    fontSize: theme.fontSizes.subheading,
  },
  fontWeightBold: {
    //Couldnt get it from the theme for some
    fontWeight: "700",
  },
});

interface AppTextProps extends TextProps {
  children: string;
}

const AppText = ({ style, ...props }: AppTextProps) => (
  <NativeText {...props} style={[styles.text, style]} />
);

AppText.Title = ({ style, ...props }: AppTextProps) => (
  <AppText {...props} style={[styles.fontSizeHeading, style]} />
);
AppText.Subtitle = ({ style, ...props }: AppTextProps) => (
  <AppText {...props} style={[styles.fontSizeSubHeading, style]} />
);
AppText.Subtext = ({ style, ...props }: AppTextProps) => (
  <AppText {...props} style={[styles.colorTextSecondary, style]} />
);

export default AppText;
