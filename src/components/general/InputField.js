import styled from "styled-components";
const StyledInputField = styled.input`

width: 300px;
max-width: 80vw;
padding: 10px;
font-size: 20px;
height: 40px;
border: none;
box-shadow: ${props => props.theme.shading.BoxShadow};
`

export default function InputField(props) {
  return <StyledInputField {...props}>{props.children}</StyledInputField>
}