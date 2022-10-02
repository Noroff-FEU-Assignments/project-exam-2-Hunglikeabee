import styled from "styled-components";

export const StyledOrderContainer = styled.form`
  background-color: white;
  box-shadow: ${(props) => props.theme.shading.BoxShadow};
  z-index: 9001;
  top: 180px;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  max-width: 99%;
  flex-direction: column;
  padding: 20px 0px;
  border-radius: 50px;
`;
