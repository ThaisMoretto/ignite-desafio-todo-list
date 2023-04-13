import React, { useState } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import Checkbox from "expo-checkbox";

import { styles } from "./styles";

export interface ItemProps {
  title: string;
  done: boolean;
}

export interface ListItemProps {
  item: ItemProps;
  handleDone: (item: ItemProps) => void;
}

export function ListItem({ item, handleDone }: ListItemProps) {
  const trashIcon = item.done
    ? require("../../assets/trash-false.png")
    : require("../../assets/trash-active.png");

  function handleChange() {
    handleDone(item);
  }

  return (
    <View style={styles.content}>
      <Checkbox
        style={styles.checkbox}
        value={item.done}
        onValueChange={handleChange}
        color={item.done ? "#5E60CE" : "#4EA8DE"}
      />
      <Text
        style={[styles.text, item.done ? styles.textDone : styles.textDefault]}
      >
        {item.title}
      </Text>

      <TouchableOpacity style={styles.trashButton}>
        <Image source={trashIcon} />
      </TouchableOpacity>
    </View>
  );
}
