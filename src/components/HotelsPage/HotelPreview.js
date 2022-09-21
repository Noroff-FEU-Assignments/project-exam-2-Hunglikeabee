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
import ShowStarsRating from './../general/ShowStarsRating';
import { useContext, useState } from "react";
import AuthContext from "../../context/AuthContext";
import { StyledClose } from "../AdminPage/StyledAdminMessages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { APIURL } from "../../constants/APIURL";
import axios from "axios";
import { StyledPrompt } from "../AdminPage/StyledAdminMessages";
import SubheadingStyle from "../general/SubheadingStyle";
import DefaultButton from "../general/DefaultButton";
import { Navigate, useNavigate } from "react-router-dom";

export default function HotelPreview({data}) {

  const [auth, setAuth] = useContext(AuthContext);

  const [showPrompt, setPromptShow] = useState(false);
  const [hotelId, setHotelId] = useState(null);

  const promptModal = (id) => {
    setPromptShow(true);
    setHotelId(id);
  };

  const handleAccept = () => {
    handleDelete(hotelId);
    setPromptShow(false);
  };

  const handleCancel = () => {
    setPromptShow(false);
  };

  const navigate = useNavigate();

  const messagesApi = APIURL + "api/hotels/";
  const handleDelete = (hotelId) => {
    const deleteApi = messagesApi + hotelId;
    const tryDelete = async () => {
      try {
        const response = await axios.delete(deleteApi, {
          headers: {
            Authorization: `Bearer ${auth}`,
          },
        });
        console.log(response);
      } catch (e) {
        console.log(e);
      } finally {
        navigate("/")
      }
    };
    tryDelete();
  };

  const promptDelete = (
    <StyledPrompt role="alert">
      <SubheadingStyle>Delete?</SubheadingStyle>
      <div>
        <DefaultButton onClick={() => handleAccept(hotelId)}>
          Accept
        </DefaultButton>
        <DefaultButton onClick={() => handleCancel()}>Cancel</DefaultButton>
      </div>
    </StyledPrompt>
  );

  return data.length > 0 ? (
    data.map((hotel, key) => {
      const FirstLetter = hotel.attributes.name.charAt(0);
      const PropsText = hotel.attributes.name.slice(1);

      return (
        <StyledHotelsContainer>
          {showPrompt ? promptDelete : ""}
              <StyledHotels key={key} to={`/hotel/${hotel.id}`}>
          <StyledTop>
            <StyledFirstLetter>{FirstLetter}</StyledFirstLetter>
            <StyledRestLetter>{PropsText}</StyledRestLetter>
          </StyledTop>
          <StyledImage
            style={{
              backgroundImage: `url(${hotel.attributes.hero.data ? hotel.attributes.hero.data.attributes.formats.small.url : ""})`
            }}
          ></StyledImage>
          <StyledBottom>
            <div>
              {ShowStarsRating(hotel.attributes.rating)}
            </div>
            <div>{hotel.attributes.price}</div>
          </StyledBottom>

        </StyledHotels>
        {auth ? (<StyledClose>
                    <FontAwesomeIcon
                      onClick={() => promptModal(hotel.id)}
                      icon={faTrashCan}
                    />
                  </StyledClose> ) : ""}
      </StyledHotelsContainer>


      );
    })
  ) : (
    <LoadingWheel />
  );
}
