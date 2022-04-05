import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { TextField } from "rn-material-ui-textfield";
import Button from "../components/Button";

const Income = ({ navigation }) => {
  const [username, setUsername] = React.useState("");
  const [income, setIncome] = React.useState();

  // Handle save
  const handleSave = () => {
    // save logic here

    navigation.navigate("AddExpense");
  };

  // Handle cancel
  const handleCancel = () => {
    // cancel logic here
    navigation.navigate("Income");
  };

  return (
    <View style={tw`flex-1`}>
      <Image
        source={require("../../assets/xpense.png")}
        style={[tw`self-center my-8`, { height: 20 }]}
      />
      <Text style={tw`font-semibold text-xl px-4`}> Monthly Budget</Text>

      {/* Form input fields */}
      <View style={tw`px-4 py-10 flex-1`}>
        <TextField
          label="Username"
          value={username}
          onChangeText={(text) => setUsername(text)}
        />
        <TextField
          label="Income"
          value={income}
          secureTextEntry
          onChangeText={(text) => setIncome(text)}
        />
        {/* Button Incomes */}
        <View style={tw`mt-20 mx-4 absolute bottom-20 mx-4 w-full `}>
          <Button text="save" style={tw`mb-4`} onPress={handleSave} />
          <Button text="cancel" onPress={handleCancel} />
        </View>
      </View>
    </View>
  );
};

export default Income;
