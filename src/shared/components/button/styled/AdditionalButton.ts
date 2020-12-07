import styled from "styled-components/native";
import { ButtonStyled } from "./Button";

export const AdditionalButtonStyled = styled(ButtonStyled)`
  background-color: ${(p) => p.theme.colors.buttonAdditional};
  width: 100%;
  border: 1px solid #fff;
  /* box-sizing: border-box; */
`;
