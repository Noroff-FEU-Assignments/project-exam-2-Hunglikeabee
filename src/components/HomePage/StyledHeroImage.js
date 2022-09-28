import styled from "styled-components";

export const StyledHeroContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: end;
  height: 450px;
  width: 100%;
  max-width: 800px;
  margin: 0px auto;
  @media (max-width: 600px) {
    height: 400px;
  }
`;

export const StyledHero = styled.div`
  background-size: cover;
  background-position: center;
  height: 400px;
  width: 600px;
  border-radius: 50px;
  margin-right: 10px;
  margin-left: 10px;
  box-shadow: ${(props) => props.theme.shading.BoxShadow};

  @media (max-width: 600px) {
    border-radius: 0px;
    margin: 0;
    height: 350px;
  }
`;
