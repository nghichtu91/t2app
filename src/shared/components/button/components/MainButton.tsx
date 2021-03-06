import React from "react";
import { ButtonProps } from "@ant-design/react-native/es/button";
import { MainButtonStyled, DescriptionStyle } from "../styled/MainButton";
import { Button } from "@ant-design/react-native";

export const MainButton: React.FC<ButtonProps> = (props) => {
  return (
    <Button type="primary" activeOpacity={0.9} {...props}>
      <DescriptionStyle> {props.children} </DescriptionStyle>
    </Button>
  );
};
