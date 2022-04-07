import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { TextField } from "rn-material-ui-textfield";
import Button from "../components/Button";
import useStorage from "../hooks/useStorage";
import { ACTIONS } from "../utils/actions";

const Login = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({});

  const { storage, dispatch } = useStorage();

  // Handle Login
  const handleLogin = () => {
    // Login logic here
    if (!email || !password) {
      Alert.alert("Caution!", "Please fill in all the fields");
      return;
    }

    // function to check if email is in the storage
    const containsObj = (_email, list) => {
      return list.some(
        (elem) => elem.email.toLowerCase() === _email.toLowerCase()
      );
    };

    // check if email exists in storage
    storage
      .getAllDataForKey("user")
      .then((users) => {
        if (users.length <= 0) {
          // user does not exist - tell user to register/try again
          setErrors((prev) => ({
            ...prev,
            emailError:
              "User does not exist. Register or check your credentials and try again",
          }));
        } else {
          if (containsObj(email, users)) {
            // Email is present, validate passord
            const currentUser = users.filter(
              (user) => user.email.toLowerCase() == email.toLowerCase()
            )[0];

            if (currentUser.password !== password) {
              setErrors({ ...errors, passError: "Invalid password!" });
              return;
            }

            dispatch({ type: ACTIONS.currentUser, payload: email });
            navigation.navigate("Income");
          } else {
            // User does not exists
            setErrors({ ...errors, emailError: "Email does not exist" });
            return;
          }
        }
      })
      .catch((err) => console.log("Error: ", err));
  };

  return (
    <View style={tw`flex-1`}>
      <ScrollView>
        <Image
          source={require("../../assets/icon.png")}
          style={[tw`self-center my-6`, { height: 171, width: 171 }]}
        />

        {/* Form input fields */}
        <View style={tw`px-4 py-6`}>
          <TextField
            label="Email"
            value={email}
            error={errors?.emailError}
            onChangeText={(text) => {
              setErrors((prev) => ({ ...prev, emailError: null }));
              setEmail(text);
            }}
          />
          <TextField
            label="Password"
            value={password}
            error={errors?.passError}
            secureTextEntry
            onChangeText={(text) => {
              setErrors((prev) => ({ ...prev, passError: null }));
              setPassword(text);
            }}
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
      </ScrollView>
    </View>
  );
};

export default Login;
