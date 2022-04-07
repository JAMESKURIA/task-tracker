import { SafeAreaView, LogBox, KeyboardAvoidingView, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import tw from "tailwind-react-native-classnames";
import SafeViewAndroid from "./src/components/SafeViewAndroid";
import StorageProvider from "./src/components/StorageProvider";
import Navigator from "./src/screens/Navigator";

export default function App() {
  LogBox.ignoreAllLogs(true);
  return (
    <StorageProvider>
      <NavigationContainer>
        <SafeAreaView style={[SafeViewAndroid.AndroidSafeArea, tw`flex-1`]}>
          <KeyboardAvoidingView style={tw`flex-1`}>
            <Navigator />
          </KeyboardAvoidingView>
        </SafeAreaView>
      </NavigationContainer>
    </StorageProvider>
  );
}
