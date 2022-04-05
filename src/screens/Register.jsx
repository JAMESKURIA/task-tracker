import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { TextField } from "rn-material-ui-textfield";
import Button from "../components/Button";

const Register = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // Handle register
  const handleRegister = () => {
    // Register logic

    navigation.navigate("Login");
  };

  return (
    <View style={tw`flex-1`}>
      <Image
        source={require("../../assets/icon.png")}
        style={[tw`self-center my-6`, { height: 171, width: 171 }]}
      />

      {/* Form input fields */}
      <View style={tw`px-6 py-6`}>
        <TextField
          label="Email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
        <TextField
          label="Password"
          value={password}
          secureTextEntry
          onChangeText={(text) => setPassword(text)}
        />
        <TextField label="Confirm Password" secureTextEntry />

        {/* Register Button */}
        <View style={tw`mt-16 mx-4`}>
          <Button text="Register" onPress={handleRegister} />
        </View>

        <View style={tw`flex-row pt-8 self-center `}>
          <Text>Already have an Account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Login")}>
            <Text style={tw`font-bold`}>Login Here</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Register;
