import React from "react";
import { ButtonProps } from "@ant-design/react-native/es/button";
import { AdditionalButton } from "@shared/components/button";

type socialType = "fb" | "gg" | "apple";
interface SocialButtonProps extends ButtonProps {
  typeButton: socialType;
}

export const SocialButton: React.FC<SocialButtonProps> = (props) => {
  return <AdditionalButton> Facebook </AdditionalButton>;
};
