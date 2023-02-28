import { StyleSheet } from "react-native";
import { Themes } from "./assets/Themes";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from '@react-navigation/stack';
import 'react-native-gesture-handler';
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from "./screens/DetailsScreen";
import PreviewScreen from "./screens/PreviewScreen";

const Stack = createStackNavigator();

export default function App() {
  return <NavigationContainer>
    <Stack.Navigator style={styles.container}>
      <Stack.Screen options={{headerShown: false}} name="HomeScreen" component={HomeScreen}/>
      <Stack.Screen name="DetailsScreen" component={DetailsScreen} style={styles.text} options={{
        title:'Song preview',
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "white",
      }} />
      <Stack.Screen name="PreviewScreen" component={PreviewScreen} style={styles.text} options={{
        title: 'Song details',
        headerStyle: {
          backgroundColor: "black",
        },
        headerTintColor: "white",
      }}/>
    </Stack.Navigator>
  </NavigationContainer>
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: Themes.colors.background,
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
});