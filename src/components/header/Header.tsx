import { Image, View } from "react-native";

import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.logo}>
        <Image source={require("../../assets/logo.png")} />
      </View>
    </View>
  );
}
