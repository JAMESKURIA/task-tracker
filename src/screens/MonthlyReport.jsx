import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

import Button from "../components/Button";
import useStorage from "../hooks/useStorage";

const MonthlyReport = ({ navigation }) => {
  const {
    state: { expenses, income },
  } = useStorage();

  const totalExpenses = expenses.reduce((acc, curr) => {
    return acc + parseFloat(curr.amount);
  }, 0);

  const savings = income - totalExpenses;

  return (
    <View style={tw`flex-1`}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image
          source={require("../../assets/xpense.png")}
          style={[tw`self-center my-8`, { height: 20 }]}
        />
        <Text style={tw`px-4 font-semibold text-xl `}>Montly Report</Text>

        {/* Form input fields */}
        <View style={tw`px-6 py-16 flex-1`}>
          <View style={tw`flex-row justify-between pt-4`}>
            <Text style={tw`text-xl font-semibold`}>Total Expenses</Text>
            <Text style={tw`text-xl font-semibold`}> ${totalExpenses}</Text>
          </View>
          <View style={tw`flex-row justify-between pt-4`}>
            <Text style={tw`text-xl font-semibold`}>Income</Text>
            <Text style={tw`text-xl font-semibold`}> ${income}</Text>
          </View>

          <View style={tw`flex-row justify-between mt-20`}>
            <Text style={tw`text-xl font-semibold`}>Savings</Text>
            <Text style={tw`text-xl font-semibold`}>
              {savings < 0 ? `- $${Math.abs(savings)}` : `$${savings}`}
            </Text>
          </View>

          {/* Button  */}
          <View style={tw`mt-20 mx-4 `}>
            <Button
              text="add more expenses"
              style={tw`mb-4`}
              onPress={() => navigation.navigate("AddExpense")}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default MonthlyReport;
