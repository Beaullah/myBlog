import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import profile from "../assets/profile.jpg";
export default function Details() {
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/Flower1.jpg")}
        style={{ height: 120, width: "100%" }}
      />
      <Text style={{ fontSize: 20 }}>
        Focus on learning and creating rather than entertainmet and distraction
      </Text>
      <View style={styles.profileContainer}>
        <Image source={profile} style={styles.profile} />
        <Text>Suban read 4 mins ago</Text>
      </View>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
    gap: 30,
  },
  image: {
    height: 90,
    width: 70,
  },
  box: {
    flexDirection: "row",
    gap: 10,
  },
  profileContainer: {
    flexDirection: "row",
    gap: 10,
  },
  profile: {
    height: 30,
    width: 30,
    borderRadius: 100,
  },
});
