import styled from "styled-components";

export const StyledDelete = styled.div`
  position: absolute;
  top: -15px;
  right: 10px;
  margin: 10px;
  cursor: pointer;
  background-color: ${(props) => props.theme.colors.White};
  border-radius: 50px;
  padding: 10px;
  box-shadow: ${(props) => props.theme.shading.BoxShadow};
  transition: 0.2s ease-in-out;

  & svg {
    height: 25px;
    width: 25px;
    color: ${(props) => props.theme.colors.LightPink};
  }

  &:hover {
    padding: 15px;
    margin: 5px;
  }
  &:hover svg {
    color: green;
  }
`;

export const StyledPrompt = styled.div`
  border-radius: 50px;
  position: fixed;
  z-index: 100;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  max-width: 95vw;
  max-height: 80vh;
  background-color: ${(props) => props.theme.colors.Black};
  box-shadow: ${(props) => props.theme.shading.BoxShadow};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
