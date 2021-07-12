import styled from "styled-components/native";
import { Text } from "react-native";

export const Body = styled(Text)`
  font-style: normal;
  color: ${(p) => p.theme.colors.fontAdditional};
  letter-spacing: -0.32px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
`;
