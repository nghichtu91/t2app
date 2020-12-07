import styled from "styled-components/native";
import { Text } from "react-native";

export const Title = styled(Text)`
  font-family: Montserrat-ExtraBold;
  font-style: normal;
  font-size: 28px;
  line-height: 34px;
  color: ${(p) => p.theme.colors.fontAdditional};
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  font-weight: 800;
  letter-spacing: -0.32px;
`;
