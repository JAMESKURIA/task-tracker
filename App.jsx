import { LogBox, KeyboardAvoidingView } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import tw from "tailwind-react-native-classnames";
import StorageProvider from "./src/components/StorageProvider";
import Navigator from "./src/screens/Navigator";

export default function App() {
  LogBox.ignoreAllLogs(true);
  return (
    <StorageProvider>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView style={tw`flex-1`}>
            <Navigator />
          </KeyboardAvoidingView>
        </SafeAreaProvider>
      </NavigationContainer>
    </StorageProvider>
  );
}
