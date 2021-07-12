// #region Global Imports
import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { InputItem, WhiteSpace, Flex } from "@ant-design/react-native";
import Icon from "react-native-vector-icons/Fontisto";
import { CognitoHostedUIIdentityProvider } from "@aws-amplify/auth/lib/types";

import { KeyboardAvoidingView, Platform, Keyboard, Text } from "react-native";
// #endregion Global Imports

// #region Local Imports
import { Container } from "@Styled";

import {
  MainButton,
  AdditionalButton,
} from "../../src/shared/components/button";

import {
  BodyRegular,
  BodyMedium,
  Title,
} from "../../src/shared/components/text";
import { moderateScale, verticalScale } from "../../src/shared/utils/scaleUtil";
import { Layout } from "../../src/shared/layout/index";
import { Auth } from "aws-amplify";

// #endregion Local Imports

const LoginScene = () => {
  const [isKeyboardShow, setIsKeyboardShow] = useState(false);

  useEffect(() => {
    Keyboard.addListener("keyboardDidShow", _keyboardDidShow);
    Keyboard.addListener("keyboardDidHide", _keyboardDidHide);
    return () => {
      Keyboard.removeListener("keyboardDidShow", _keyboardDidShow);
      Keyboard.removeListener("keyboardDidHide", _keyboardDidHide);
    };
  });

  const _keyboardDidShow = () => {
    if (!isKeyboardShow) {
      setIsKeyboardShow(true);
    }
  };

  const _keyboardDidHide = () => {
    if (isKeyboardShow) {
      setIsKeyboardShow(false);
    }
  };

  return (
    <Layout>
      <BN behavior={Platform.OS === "ios" ? "padding" : "height"}>
        <Header>
          <WhiteSpace style={{ height: verticalScale(44) }} />
          <Flex justify="center">
            <TitleLogin> Login </TitleLogin>
          </Flex>
          <WhiteSpace style={{ height: verticalScale(32) }} />
          <Flex justify="between">
            <FBLoginButton
              onPress={() =>
                Auth.federatedSignIn({
                  provider: CognitoHostedUIIdentityProvider.Facebook,
                })
              }>
              <Icon size={18} name="facebook" />
              <ButtonLabel>Facebook</ButtonLabel>
            </FBLoginButton>
            <GGLoginButton
              onPress={() =>
                Auth.federatedSignIn({
                  provider: CognitoHostedUIIdentityProvider.Google,
                })
              }>
              <Icon size={18} name="google" />
              <ButtonLabel>Google</ButtonLabel>
            </GGLoginButton>
          </Flex>
          <WhiteSpace style={{ height: verticalScale(40) }} />
          <Flex justify="center">
            <LoginWithEmail> or log in with email </LoginWithEmail>
          </Flex>
        </Header>
        <Content>
          <FormLogin>
            <Flex>
              <InputItem
                styles={{
                  container: {
                    padding: 0,
                    height: "auto",
                    marginLeft: 0,
                    paddingRight: 0,
                    backgroundColor: "#fff",
                    borderRadius: moderateScale(16),
                    width: "100%",
                  },
                  input: {
                    marginLeft: moderateScale(24),
                    marginVertical: verticalScale(5),
                    fontSize: moderateScale(14),
                    fontFamily: "Montserrat-Regular",
                    color: "rgba(3, 25, 37, 0.5)",
                    letterSpacing: -0.32,
                    marginRight: 35,
                  },
                }}
                type="email-address"
                last
                placeholder="Your email"
                extra={
                  <Icon
                    style={{ marginRight: 12 }}
                    color="#219653"
                    size={18}
                    name="check"
                  />
                }
              />
            </Flex>
            <WhiteSpace style={{ height: verticalScale(20) }} />
            <Flex>
              <InputItem
                styles={{
                  container: {
                    padding: 0,
                    height: "auto",
                    marginLeft: 0,
                    paddingRight: 0,
                    backgroundColor: "#fff",
                    borderRadius: moderateScale(16),
                    width: "100%",
                  },
                  input: {
                    marginLeft: moderateScale(24),
                    marginVertical: verticalScale(5),
                    fontSize: moderateScale(14),
                    fontFamily: "Montserrat-Regular",
                    color: "rgba(3, 25, 37, 0.5)",
                    letterSpacing: -0.32,
                    marginRight: 35,
                  },
                }}
                last
                type="password"
                placeholder="Password"
                extra={
                  <Icon
                    style={{ marginRight: 12 }}
                    color="#219653"
                    size={18}
                    name="eye"
                  />
                }
              />
            </Flex>
            <WhiteSpace size="lg" />
            <Flex justify="end">
              <BodyRegular style={{ color: "#fff" }}>
                Forgot password?
              </BodyRegular>
            </Flex>
            <WhiteSpace size="xl" />
            <MainButton>
              <BodyMedium>Log In</BodyMedium>
            </MainButton>
          </FormLogin>
        </Content>
        {!isKeyboardShow ? (
          <ContainerFooter>
            <Flex justify="center">
              <LoginWithEmail> Don’t have an account? </LoginWithEmail>
            </Flex>
            <AdditionalButton>
              <BodyMedium>Sign up</BodyMedium>
            </AdditionalButton>
          </ContainerFooter>
        ) : (
          <ContainerFooter>
            <Text> </Text>
          </ContainerFooter>
        )}
        {/* <ContainerFooter>
            <Flex justify="center">
              <LoginWithEmail> Don’t have an account? </LoginWithEmail>
            </Flex>
            <AdditionalButton>
              <BodyMedium>Sign up</BodyMedium>
            </AdditionalButton>
          </ContainerFooter> */}
      </BN>
    </Layout>
  );
};

export default LoginScene;

export const BN = styled(KeyboardAvoidingView)`
  padding-left: ${moderateScale(24)}px;
  padding-right: ${moderateScale(24)}px;
  background-color: ${(p) => p.theme.colors.mainBackground};
  flex: 1;
  justify-content: center;
`;

const FormLogin = styled(Container)``;

const TitleLogin = styled(Title)`
  color: ${(p) => p.theme.colors.text};
  text-shadow: none;
  /* margin-bottom: 24px; */
`;
const FBLoginButton = styled(MainButton)`
  flex: 1;
  margin-right: 7px;
`;

const ButtonLabel = styled(BodyMedium)`
  color: ${(p) => p.theme.colors.text};
`;

const GGLoginButton = styled(MainButton)`
  flex: 1;
  margin-left: 7px;
`;

const LoginWithEmail = styled(BodyRegular)`
  color: rgba(255, 255, 255, 0.5);
  margin-bottom: 24px;
`;

const Header = styled(Container)`
  color: #ffffff;
  flex: 1;
  /* background-color: #fff */
`;
const Content = styled(Container)`
  /* background-color: #eee */
`;

const ContainerFooter = styled(Container)`
  justify-content: center;
  flex: 0.5;
`;
