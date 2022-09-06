import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Screens from "./consts/screens";
import { HomeScreen, SettingsScreen } from "./Screens";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={Screens.Home}>
        <Stack.Screen name={Screens.Home} component={HomeScreen} />
        <Stack.Screen name={Screens.Settings} component={SettingsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}