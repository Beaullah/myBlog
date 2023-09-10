import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import Flower1 from "../assets/Flower1.jpg";
import profile from "../assets/profile.jpg";

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.box}
        onPress={() => navigation.navigate("Details")}
      >
        <Image source={Flower1} style={styles.image} />
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold", width: "50%" }}>
            Does Dry in January Actually improve your Health?
          </Text>
          <View style={styles.profileContainer}>
            <Image source={profile} style={styles.profile} />
            <Text>Suban read 4 mins ago</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <Image source={require("../assets/Flower2.jpg")} style={styles.image} />
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold", width: "50%" }}>
            Does Dry in January Actually improve your Health?
          </Text>
          <View style={styles.profileContainer}>
            <Image source={profile} style={styles.profile} />
            <Text>Suban read 4 mins ago</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <Image source={require("../assets/Flower3.jpg")} style={styles.image} />
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold", width: "50%" }}>
            Does Dry in January Actually improve your Health?
          </Text>
          <View style={styles.profileContainer}>
            <Image source={profile} style={styles.profile} />
            <Text>Suban read 4 mins ago</Text>
          </View>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={styles.box}>
        <Image source={require("../assets/Flower4.jpg")} style={styles.image} />
        <View>
          <Text style={{ fontSize: 20, fontWeight: "bold", width: "50%" }}>
            Does Dry in January Actually improve your Health?
          </Text>
          <View style={styles.profileContainer}>
            <Image source={profile} style={styles.profile} />
            <Text>Suban read 4 mins ago</Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    backgroundColor: "#fff",
    padding: 20,
    margin: 10,
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
