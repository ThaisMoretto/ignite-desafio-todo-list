import { StyleSheet } from "react-native";

import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
  },
  font: {
    fontFamily: THEME.font.family.bold,
    fontSize: THEME.font.size.large,
  },
  createdText: {
    color: THEME.colors.blue.light,
  },
  doneText: {
    color: THEME.colors.purple.light,
  },
  counter: {
    marginLeft: 8,
    width: 30,
    backgroundColor: THEME.colors.gray[400],
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  textCounter: {
    color: THEME.colors.gray[200],
    fontFamily: THEME.font.family.bold,
    fontSize: THEME.font.size.small,
  },
});
