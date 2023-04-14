import React, { useState } from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";

import { THEME } from "../../styles/theme";
import { styles } from "./styles";

interface InputProps {
  handleAddTask: (title: string) => void;
}

export function Input({ handleAddTask }: InputProps) {
  console.log("renderizou o input");
  const [activeInput, setActiveInput] = useState(false);
  const [todoTitle, setTodoTitle] = useState("");

  function onClickTrash() {
    handleAddTask(todoTitle);
    setTodoTitle("");
  }

  function handleInput() {
    setActiveInput(!activeInput);
  }

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
        onFocus={handleInput}
        onBlur={handleInput}
      />
      <TouchableOpacity
        style={[
          styles.button,
          activeInput ? styles.activeButtonColor : styles.defaultButtonColor,
        ]}
        onPress={onClickTrash}
        disabled={!todoTitle}
      >
        <Image source={require("../../assets/plus.png")} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}
