import styled from "styled-components";

const StyledFancyText = styled.h2`
max-width: 600px;
margin: 0 auto;
text-align: ${props => props.align ? props.align : "center"};
font-family: Cormorant;
color: white;
font-size: ${props => props.fontSize ? props.fontSize : "36px"};

`

export default function FancyText(props) {
  return (
    <StyledFancyText {...props}>{props.children}</StyledFancyText>
  )
}