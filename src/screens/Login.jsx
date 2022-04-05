import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { TextField } from "rn-material-ui-textfield";
import Button from "../components/Button";

const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  // Handle Login
  const handleLogin = () => {
    // Login logic here

    navigation.navigate("Income");
  };

  return (
    <View style={tw`flex-1`}>
      <Image
        source={require("../../assets/icon.png")}
        style={[tw`self-center my-6`, { height: 171, width: 171 }]}
      />

      {/* Form input fields */}
      <View style={tw`px-4 py-6`}>
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

        {/* Login Button */}
        <View style={tw`mt-20 mx-4`}>
          <Button text="Login" onPress={handleLogin} />
        </View>

        <View style={tw`flex-row pt-8 self-center `}>
          <Text>Not Registered? </Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={tw`font-bold`}>Create New Account</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
