import { View, Text, Image, ScrollView } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

import Button from "../components/Button";

const MonthlyExpenses = ({ navigation }) => {
  return (
    <View style={tw`flex-1`}>
      <ScrollView>
        <Image
          source={require("../../assets/xpense.png")}
          style={[tw`self-center my-8`, { height: 20 }]}
        />
        <View style={tw`px-4`}>
          <Text style={tw`font-semibold text-xl `}>Hi Mustack</Text>
          <Text style={tw`font-semibold text-xs  pt-2`}>
            Add Your Expenses Here
          </Text>
        </View>

        {/* Form input fields */}
        <View style={tw`px-4 py-10 flex-1`}>
          <View style={tw`flex-row justify-between pt-4`}>
            <Text style={tw`text-xl font-semibold`}>Rent</Text>
            <Text style={tw`text-xl font-semibold`}> $500</Text>
          </View>
          <View style={tw`flex-row justify-between pt-4`}>
            <Text style={tw`text-xl font-semibold`}>Groceries</Text>
            <Text style={tw`text-xl font-semibold`}> $100</Text>
          </View>
          <View style={tw`flex-row justify-between pt-4`}>
            <Text style={tw`text-xl font-semibold`}>Transportation</Text>
            <Text style={tw`text-xl font-semibold`}> $60</Text>
          </View>
          <View style={tw`flex-row justify-between pt-4`}>
            <Text style={tw`text-xl font-semibold`}>Phone Bills</Text>
            <Text style={tw`text-xl font-semibold`}> $55</Text>
          </View>

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
