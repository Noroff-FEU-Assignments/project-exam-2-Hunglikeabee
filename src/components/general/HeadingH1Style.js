import styled from "styled-components";

const StyledHeading = styled.div`
  background-color: ${(props) => props.theme.colors.LightYellow};
  font-size: 26px;
  border-radius: 50px;
  margin: 40px auto;
  max-width: 90%;
  padding: 20px;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: ${(props) => props.theme.shading.BoxShadow};
  white-space: nowrap;
  overflow: hidden;
  position: ${(props) => (props.position ? props.position : "relative")};
  right: ${(props) => (props.offsetRight ? props.offsetRight : "")};

  @media (max-width: 750px) {
    border-radius: 0 50px 50px 0;
    font-size: 18px;
    margin-left: 0px;
    left: 0%;
    position: ${(props) => (props.position ? props.position : "relative")};
  }

  @media (max-width: 300px) {
    font-size: 16px;
  }

  @media (min-width: 800px) {
  }
`;

const StyledFirstLetter = styled.h1`
  color: ${(props) => props.theme.colors.LightPink};
`;

const StyledRestLetter = styled.h1`
  color: black;
`;

export default function HeadingH1Style(props) {
  const FirstLetter = props.children.charAt(0);
  const PropsText = props.children.slice(1);

  return (
    <StyledHeading {...props}>
      <StyledFirstLetter>{FirstLetter}</StyledFirstLetter>
      <StyledRestLetter>{PropsText}</StyledRestLetter>
    </StyledHeading>
  );
}
