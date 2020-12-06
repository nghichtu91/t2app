import React from "react";
import { ButtonProps } from "@ant-design/react-native/es/button";
import { AdditionalButtonStyled } from "../styled/AdditionalButton";

export const AdditionalButton: React.FC<ButtonProps> = (props) => {
  return (
    <AdditionalButtonStyled activeOpacity={0.9} {...props}>
      {props.children}
    </AdditionalButtonStyled>
  );
};
