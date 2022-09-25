import { useEffect } from "react"
import Paragraph from "../components/general/Paragraph"
import SearchBar from "../components/general/SearchBar"
import Hero from "../components/HomePage/HeroImage"
import HeroImage from "../images/herofixed.jpg";

export default function Home() {

    useEffect(() => {
        document.title = "Holidaze | Home"
      }, [])

    return(
        <>
        <Hero style={{
          backgroundImage: `url(${HeroImage})`,
        }}>holidaze your life</Hero>
        <Paragraph>"Where your dreams and our vision meet!"</Paragraph>
        <SearchBar placeholder="Find hotel..." />
        </>
    )
}