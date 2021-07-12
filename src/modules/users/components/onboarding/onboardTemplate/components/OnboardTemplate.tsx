import React from "react";
import { View, Text } from "react-native";

type TemplateType = "login" | "signup";
interface OnboardTemplateProps {
  type: TemplateType;
  onSubmit: () => void;
}

export const OnboardTemplate: React.FC<OnboardTemplateProps> = () => {
  return (
    <View>
      <Text> fsfs </Text>
    </View>
  );
};
