import React, { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";

import { THEME } from "../../styles/theme";
import { styles } from "./styles";

export function Input() {
  const [activeInput, setActiveInput] = useState(false);
  const [todoTitle, setTodoTitle] = useState("");

  return (
    <View style={styles.wrapper}>
      <TextInput
        value={todoTitle}
        placeholder="Adicione uma nova tarefa"
        style={[
          styles.input,
          activeInput
            ? styles.activeInputBorderColor
            : styles.defaultInputBorderColor,
        ]}
        placeholderTextColor={THEME.colors.gray[300]}
        onChangeText={setTodoTitle}
      />
      <TouchableOpacity
        style={[
          styles.button,
          activeInput ? styles.activeButtonColor : styles.defaultButtonColor,
        ]}
      >
        <Image source={require("../../assets/plus.png")} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}
