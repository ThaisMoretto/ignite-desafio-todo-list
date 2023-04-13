import { StyleSheet } from "react-native";

import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  content: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    borderRadius: 8,
    borderWidth: 1,
    borderColor: THEME.colors.gray[300],
    backgroundColor: THEME.colors.gray[400],
    paddingLeft: 15,
    paddingRight: 12,
    paddingVertical: 12,
    alignItems: "center",
    marginBottom: 16,
  },
  checkbox: {
    borderRadius: 50,
  },
  text: {
    fontSize: THEME.font.size.medium,
    fontFamily: THEME.font.family.regular,
    flex: 1,
    marginRight: 12,
    marginLeft: 12,
  },
  textDefault: {
    color: THEME.colors.gray[100],
  },
  textDone: {
    color: THEME.colors.gray[300],
    textDecorationLine: "line-through",
  },
  trashButton: {
    width: 30,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 4,
  },
});
