import styled from "styled-components";

const StyledHeading = styled.div`
  font-size: 26px;
  max-width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: 600px) {
    font-size: 20px;
  }

  @media (max-width: 300px) {
    font-size: 16px;
  }
`;

const StyledFirstLetter = styled.h2`
  color: ${(props) => props.theme.colors.LightPink};
`;

const StyledRestLetter = styled.h2`
  color: ${(props) => props.theme.colors.White};
`;

export default function SubheadingStyle(props) {
  const FirstLetter = props.children.charAt(0);
  const PropsText = props.children.slice(1);

  return (
    <StyledHeading {...props}>
      <StyledFirstLetter>{FirstLetter}</StyledFirstLetter>
      <StyledRestLetter>{PropsText}</StyledRestLetter>
    </StyledHeading>
  );
}
