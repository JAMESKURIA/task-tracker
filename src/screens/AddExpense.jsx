import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import tw from "tailwind-react-native-classnames";
import { TextField } from "rn-material-ui-textfield";
import Button from "../components/Button";

const AddExpense = ({ navigation }) => {
  const [expense, setExpense] = React.useState("");
  const [amount, setAmount] = React.useState();

  // Handle Add
  const handleAdd = () => {
    // TODO: Handle add logic here
  };

  return (
    <View style={tw`flex-1`}>
      <Image
        source={require("../../assets/xpense.png")}
        style={[tw`self-center my-8`, { height: 20 }]}
      />
      <View style={tw`px-4`}>
        <Text style={tw`font-semibold text-xl `}> Hi Mustack</Text>
        <Text style={tw`font-semibold text-xs px-2  pt-2`}>
          Add Your Expenses Here
        </Text>
      </View>

      {/* Form input fields */}
      <View style={tw`px-4 py-10 flex-1`}>
        <TextField
          label="Expense Name"
          value={expense}
          onChangeText={(text) => setExpense(text)}
        />
        <TextField
          label="Amount"
          value={amount}
          secureTextEntry
          onChangeText={(text) => setAmount(text)}
        />
        {/* Button AddExpenses */}
        <View style={tw`mt-20 mx-4 absolute bottom-20 mx-4 w-full `}>
          <Button text="add" style={tw`mb-4`} onPress={handleAdd} />
          <TouchableOpacity onPress={() => navigation.navigate("Expenses")}>
            <Text style={tw`text-center`}>Show Expenses</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddExpense;
