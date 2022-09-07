import DefaultButton from "../components/general/DefaultButton"
import HeadingH1Style from "../components/general/HeadingH1Style"
import Paragraph from "../components/general/Paragraph"
import SearchBar from "../components/general/SearchBar"
import Hero from "../components/HomePage/HeroImage"
import HotelPreview from "../components/HotelsPage/HotelPreview"
<<<<<<< HEAD
import { useContext } from "react"
import ApiContext from "../context/ApiContext"


export default function Home(props) {

    const [apiData] = useContext(ApiContext)

=======

export default function Home(props) {
>>>>>>> e3ef20bba6e6e8665ebd60adc5001051a363fa24
    return(
        <>
        <HeadingH1Style>holidaze your life</HeadingH1Style>
        <SearchBar />
        <Paragraph>Where your dreams and our vision meet!</Paragraph>
        <Hero></Hero>
        <DefaultButton>HEY</DefaultButton>
<<<<<<< HEAD
        <HotelPreview data={apiData} />
=======
        <HotelPreview />
>>>>>>> e3ef20bba6e6e8665ebd60adc5001051a363fa24
        </>

    )
}