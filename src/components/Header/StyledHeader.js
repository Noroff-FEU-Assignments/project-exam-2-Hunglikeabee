import styled from "styled-components";

export const StyledMenuContainer = styled.div`
  z-index: 9002;
  height: 120px;

  background-color: ${(props) => props.theme.colors.DarkGray};
  box-shadow: ${(props) => props.theme.shading.BoxShadow};
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
`;

export const StyledMenu = styled.div`
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
`;
