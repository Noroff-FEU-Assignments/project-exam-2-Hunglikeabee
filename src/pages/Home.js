import Paragraph from "../components/general/Paragraph"
import SearchBar from "../components/general/SearchBar"
import Hero from "../components/HomePage/HeroImage"

export default function Home() {
    return(
        <>
        <Hero />
        <Paragraph>"Where your dreams and our vision meet!"</Paragraph>
        <SearchBar />
        </>
    )
}