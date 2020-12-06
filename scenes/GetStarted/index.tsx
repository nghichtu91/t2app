// #region Global Imports
import * as React from "react";
import styled from "styled-components/native";
import Svg, { Text } from "react-native-svg";
// #endregion Global Imports

// #region Local Imports
import { Container } from "@Styled";
import {
  MainButton,
  AdditionalButton,
} from "../../src/shared/components/button";
// #endregion Local Imports

const GetStared = () => {
  const logo = require("../../static/images/bg/logo.png");

  return (
    <BN>
      <Title>
        <Logo source={logo} />
        <Svg height="40" width="200">
          <Text
            fill="#fff"
            stroke="#000"
            fontSize="30"
            fontWeight="bold"
            x="100"
            y="30"
            fontFamily="Montserrat"
            textAnchor="middle">
            Travel Guide
          </Text>
        </Svg>
        {/* <Slogan>
          <Svg>
            <Text fontSize="20"> Travel Guide </Text>
          </Svg>
        </Slogan> */}
        <SubSlogan> Find your best place for... </SubSlogan>
      </Title>
      <ContainerFooter>
        {/* <GetStartedBtn type="primary" activeOpacity={0.9} onPress={() => {}}>
          <SubSlogan>Get started</SubSlogan>
        </GetStartedBtn> */}
        <MainButton type="primary" activeOpacity={0.9}>
          <SubSlogan>Get started</SubSlogan>
        </MainButton>
        <AdditionalButton>
          <SubSlogan>Get started</SubSlogan>
        </AdditionalButton>
      </ContainerFooter>
      <ContainerHaveAccount>
        <HaveAccountText>Already have an account?</HaveAccountText>
        <Htcdd activeOpacity={0.9}>
          <LoginText>Log in</LoginText>
        </Htcdd>
      </ContainerHaveAccount>
    </BN>
  );
};
export const BN = styled(Container)`
  /* background-color: #bbb; */
  padding-left: 24px;
  padding-right: 24px;
`;

export default GetStared;

const Logo = styled.Image`
  /* top: 44px; */
  width: 75px;
  height: 75px;
  margin: 0 auto;
  margin-bottom: 6px;
`;

const Title = styled(Container)`
  /* justify-content: center; */
  color: #ffffff;
  flex-direction: column;
  margin: 44px auto;
  align-items: center;
  flex: 21;
`;

const Slogan = styled.Text`
  color: #ffffff;
  font-size: 28px;
  font-weight: 800;
  line-height: 34.13px;
  font-family: Montserrat;
  /* border: 1px solid #000000; */
  text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
  letter-spacing: -2px;
  /* textShadowColor:'#585858',
    textShadowOffset:{width: 5, height: 5}, */
  /* stroke-width: 1px; */
`;

const SubSlogan = styled.Text`
  color: #ffffff;
  font-size: 16px;
  line-height: 19.5px;
  font-weight: 500;
`;

const ContainerFooter = styled(Container)`
  margin: 0 auto;
  /* background-color: #000; */
  justify-content: center;
  flex-direction: row;
  align-items: flex-end;
  flex: 2;
`;

const ContainerHaveAccount = styled.View`
  /* margin: 20px auto; */
  /* background-color: #000; */
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  /* margin-top: 20px; */
  /* margin-bottom: 49px; */
  flex: 1;
`;

const Htcdd = styled.TouchableOpacity`
  margin-left: 2px;
  color: #fff;
`;

const LoginText = styled.Text`
  font-size: 14px;
  line-height: 17px;
  color: #2d9cdb;
  align-items: flex-end;
  font-family: Montserrat-Medium;
`;

const HaveAccountText = styled.Text`
  font-weight: 500;
  color: #fff;
  font-size: 14px;
  line-height: 17px;
  font-family: Montserrat-Regular;
`;
