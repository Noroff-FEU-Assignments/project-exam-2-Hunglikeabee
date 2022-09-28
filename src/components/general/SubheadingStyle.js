import styled from "styled-components";

export const StyledHeading = styled.div`
  font-size: 26px;
  max-width: 90vw;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  white-space: nowrap;
  overflow: hidden;
  margin: 0 auto;

  @media (max-width: 600px) {
    font-size: 20px;
  }

  @media (max-width: 300px) {
    font-size: 16px;
  }
`;

export const StyledFirstLetter = styled.h2`
  color: ${(props) => props.theme.colors.LightPink};
`;

export const StyledRestLetter = styled.h2`
  color: ${(props) => props.theme.colors.White};
`;