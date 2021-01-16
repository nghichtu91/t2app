import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: transparent;
`;

export const SafeArea = styled.SafeAreaView`
  flex: 1;
  background: transparent;
`;

export const Scene = styled(SafeArea)`
  background-color: ${(p) => p.theme.colors.mainBackground};
`;

export const ContainerCenter = styled(Container)`
  justify-content: center;
  align-items: center;
`;
