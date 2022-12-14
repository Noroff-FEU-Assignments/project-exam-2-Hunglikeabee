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
  font-size: 32px;
  border-radius: 50px;
  border: none;
  box-shadow: ${(props) => props.theme.shading.BoxShadow};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.LightYellow};
  }

  @media (max-width: 320px) {
    font-size: 28px;
  }
`;

export default function DefaultButton(props) {
  return <StyledButton {...props}>{props.children}</StyledButton>;
}
