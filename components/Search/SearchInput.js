import React, { useState, useEffect } from "react";
import { View, TextInput, Image, Pressable, StyleSheet } from "react-native";

const SearchInput = () => {
  const [search, setSearch] = useState("");
  return (
    <View style={styles.container}>
      <View style={styles.search}>
        <Pressable onPress={() => alert("Search clicked")}>
          <Image
            source={require("../../assets/icons/search.png")}
            style={{
              width: 20,
              height: 20,
              tintColor: "#000",
            }}
          />
        </Pressable>
      </View>
      <TextInput
        style={styles.field}
        placeholder="Search..."
        value={search}
        onChangeText={setSearch}
      />
      <View style={styles.filter}>
        <Pressable onPress={() => alert("Filter clicked")}>
          <Image
            source={require("../../assets/icons/filter.png")}
            style={{
              width: 20,
              height: 20,
              tintColor: "#000",
            }}
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    paddingTop: 10,
    paddingBottom: 10,
  },
  search: {
    justifyContent: "center",
    left: "60%",
    zIndex: 1,
  },
  field: {
    backgroundColor: "#fff",
    paddingLeft: "10%",
    paddingRight: "10%",
    height: 50,
    borderRadius: 10,
    flex: 1,
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 3,
  },
  filter: {
    justifyContent: "center",
    right: "60%",
    zIndex: 1,
  },
});

export default SearchInput;
