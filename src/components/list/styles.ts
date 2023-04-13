import { StyleSheet } from "react-native";

import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  contentList: {
    width: "100%",
    backgroundColor: THEME.colors.gray[500],
    flex: 1,
    padding: 24,
  },
  titles: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 42,
  },
  textContent: {
    flexDirection: "row",
  },
  contentListItem: {
    marginTop: 20,
    paddingBottom: 40,
  },
});
