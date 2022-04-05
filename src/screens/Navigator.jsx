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
  );
};

export default Navigator;
