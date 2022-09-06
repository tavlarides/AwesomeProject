import { Text, View, Button } from "react-native";
import { Screens } from "../consts/screens";

const HomeScreen = ({ navigation }) => {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Home!</Text>
      <Button
        title="Settings"
        onPress={() => navigation.navigate(Screens.Settings)}
      />
    </View>
  );
};

export default HomeScreen;
