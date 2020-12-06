import styled from "styled-components/native";
import { ButtonStyled } from "./Button";

export const MainButtonStyled = styled(ButtonStyled)`
  background-color: ${(p) => p.theme.colors.buttonMain};
  width: 100%;
`;
