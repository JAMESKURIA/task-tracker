import { SafeAreaView, LogBox, KeyboardAvoidingView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
import SafeViewAndroid from "./src/components/SafeViewAndroid";
import { Navigator } from "./src/screens";

export default function App() {
  LogBox.ignoreAllLogs(true);
  return (
    <NavigationContainer>
      <KeyboardAvoidingView style={tw`flex-1`}>
        <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, tw`flex-1`]}>
          <Navigator />
        </SafeAreaView>
      </KeyboardAvoidingView>
    </NavigationContainer>
  );
}
