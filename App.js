import { Text, View } from "react-native";
import { TailwindProvider } from "tailwindcss-react-native";
import { NavigationContainer, ThemeProvider } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "./screens/HomeScreen";
import RestaurantScreen from "./screens/RestaurantScreen";
import { Provider } from "react-redux";
import { store } from "./features/store";
import BasketScreen from "./screens/BasketScreen";
import PreparingOrderScreen from "./screens/PreparingOrderScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <TailwindProvider>
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Restaurant" component={RestaurantScreen} />
            <Stack.Screen
              name="Basket"
              component={BasketScreen}
              options={{ presentation: "modal", headerShown: false }}
            />
            <Stack.Screen
              name="PreparingOrder"
              component={PreparingOrderScreen}
              options={{ presentation: "fullScreenModal", headerShown: false }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    </TailwindProvider>
  );
}
