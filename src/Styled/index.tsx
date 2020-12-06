import styled from "styled-components/native";
export const Container = styled.View`
  flex: 1;
  background-color: transparent;
  /* padding-left: 24px;
  padding-right: 24px; */
  /* padding-horizontal: 12px; */
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  /* background-color: ${(p) => p.theme.colors.mainBackground}; */
  background: transparent;
`;

export const ContainerCenter = styled(Container)`
  justify-content: center;
  align-items: center;
  /* background-color: ${(p) => p.theme.colors.mainBackground}; */
`;
