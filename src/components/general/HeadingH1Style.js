import styled from "styled-components";

const StyledHeading = styled.div`
  background-color: ${(props) => props.theme.colors.LightYellow};
  font-size: 26px;
  border-radius: 0 50px 50px 0;
  margin-top: 40px;
  padding: 0px;
  max-width: 90%;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  box-shadow: ${(props) => props.theme.shading.BoxShadowInset};
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: 500px) {
    font-size: 18px;
  }

  @media (max-width: 300px) {
    font-size: 12px;
  }

  @media (min-width: 800px) {

  }
`;

const StyledFirstLetter = styled.h1`
  color: ${(props) => props.theme.colors.LightPink};
`;

const StyledRestLetter = styled.h1`
  color: ${(props) => props.theme.colors.Black};
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
