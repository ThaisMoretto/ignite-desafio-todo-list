import { StyleSheet } from "react-native";

import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  content: {
    alignItems: "center",
  },
  list: {
    width: "100%",
    borderTopWidth: 1,
    borderTopColor: THEME.colors.gray[300],
  },
  clipboardIcon: {
    marginTop: 48,
    marginBottom: 16,
    tintColor: THEME.colors.gray[300],
  },
  text: {
    color: THEME.colors.gray[300],
    fontSize: THEME.font.size.medium,
  },
  title: {
    fontFamily: THEME.font.family.bold,
  },
});
