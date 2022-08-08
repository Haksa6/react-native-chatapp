import React from "react";
import { Text as NativeText, StyleSheet, TextProps } from "react-native";

import theme from "../constants/Theme";

interface AppTextProps extends TextProps {
  children?: string;
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
AppText.Error = ({ style, ...props }: AppTextProps) => (
  <AppText {...props} style={[styles.error, style]} />
);

const styles = StyleSheet.create({
  text: {
    color: theme.colors.textPrimary,
    fontSize: theme.fontSizes.body,
    fontFamily: theme.fonts.main,
  },
  colorTextSecondary: {
    color: theme.colors.textSecondary,
  },
  fontSizeHeading: {
    fontSize: theme.fontSizes.heading,
    fontWeight: "bold",
  },
  fontSizeSubHeading: {
    fontSize: theme.fontSizes.subheading,
    fontWeight: "bold",
  },
  error: {
    color: theme.colors.error,
  },
});

export default AppText;
