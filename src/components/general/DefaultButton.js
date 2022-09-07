import styled from "styled-components";

const StyledButton = styled.button`
<<<<<<< HEAD
  background-color: ${(props) => props.theme.colors.LightBlue};
  width: 250px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px auto;
  font-size: 36px;
  border-radius: 50px;
  border: none;
  box-shadow: ${(props) => props.theme.shading.BoxShadowInset};
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.colors.LightYellow};
  }
`;

export default function DefaultButton(props) {
  return <StyledButton>{props.children}</StyledButton>;
}
=======
background-color: ${props => props.theme.colors.LightBlue};
width: 250px;
height: 80px;
display: flex;
justify-content: center;
align-items: center;
margin: 20px auto;
font-size: 36px;
border-radius: 50px;
border: none;
box-shadow: ${props => props.theme.shading.BoxShadowInset};
cursor: pointer;

&:hover {
    background-color: ${props => props.theme.colors.LightYellow};
}
`

export default function DefaultButton(props) {
    return <StyledButton>{props.children}</StyledButton>
}
>>>>>>> e3ef20bba6e6e8665ebd60adc5001051a363fa24