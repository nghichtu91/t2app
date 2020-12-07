// #region Global Imports
import * as React from "react";
import styled from "styled-components/native";
// #endregion Global Imports

// #region Local Imports
import { Container } from "@Styled";
import {
  MainButton,
  AdditionalButton,
} from "../../src/shared/components/button";
import {
  Title,
  Description,
  BodyMedium,
  BodyRegular,
  BodyRegular12,
} from "../../src/shared/components/text";
// #endregion Local Imports

const StyleGuide = () => {
  return (
    <GuideContainer>
      <Title> H1 28px (extrabold) </Title>
      <Description> Description 16 px (medium) </Description>
      <BodyMedium> Body 14px (medium) </BodyMedium>
      <BodyRegular> Body 14px (regular) </BodyRegular>
      <BodyRegular12> Body 12px (medium) </BodyRegular12>
      <MainButton> Get started </MainButton>
      <AdditionalButton> Create account</AdditionalButton>
    </GuideContainer>
  );
};

export const GuideContainer = styled(Container)`
  background-color: #e5e5e5;
  padding-left: 24px;
  padding-right: 24px;
`;

export default StyleGuide;
