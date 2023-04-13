import React from "react";
import { Text, View } from "react-native";

import { styles } from "./styles";

export enum CounterType {
  CREATED = "Criadas",
  DONE = "Concluídas",
}

interface CounterProps {
  text: CounterType;
  counter?: number;
}

export function Counter({ text, counter = 0 }: CounterProps) {
  return (
    <View style={styles.content}>
      <Text
        style={[
          styles.font,
          text === CounterType.CREATED ? styles.createdText : styles.doneText,
        ]}
      >
        {text}
      </Text>
      <View style={styles.counter}>
        <Text style={styles.textCounter}>{counter}</Text>
      </View>
    </View>
  );
}
