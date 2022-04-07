import {
  View,
  Text,
  Image,
  TouchableOpacity,
  Alert,
  ScrollView,
} from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { TextField } from "rn-material-ui-textfield";
import Button from "../components/Button";
import useStorage from "../hooks/useStorage";
import uuid from "uuid-random";

const Register = ({ navigation }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [errors, setErrors] = React.useState({});

  const { storage } = useStorage();

  // Handle register
  const handleRegister = () => {
    // REGISTER LOGIC
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
    storage
      .getAllDataForKey("user")
      .then((users) => {
        if (users.length <= 0) {
          // save user
          storage.save({
            key: "user",
            id: `${uuid()}`,
            data: {
              email,
              password,
            },
          });
        } else {
          if (!containsObj(email, users)) {
            storage.save({
              key: "user",
              id: `${uuid()}`,
              data: {
                email,
                password,
              },
            });

            Alert.alert(
              "Success!",
              `Successfuly registered, You can now login`,
              [
                {
                  text: "Ok",
                  onPress: () => navigation.navigate("Login"),
                  style: "OK",
                },
              ]
            );
          } else {
            // User already exists
            setErrors({ ...errors, emailError: "Email already exists" });
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
        <View style={tw`px-6 py-6`}>
          <TextField
            label="Email"
            value={email}
            error={errors?.emailError}
            onChangeText={(text) => {
              setErrors({ ...errors, emailError: null });
              setEmail(text);
            }}
          />
          <TextField
            label="Password"
            value={password}
            secureTextEntry
            error={errors.passLength && errors.passLength}
            onChangeText={(text) => {
              setPassword(text);
              if (text.length < 6) {
                setErrors((prev) => ({
                  ...prev,
                  passLength:
                    "Password should have a minimum of six characters",
                }));
              } else {
                setErrors({ ...errors, passLength: null });
              }
            }}
          />
          <TextField
            label="Confirm Password"
            secureTextEntry
            onChangeText={(text) => {
              if (text !== password) {
                setErrors({ ...errors, passMatch: "Passwords do not match" });
              } else {
                setErrors({ ...errors, passMatch: null });
              }
            }}
            error={errors.passMatch}
          />

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
      </ScrollView>
    </View>
  );
};

export default Register;
