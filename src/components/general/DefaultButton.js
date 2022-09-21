import styled from "styled-components";

const StyledButton = styled.button`
  background-color: ${(props) => props.theme.colors.LightBlue};
  width: 250px;
  height: 80px;
  max-width: 80vw;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  font-size: 36px;
  border-radius: 50px;
  border: none;
  box-shadow: ${(props) => props.theme.shading.BoxShadow};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.LightYellow};
  }
`;

export default function DefaultButton(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}
