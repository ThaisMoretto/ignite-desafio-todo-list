import { StyleSheet } from "react-native";

import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    position: "absolute",
    top: -30,
    left: 25,
  },
  input: {
    flex: 1,
    backgroundColor: THEME.colors.gray[500],
    height: 56,
    color: THEME.colors.gray[100],
    padding: 16,
    fontFamily: THEME.font.family.regular,
    fontSize: THEME.font.size.large,
    marginRight: 4,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 6,
  },
  defaultInputBorderColor: {
    borderColor: THEME.colors.gray[700],
  },
  activeInputBorderColor: {
    borderColor: THEME.colors.purple.dark,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    width: 56,
    height: 56,
    borderRadius: 5,
  },
  defaultButtonColor: {
    backgroundColor: THEME.colors.blue.dark,
  },
  activeButtonColor: {
    backgroundColor: THEME.colors.blue.light,
  },
  icon: {
    tintColor: THEME.colors.gray[100],
  },
});
