import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { AntDesign, MaterialCommunityIcons } from "@expo/vector-icons";
import Home from "./components/Home";
import Details from "./components/Details";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{
            title: "Discover",
            headerTitleAlign: "center",
            headerLeft: () => (
              <MaterialCommunityIcons
                name="dots-grid"
                size={24}
                color="black"
              />
            ),
            headerRight: () => (
              <AntDesign name="search1" size={24} color="black" />
            ),
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen name="Details" component={Details} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
