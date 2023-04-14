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
  handleDelete: (item: ItemProps) => void;
}

export function ListItem({ item, handleDone, handleDelete }: ListItemProps) {
  const trashIcon = item.done
    ? require("../../assets/trash-false.png")
    : require("../../assets/trash-active.png");

  return (
    <View style={styles.content}>
      <Checkbox
        style={styles.checkbox}
        value={item.done}
        onValueChange={() => handleDone(item)}
        color={item.done ? "#5E60CE" : "#4EA8DE"}
      />
      <Text
        style={[styles.text, item.done ? styles.textDone : styles.textDefault]}
      >
        {item.title}
      </Text>

      <TouchableOpacity
        disabled={item.done}
        onPress={() => handleDelete(item)}
        style={styles.trashButton}
      >
        <Image source={trashIcon} />
      </TouchableOpacity>
    </View>
  );
}
