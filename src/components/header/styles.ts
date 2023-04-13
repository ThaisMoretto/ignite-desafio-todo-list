import { StyleSheet } from "react-native";

import { THEME } from "../../styles/theme";

export const styles = StyleSheet.create({
  header: {
    height: 170,
    backgroundColor: THEME.colors.gray[700],
    padding: 24,
    alignItems: "center",
  },
  logo: {
    marginTop: 42,
  },
});
