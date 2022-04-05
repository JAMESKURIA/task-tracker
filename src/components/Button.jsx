import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const Button = ({ text, style, onPress }) => {
  return (
    <TouchableOpacity
      style={[
        tw`bg-black w-full py-4 rounded-lg ${
          text.toLowerCase() === "cancel" && "bg-transparent border border-2 "
        }`,
        { ...style },
      ]}
      onPress={onPress}
    >
      <Text
        style={tw`text-white uppercase text-center  ${
          text.toLowerCase() === "cancel" && "text-black font-bold"
        }`}
      >
        {text}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;
