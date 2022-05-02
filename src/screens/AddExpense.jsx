import React from "react";
import { View, Text, Image, TouchableOpacity, Alert } from "react-native";
import tw from "tailwind-react-native-classnames";
import { TextField } from "rn-material-ui-textfield";
import Button from "../components/Button";
import useStorage from "../hooks/useStorage";
import uuid from "uuid-random";
import { ACTIONS } from "../utils/actions";

const AddExpense = ({ navigation }) => {
  const [expense, setExpense] = React.useState("");
  const [amount, setAmount] = React.useState(null);

  const { state, storage, dispatch } = useStorage();

  // Handle Add
  const handleAdd = () => {
    //  Handle add logic here

    if (!expense || !amount) {
      Alert.alert("Caution!", "Please fill in all the fields");
      return;
    }

    // Save item function
    const saveItem = () => {
      Alert.alert(
        "Confirm Add!",
        ` Expense:  ${expense} \n Amount: ${amount} ?`,
        [
          {
            text: "Cancel",
            style: "cancel",
          },
          {
            text: "Ok",
            onPress: () => {
              storage.save({
                key: "expense",
                id: `${uuid()}`,
                data: {
                  email: state.email,
                  expense,
                  amount,
                },
              });

              dispatch({
                type: ACTIONS.expenses,
                payload: [
                  ...state.expenses,
                  {
                    email: state.email,
                    expense,
                    amount,
                  },
                ],
              });

              Alert.alert("Success!", `Successfuly added`);

              setExpense(null);
              setAmount(null);
            },
            style: "OK",
          },
        ]
      );
    };

    saveItem();
  };

  return (
    <View style={tw`flex-1`}>
      <Image
        source={require("../../assets/xpense.png")}
        style={[tw`self-center my-8`, { height: 20 }]}
      />
      <View style={tw`px-4`}>
        <Text style={tw`font-semibold text-xl `}> Hi {state.username}</Text>
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
          keyboardType="numeric"
          onChangeText={(text) => setAmount(text)}
        />
        {/* Button AddExpenses */}
        <View style={tw`mt-20 mx-4 `}>
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
