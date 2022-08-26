import DefaultButton from "../components/general/DefaultButton"
import HeadingH1Style from "../components/general/HeadingH1Style"
import Paragraph from "../components/general/Paragraph"
import SearchBar from "../components/general/SearchBar"
import Hero from "../components/HomePage/HeroImage"
import HotelPreview from "../components/HotelsPage/HotelPreview"

export default function Home(props) {
    return(
        <>
        <HeadingH1Style>holidaze your life</HeadingH1Style>
        <SearchBar />
        <Paragraph>Where your dreams and our vision meet!</Paragraph>
        <Hero></Hero>
        <DefaultButton>HEY</DefaultButton>
        <HotelPreview />
        </>

    )
}