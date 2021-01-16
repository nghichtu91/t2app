// #region Global Imports
import * as React from "react";
import styled from "styled-components/native";
import { StyleSheet } from "react-native";
import Svg, { Text } from "react-native-svg";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
// #endregion Global Imports

// #region Local Imports
import { Container, SafeArea } from "@Styled";
import { MainButton } from "../../src/shared/components/button";
import {
  Description,
  BodyRegular,
  BodyMedium,
} from "../../src/shared/components/text";
// #endregion Local Imports

type ProfileScreenNavigationProp = StackNavigationProp<any>;

type GetStaredProps = {
  navigation: ProfileScreenNavigationProp;
};

const GetStared = (_props: GetStaredProps) => {
  const logo = require("../../static/images/bg/logo.png");
  const bgStart = require("../../static/images/bg/start.png");
  const navigation = useNavigation();
  const goToLoginScreen = () => navigation.navigate("LoginScreen");

  return (
    <ImageBackground style={styles.image} source={bgStart}>
      <SafeArea>
        <BN>
          <Header>
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
            <SubTitle> Find your best place for... </SubTitle>
          </Header>
          <ContainerFooter>
            <MainButton>Get started</MainButton>
          </ContainerFooter>
          <ContainerHaveAccount>
            <HaveAccountText>Already have an account?</HaveAccountText>
            <LoginButton activeOpacity={0.9} onPress={goToLoginScreen}>
              <LoginText>Log in</LoginText>
            </LoginButton>
          </ContainerHaveAccount>
        </BN>
      </SafeArea>
    </ImageBackground>
  );
};

export const BN = styled(Container)`
  padding-left: 24px;
  padding-right: 24px;
`;

export default GetStared;

const ImageBackground = styled.ImageBackground`
  flex: 1;
  resize-mode: cover;
  justify-content: center;
`;

const Logo = styled.Image`
  width: 75px;
  height: 75px;
  margin: 0 auto;
  margin-bottom: 6px;
`;

const Header = styled(Container)`
  color: #ffffff;
  flex-direction: column;
  margin: 44px auto;
  align-items: center;
  flex: 21;
`;
const SubTitle = styled(Description)`
  color: #ffffff;
`;

const ContainerFooter = styled(Container)`
  margin: 0 auto;
  justify-content: center;
  flex-direction: row;
  align-items: flex-end;
  flex: 2;
`;

const ContainerHaveAccount = styled.View`
  flex-direction: row;
  align-items: flex-end;
  justify-content: center;
  flex: 1;
`;

const HaveAccountText = styled(BodyRegular)`
  color: #ffffff;
`;

const LoginButton = styled.TouchableOpacity`
  margin-left: 2px;
  color: #fff;
`;

const LoginText = styled(BodyMedium)`
  color: #2d9cdb;
`;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 42,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000a0",
  },
});
