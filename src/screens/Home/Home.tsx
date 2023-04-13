import React from "react";
import { View } from "react-native";
import { Header } from "../../components/header/Header";
import { List } from "../../components/list/List";

import { styles } from "./styles";

export function Home() {
  return (
    <View style={styles.content}>
      <Header />
      <List />
    </View>
  );
}
