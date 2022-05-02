import { SafeAreaView } from "react-native-safe-area-context";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {
  AddExpense,
  Income,
  Login,
  MonthlyExpenses,
  MonthlyReport,
  Register,
} from ".";

const Stack = createNativeStackNavigator();

const Navigator = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Stack.Navigator
        initialRouteName="Login"
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Register" component={Register} />
        <Stack.Screen name="Income" component={Income} />
        <Stack.Screen name="AddExpense" component={AddExpense} />
        <Stack.Screen name="Expenses" component={MonthlyExpenses} />
        <Stack.Screen name="Report" component={MonthlyReport} />
      </Stack.Navigator>
    </SafeAreaView>
  );
};

export default Navigator;
