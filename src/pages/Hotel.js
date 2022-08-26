import styled from "styled-components";
import { useParams } from "react-router-dom";

import { useContext } from "react";
import ApiContext from "../context/ApiContext";


const StyledHotelContainer = styled.div`
margin: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

const StyledHero = styled.div`
background-position: center;
background-size: cover;
width: 600px;
max-width: 100%;
height: 400px;
border-radius: 50px;
`

const StyledCarousel = styled.div`
display: flex;

`

const StyledImageCarousel = styled.div`
width: 200px;
height: 200px;
margin: 10px auto;
`

const StyledDescription = styled.div`
width: 400px;
max-width: 95%;
margin: 0 auto;
height: 200px;
border-radius: 50px;
padding: 20px;
background-color: white;
`

const StyledFacilitiesContainer = styled.div`

`

const StyledPrice = styled.div`

`

const StyledOrderButton = styled.button`

`

export default function Hotel() {
const [apiData] = useContext(ApiContext)
const { id } = useParams()
const thisHotel = apiData.filter(item => item.id === parseInt(id))


const hotelImages = thisHotel[0].attributes.images.data.map(item => {
  return item
})

const handleOrderHotel = () => {

}

return (
      thisHotel.length > 0 ? <StyledHotelContainer>
        <StyledHero style={{
              backgroundImage: `url(${thisHotel[0].attributes.hero.data.attributes.formats.medium.url})`
            }} />
            <StyledCarousel>
                <StyledImageCarousel style={{
                  backgroundImage: `url(${hotelImages[0].attributes.formats.medium.url})`
                }}></StyledImageCarousel>
            </StyledCarousel>
        <StyledDescription>{thisHotel[0].attributes.description}</StyledDescription>
        <StyledFacilitiesContainer></StyledFacilitiesContainer>
        <StyledPrice>{thisHotel[0].attributes.price}</StyledPrice>
        <StyledOrderButton onClick={handleOrderHotel}>ORDER THIS HOTEL</StyledOrderButton>
      </StyledHotelContainer> : ""
        )
}