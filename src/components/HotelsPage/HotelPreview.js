import LoadingWheel from "../general/LoadingWheel";
import {
  StyledHotels,
  StyledTop,
  StyledImage,
  StyledBottom,
  StyledFirstLetter,
  StyledRestLetter,
} from "./HotelPreviewStyle";

export default function HotelPreview({data}) {

  return data.length > 0 ? (
    data.map((hotel, key) => {
      const FirstLetter = hotel.attributes.name.charAt(0);
      const PropsText = hotel.attributes.name.slice(1);

      return (
        <StyledHotels key={key} to={`/hotel/${hotel.id}`}>
          <StyledTop>
            <StyledFirstLetter>{FirstLetter}</StyledFirstLetter>
            <StyledRestLetter>{PropsText}</StyledRestLetter>
          </StyledTop>
          <StyledImage
            style={{
              backgroundImage: `url(${hotel.attributes.hero.data.attributes.formats.small.url})`
            }}
          ></StyledImage>
          <StyledBottom>
            <div>{"STARS"}</div>
            <div>{hotel.attributes.price}</div>
          </StyledBottom>
        </StyledHotels>
      );
    })
  ) : (
    <LoadingWheel />
  );
}
