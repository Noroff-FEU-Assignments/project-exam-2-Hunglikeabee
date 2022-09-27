import { useEffect } from "react"
import SearchBar from "../components/general/SearchBar"
import Activities from "../components/HomePage/Activities";
import Hero from "../components/HomePage/HeroImage"
import HeroImage from "../images/herofixed.jpg";
import FancyText from "../components/general/FancyText";

export default function Home() {

    useEffect(() => {
        document.title = "Holidaze | Home"
      }, [])

    return(
        <>
        <Hero style={{
          backgroundImage: `url(${HeroImage})`,
        }}>holidaze your life</Hero>
        <FancyText align="left">"Where your</FancyText>
        <FancyText fontSize="50px">DREAMS</FancyText>
        <FancyText align="right">our vision meet!"</FancyText>
        <SearchBar placeholder="Find hotel..." />
        <Activities />
        </>
    )
}