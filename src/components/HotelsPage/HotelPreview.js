import LoadingWheel from "../general/LoadingWheel";
<<<<<<< HEAD
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
=======

import { StyledHotels, StyledTop, StyledImage, StyledBottom, StyledFirstLetter, StyledRestLetter } from "./HotelPreviewStyle";
import { useContext } from 'react';
import ApiContext from "../../context/ApiContext";
import { useEffect } from 'react';


export default function HotelPreview() {

    const [apiData, setApi] = useContext(ApiContext)

    return (
        apiData.length > 0 ? apiData.map((hotel, key) => {

            const FirstLetter = hotel.attributes.name.charAt(0)
            const PropsText = hotel.attributes.name.slice(1)

            return (
                <StyledHotels key={key} to="https://www.vg.no">
                    <StyledTop>
                        <StyledFirstLetter>{FirstLetter}</StyledFirstLetter>
                        <StyledRestLetter>{PropsText}</StyledRestLetter>
                    </StyledTop>
                    <StyledImage style={{"backgroundImage": `url(${hotel.attributes.hero.data.attributes.url})`}}></StyledImage>
                    <StyledBottom>
                            <div>{"STARS"}</div>
                            <div>{hotel.attributes.price}</div>
                    </StyledBottom>
                </StyledHotels>
            )
        }) : <LoadingWheel />
    )
}
>>>>>>> e3ef20bba6e6e8665ebd60adc5001051a363fa24
