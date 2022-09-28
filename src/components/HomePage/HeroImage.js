import HeadingH1Style from "../general/HeadingH1Style";
import { StyledHeroContainer, StyledHero } from "./StyledHeroImage";

export default function Hero(props) {
  return (
    <StyledHeroContainer>
      <StyledHero {...props}>
        <HeadingH1Style position="absolute" offsetRight="30%">
          {props.children}
        </HeadingH1Style>
      </StyledHero>
    </StyledHeroContainer>
  );
}
