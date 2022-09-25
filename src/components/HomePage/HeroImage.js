import HeadingH1Style from "../general/HeadingH1Style";
import styled from "styled-components";

const StyledHeroContainer = styled.div`
position: relative;
display: flex;
justify-content: end;
height: 400px;
width: 100%;
max-width: 800px;
margin: 30px auto;

`

const StyledHero = styled.div`
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
  }
`;

export default function Hero(props) {
  return (
    <StyledHeroContainer>
      <StyledHero {...props}><HeadingH1Style position="absolute" offsetRight="30%">{props.children}</HeadingH1Style></StyledHero>
    </StyledHeroContainer>
  );
}
