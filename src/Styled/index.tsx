import styled from "styled-components/native";
export const Container = styled.View`
  flex: 1;
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  /* background-color: ${(p) => p.theme.colors.mainBackground}; */
`;

export const ContainerCenter = styled(Container)`
  justify-content: center;
  align-items: center;
  /* background-color: ${(p) => p.theme.colors.mainBackground}; */
`;
