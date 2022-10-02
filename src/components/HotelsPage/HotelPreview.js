import LoadingWheel from "../general/LoadingWheel";
import {
  StyledHotelsContainer,
  StyledHotels,
  StyledTop,
  StyledImage,
  StyledBottom,
  StyledFirstLetter,
  StyledRestLetter,
} from "./HotelPreviewStyle";
import ShowStarsRating from "../general/ShowStarsRating";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import DeleteButton from "../general/DeleteButton";

export default function HotelPreview({ data }) {
  const [auth] = useContext(AuthContext);

  return data.length > 0 ? (
    data.map((hotel, key) => {
      const FirstLetter = hotel.attributes.name.charAt(0);
      const PropsText = hotel.attributes.name.slice(1);

      return (
        <StyledHotelsContainer key={key}>
          <StyledHotels to={`/hotel/${hotel.id}`}>
            <StyledTop>
              <StyledFirstLetter>{FirstLetter}</StyledFirstLetter>
              <StyledRestLetter>{PropsText}</StyledRestLetter>
            </StyledTop>
            <StyledImage
              alt={hotel.attributes.altText}
              src={
                hotel.attributes.hero.data
                  ? hotel.attributes.hero.data.attributes.formats.small.url
                  : ""
              }
            ></StyledImage>
            <StyledBottom>
              <div>{ShowStarsRating(hotel.attributes.rating)}</div>
              <div>{hotel.attributes.price}</div>
            </StyledBottom>
          </StyledHotels>
          {auth ? (
            <DeleteButton endpoint="api/hotels/" itemId={hotel.id} />
          ) : (
            ""
          )}
        </StyledHotelsContainer>
      );
    })
  ) : (
    <LoadingWheel />
  );
}
