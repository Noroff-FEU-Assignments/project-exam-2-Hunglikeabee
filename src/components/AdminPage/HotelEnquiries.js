import ApiContext from "../../context/ApiContext";
import { useContext, useEffect, useState } from "react";
import { NavLink, useParams } from "react-router-dom";
import {
  StyledSingleContainer,
  StyledName,
  StyledDate,
  StyledEmail,
  StyledMessagesContainer,
} from "./StyledAdminMessages";
import moment from "moment";
import Subheading from "../general/Subheading";
import { StyledHotelMessagesContainer } from "./StyledHotelEnquiries";
import HeadingH1Style from "../general/HeadingH1Style";
import useCheckAuth from "../../hooks/useCheckAuth";
import GetHotelApi from "../../hooks/useApiCall";

export default function HotelEnquiries() {
  GetHotelApi();
  useCheckAuth();
  const [apiData] = useContext(ApiContext);
  const { id } = useParams();
  const [hotelMessages, setMessages] = useState([]);
  const [hotelName, setHotelName] = useState("Unnamed");

  useEffect(() => {
    if (id) {
      const getHotel = apiData.filter(
        (hotel) => parseInt(hotel.id) === parseInt(id)
      );
      setHotelName(getHotel[0].attributes.name);
      setMessages(getHotel[0].attributes.enquiries.data);
    }
  }, [id]);

  return (
    <>
      <HeadingH1Style>Hotel messages</HeadingH1Style>
      <StyledMessagesContainer>
        {id ? (
          <>
            <Subheading>{hotelName ? hotelName : "Unnamed"}</Subheading>
            {hotelMessages.length > 0 ? (
              hotelMessages
                .map((item, key) => {
                  return (
                    <StyledSingleContainer key={key}>
                      <StyledName>Name: {item.attributes.name}</StyledName>
                      <StyledDate>
                        Recieved:{" "}
                        {moment(item.attributes.createdAt).format(
                          "MMMM Do YYYY"
                        )}
                      </StyledDate>
                      <StyledDate>
                        Stay from:{" "}
                        {moment(item.attributes.from).format("MMMM Do YYYY")}
                      </StyledDate>
                      <StyledDate>
                        Stay to:{" "}
                        {moment(item.attributes.to).format("MMMM Do YYYY")}
                      </StyledDate>
                      <StyledEmail>Email: {item.attributes.email}</StyledEmail>
                    </StyledSingleContainer>
                  );
                })
                .reverse()
            ) : (
              <StyledSingleContainer>No messages</StyledSingleContainer>
            )}
          </>
        ) : (
          <StyledHotelMessagesContainer>
            {apiData.map((item, key) => {
              const id = `${item.id}`;
              return (
                <NavLink key={key} to={id}>
                  {item.attributes.name}
                </NavLink>
              );
            })}
          </StyledHotelMessagesContainer>
        )}
      </StyledMessagesContainer>
    </>
  );
}
