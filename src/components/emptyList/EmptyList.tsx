import React from "react";
import { Image, Text, View } from "react-native";

import { styles } from "./styles";

export function EmptyList() {
  return (
    <View style={styles.content}>
      <View style={styles.list} />

      <Image
        style={styles.clipboardIcon}
        source={require("../../assets/clipboard.png")}
      />

      <Text style={[styles.text, styles.title]}>
        Você ainda não tem tarefas cadastradas
      </Text>
      <Text style={styles.text}>
        Crie tarefas e organize seus itens a fazer
      </Text>
    </View>
  );
}
