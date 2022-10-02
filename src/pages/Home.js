import { useEffect } from "react";
import SearchBar from "../components/general/SearchBar";
import Activities from "../components/HomePage/Activities";
import Hero from "../components/general/HeroImage";
import HeroImage from "../images/herofixed.jpg";
import FancyText from "../components/general/FancyText";

export default function Home() {
  useEffect(() => {
    document.title = "Holidaze | Home";
  }, []);

  return (
    <>
      <Hero alt="Luxury hotel set in blue with a blue clody sky and a blue pool infront" hotelName="holidaze your life" src={HeroImage} />
      <SearchBar placeholder="Find accommodation..." />
      <FancyText align="left">"Where your</FancyText>
      <FancyText fontSize="50">DREAMS</FancyText>
      <FancyText align="right">and Bergen meet!"</FancyText>
      <Activities />
    </>
  );
}
