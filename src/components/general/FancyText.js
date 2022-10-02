import styled from "styled-components";

const StyledFancyText = styled.h2`
  max-width: 600px;
  margin: 0 auto;
  text-align: ${(props) => (props.align ? props.align : "center")};
  font-family: "Cormorant", Arial, Helvetica, sans-serif;
  color: ${(props) => props.theme.colors.White};
  font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : "36px")};

  @media (max-width: 500px) {
    font-size: ${(props) =>
      props.fontSize ? parseInt(props.fontSize) * 0.7 + "px" : 36 * 0.7 + "px"};
  }
`;

export default function FancyText(props) {
  return <StyledFancyText {...props}>{props.children}</StyledFancyText>;
}
