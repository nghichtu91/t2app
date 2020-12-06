import React from "react";
import { ButtonProps } from "@ant-design/react-native/es/button";
import { MainButtonStyled } from "../styled/MainButton";

export const MainButton: React.FC<ButtonProps> = (props) => {
  return (
    <MainButtonStyled type="primary" activeOpacity={0.9} {...props}>
      {props.children}{" "}
    </MainButtonStyled>
  );
};
