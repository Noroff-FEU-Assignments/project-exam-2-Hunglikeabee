import HeadingH1Style from "../general/HeadingH1Style";
import { StyledHeroContainer, StyledHero } from "./StyledHeroImage";

export default function Hero(props) {
  return (
    <StyledHeroContainer>
      <StyledHero {...props}></StyledHero>
      <HeadingH1Style position="absolute" offsetRight="30%">
        {props.hotelName}
      </HeadingH1Style>
    </StyledHeroContainer>
  );
}
