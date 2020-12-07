import styled from "styled-components/native";
import { Text } from "react-native";

export const Description = styled(Text)`
  font-family: Montserrat-Medium;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${(p) => p.theme.colors.fontAdditional};
  letter-spacing: -0.32px;
`;
