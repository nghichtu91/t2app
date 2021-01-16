// #region Global Imports
import React from "react";
import styled from "styled-components/native";
import { WingBlank } from "@ant-design/react-native";
// #endregion Global Imports

// #region Local Imports
import { Scene } from "@Styled";

// #endregion Local Imports
interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Scene>
      <SceneContent>{children}</SceneContent>
    </Scene>
  );
};

export default Layout;

const SceneContent = styled(WingBlank)`
  flex: 1;
`;
