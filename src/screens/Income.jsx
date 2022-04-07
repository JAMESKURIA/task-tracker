import { View, Text, Image, ScrollView, Alert } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import { TextField } from "rn-material-ui-textfield";
import Button from "../components/Button";
import uuid from "uuid-random";
import useStorage from "../hooks/useStorage";
import { ACTIONS } from "../utils/actions";

const Income = ({ navigation }) => {
  const [username, setUsername] = React.useState("");
  const [income, setIncome] = React.useState();
  const { storage, state, dispatch } = useStorage();

  React.useEffect(() => {
    setUsername(state.username);
    setIncome(state.income);
  }, [state]);

  // Handle save
  const handleSave = () => {
    // save logic here

    if (!username || !income) {
      Alert.alert("Caution!", "Please fill in all the fields");
      return;
    }

    // function to check if email is in the storage
    const containsObj = (_email, list) => {
      return list.some(
        (elem) => elem?.email?.toLowerCase() === _email?.toLowerCase()
      );
    };

    // Save item function
    const saveItem = () => {
      storage.save({
        key: "income",
        id: `${uuid()}`,
        data: {
          email: state.email,
          income,
          username,
        },
      });

      Alert.alert("Success!", `Successfuly added`, [
        {
          text: "Ok",
          onPress: () => {
            dispatch({
              type: ACTIONS.income,
              payload: { username, income },
            });

            navigation.navigate("AddExpense");
          },
          style: "OK",
        },
      ]);
    };

    storage
      .getAllDataForKey("income")
      .then((incomes) => {
        if (incomes.length <= 0) {
          saveItem();
        } else {
          if (!containsObj(state.email, incomes)) {
            saveItem();
          } else {
            console.log("Update here!");

            // User already exists - TODO: update
            // return;
          }
        }
      })
      .catch((err) => console.log("Error: ", err));

    // navigation.navigate("AddExpense");
  };

  // Handle cancel
  const handleCancel = () => {
    // cancel logic here
    navigation.navigate("AddExpense");
  };

  return (
    <View style={tw`flex-1`}>
      <ScrollView>
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
            onChangeText={(text) => setIncome(text)}
            keyboardType="number-pad"
          />
          {/* Button Incomes */}
          <View style={tw`mt-20  mx-4`}>
            <Button text="save" style={tw`mb-4`} onPress={handleSave} />
            <Button text="cancel" onPress={handleCancel} />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Income;
