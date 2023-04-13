import React, { useState } from "react";
import { FlatList, View } from "react-native";
import { Counter, CounterType } from "../counter/Counter";
import { EmptyList } from "../emptyList/EmptyList";
import { Input } from "../input/Input";
import { ItemProps, ListItem } from "../listItem/ListItem";

import { styles } from "./styles";

export function List() {
  const [list, setList] = useState<ItemProps[]>([
    { title: "title", done: true },
    { title: "title2", done: false },
    { title: "title3", done: false },
    { title: "title4", done: true },
  ]);

  function handleDone(clickedItem: ItemProps) {
    console.log("clicou ara marcar", clickedItem);

    setList(
      list.map((item) => {
        if (item.title === clickedItem.title) {
          item.done = !clickedItem.done;
        }
        return item;
      })
    );
    // setar o done do item para true ou false
    // passar essa func para o componente ListItem
  }

  return (
    <View style={styles.contentList}>
      <Input />

      <View style={styles.titles}>
        <Counter
          text={CounterType.CREATED}
          counter={list.filter((item) => item.done === false).length}
        />
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
              handleDone={() => handleDone(item)}
            />
          )}
          ListEmptyComponent={() => <EmptyList />}
          showsHorizontalScrollIndicator={true}
        />
      </View>
    </View>
  );
}
