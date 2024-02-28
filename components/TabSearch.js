import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import Animated, { BounceIn } from "react-native-reanimated";

const TabSearch = ({ items }) => {
  const [index, setIndex] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.tabs}>
        {items.map((tab, i) => {
          const active = index === i;
          return (
            <TouchableOpacity
              key={i}
              onPress={() => setIndex(i)}
              style={styles.tab}
            >
              {active && (
                <Animated.View entering={BounceIn} style={styles.dot} />
              )}
              <Text style={active ? styles.activeTabText : styles.tabText}>
                {tab.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
      {items[index].content()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingBottom: 10,
  },
  tab: {
    marginLeft: 25,
  },
  tabText: {
    color: "#808080",
  },
  activeTabText: {
    color: "#000000",
  },
  dot: {
    position: "absolute",
    top: 5,
    left: -10,
    width: 6,
    height: 6,
    backgroundColor: "#000000",
    borderRadius: 3,
  },
});

export default TabSearch;
