import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import ApiContext from "../context/ApiContext";
import {
  StyledHotelContainer,
  StyledHotelInfoContainer,
  StyledContainer,
  StyledTextContainer,
  StyledPrice,
  StyledDescriptionText,
} from "../components/HotelPage/StyledHotel";
import DefaultButton from "../components/general/DefaultButton";
import Hero from "../components/HomePage/HeroImage";
import Facilities from "../components/HotelPage/Facilities";
import Subheading from "../components/general/Subheading";
import ImagesCarousel from "../components/HotelPage/ImagesCarousel";
import OrderHotel from "../components/HotelPage/OrderHotel";

export default function Hotel() {
  const [apiData] = useContext(ApiContext);
  const { id } = useParams();
  const thisHotel = apiData.filter((item) => item.id === parseInt(id));
  const hotelImages = thisHotel[0].attributes.images.data.map((item) => {
    return item;
  });
  const [orderModal, setOrderModal] = useState(false);

  const handleOrderModal = () => {
    setOrderModal((prev) => !prev);
  };

  useEffect(() => {
    document.title = thisHotel[0].attributes.name;
    document.addEventListener("keydown", hideModalOnEscape, true);
  });

  const hideModalOnEscape = (e) => {
    if (e.key === "Escape") {
      setOrderModal(false);
    }
  };

  return (
    thisHotel.length > 0 && (
      <StyledHotelContainer>
        <Hero
          style={{
            backgroundImage: `url(${thisHotel[0].attributes.hero.data.attributes.formats.medium.url})`,
          }}
        >
          {thisHotel[0].attributes.name}
        </Hero>
        <ImagesCarousel images={hotelImages} />
        <StyledHotelInfoContainer>

          <StyledContainer>
            <StyledTextContainer>
            <Subheading>Information</Subheading>
              <StyledDescriptionText>
                {thisHotel[0].attributes.description}
              </StyledDescriptionText>
            </StyledTextContainer>
            <Facilities hotelId={id} />
          </StyledContainer>
          <StyledPrice>Price per night: {thisHotel[0].attributes.price},-NOK</StyledPrice>
        </StyledHotelInfoContainer>
        <DefaultButton href="#bookHotel" onClick={handleOrderModal}>
          ORDER THIS HOTEL
        </DefaultButton>
        {orderModal && <OrderHotel hotelPrice={thisHotel[0].attributes.price} handleClick={handleOrderModal} />}
      </StyledHotelContainer>
    )
  );
}
