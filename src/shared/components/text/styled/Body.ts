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

export const BodyMedium = styled(Body)`
  font-family: Montserrat-Medium;
`;

export const BodyRegular = styled(Body)`
  font-family: Montserrat-Regular;
  font-weight: 400;
`;

export const BodyRegular12 = styled(Body)`
  font-family: Montserrat-Regular;
  font-weight: 400;
  font-size: 12px;
  line-height: 15px;
`;
