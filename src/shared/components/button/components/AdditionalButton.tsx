import React from "react";
import { ButtonProps } from "@ant-design/react-native/es/button";
import { AdditionalButtonStyled } from "../styled/AdditionalButton";
import { Description } from "../../text";

export const AdditionalButton: React.FC<ButtonProps> = (props) => {
  return (
    <AdditionalButtonStyled activeOpacity={0.9} {...props}>
      <Description> {props.children} </Description>
    </AdditionalButtonStyled>
  );
};
