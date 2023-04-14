import React, { useState } from "react";
import { Alert, FlatList, View } from "react-native";
import { Counter, CounterType } from "../counter/Counter";
import { EmptyList } from "../emptyList/EmptyList";
import { Input } from "../input/Input";
import { ItemProps, ListItem } from "../listItem/ListItem";

import { styles } from "./styles";

export function List() {
  const [list, setList] = useState<ItemProps[]>([]);

  function handleAddTask(title: string) {
    if (!title) {
      return;
    }

    const taskAlreadyExists = list.find((item) => item.title === title);

    if (taskAlreadyExists) {
      return Alert.alert(
        "Tarefa existente",
        "Esta tarefa já existe na sua lista!"
      );
    }

    const newTask: ItemProps = {
      title,
      done: false,
    };

    setList((prevState) => [...prevState, newTask]);
  }

  function handleDone({ title }: ItemProps) {
    setList(
      list.map((item) => {
        if (item.title === title) {
          item.done = !item.done;
        }
        return item;
      })
    );
  }

  function handleDelete({ title }: ItemProps) {
    Alert.alert("Apagar tarefa", `Deseja realmente apagar a tarefa ${title}?`, [
      {
        text: "Sim",
        onPress: () =>
          setList((prevState) =>
            prevState.filter((item) => item.title !== title)
          ),
      },
      { text: "Não", style: "cancel" },
    ]);
  }

  return (
    <View style={styles.contentList}>
      <Input handleAddTask={handleAddTask} />

      <View style={styles.titles}>
        <Counter text={CounterType.CREATED} counter={list.length} />
        <Counter
          text={CounterType.DONE}
          counter={list.filter((item) => item.done === true).length}
        />
      </View>

      <View style={styles.contentListItem}>
        <FlatList
          data={list}
          keyExtractor={(item) => item.title}
          renderItem={({ item }) => (
            <ListItem
              key={item.title}
              item={item}
              handleDone={handleDone}
              handleDelete={handleDelete}
            />
          )}
          ListEmptyComponent={() => <EmptyList />}
          showsHorizontalScrollIndicator={true}
        />
      </View>
    </View>
  );
}
