import styled from "styled-components/native";
import { ButtonStyled } from "./Button";
import { Description } from "../../text";

export const DescriptionStyle = styled(Description)`
  color: ${(p) => p.theme.colors.buttonMainColor};
`;

export const MainButtonStyled = styled(ButtonStyled)`
  background-color: ${(p) => p.theme.colors.buttonMain};
  width: 100%;
`;
