import React from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const TodoItems = ({ item, handleItemClick }) => {
  return (
    <TouchableOpacity onPress={() => handleItemClick(item.key)}>
      <View style={styles.item}>
        <AntDesign name="delete" size={20} color="black" />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  item: {
    flexDirection: "row",
    padding: 16,
    marginTop: 16,
    borderColor: "#bbb",
    borderWidth: 1,
    borderStyle: "dashed",
    borderRadius: 10,
  },
  text: {
    marginLeft: 10,
  },
});

export default TodoItems;
