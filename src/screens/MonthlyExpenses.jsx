import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import useStorage from "../hooks/useStorage";
import tw from "tailwind-react-native-classnames";
import Button from "../components/Button";

const MonthlyExpenses = ({ navigation }) => {
  const [myExpenses, setMyexpenses] = React.useState([]);
  const { state } = useStorage();

  React.useEffect(() => {
    setMyexpenses(state.expenses);
  }, [state]);

  return (
    <View style={tw`flex-1`}>
      <ScrollView>
        <Image
          source={require("../../assets/xpense.png")}
          style={[tw`self-center my-8`, { height: 20 }]}
        />
        <View style={tw`px-4`}>
          <Text style={tw`font-semibold text-xl `}>Hi {state.username}</Text>
          <Text style={tw`font-semibold text-xs  pt-2`}>
            Here is all your Monthly Expenses
          </Text>
        </View>

        {/* Expenses listed here */}
        <View style={tw`p-10 flex-1`}>
          {myExpenses.length > 0 ? (
            myExpenses.map((expense, idx) => (
              <View
                key={idx.toString()}
                style={tw`flex-row justify-between pt-4`}
              >
                <Text style={tw`text-xl font-semibold`}>{expense.expense}</Text>
                <Text style={tw`text-xl font-semibold`}>
                  {" "}
                  ${expense.amount}
                </Text>
              </View>
            ))
          ) : (
            <View style={tw`flex-1 p-10`}>
              <Text style={tw`font-semibold text-lg`}>
                Oops! Currently no expenses to show
              </Text>
            </View>
          )}
          {/* Button MonthlyExpensess */}
          <View style={tw`mt-20 mx-4 `}>
            <Button
              text="add more expenses"
              style={tw`mb-4`}
              onPress={() => navigation.navigate("AddExpense")}
            />
            <Button
              text="show report"
              style={tw`mb-4`}
              onPress={() => navigation.navigate("Report")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MonthlyExpenses;
