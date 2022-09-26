import ApiContext from "../../context/ApiContext";
import { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { StyledSingleContainer, StyledName, StyledDate, StyledEmail, StyledMessagesContainer } from "./StyledAdminMessages";
import moment from "moment";
import SubheadingStyle from "../general/SubheadingStyle";
import { StyledHotelMessagesContainer } from "./StyledHotelEnquiries";
import HeadingH1Style from "../general/HeadingH1Style";
import useCheckAuth from "../../hooks/useCheckAuth";
import DeleteButton from "../general/DeleteButton";

export default function HotelEnquiries() {
  const [auth] = useContext(AuthContext)
  const [apiData] = useContext(ApiContext)
  const { id } = useParams()
  const [hotelMessages, setMessages] = useState([])
  const [hotelName, setHotelName] = useState("Unnamed")

  useEffect(() => {
    if(id) {
      const getHotel = apiData.filter(hotel => parseInt(hotel.id) === parseInt(id))
      setHotelName(getHotel[0].attributes.name)
      setMessages(getHotel[0].attributes.enquiries.data)
    }
  }, [id])

  useCheckAuth()

  return (
  <>
  <HeadingH1Style>Hotel messages</HeadingH1Style>
  <StyledMessagesContainer>
    {id ? (<>
      <SubheadingStyle>{hotelName ? hotelName : "Unnamed"}</SubheadingStyle>
      {hotelMessages.length > 0 ? hotelMessages.map((item, key) => {
          return(
            <StyledSingleContainer key={key}>
                <StyledName>Name: {item.attributes.name}</StyledName>
                <StyledDate>Recieved: {moment(item.attributes.createdAt).format('MMMM Do YYYY')}</StyledDate>
                <StyledDate>Stay from: {moment(item.attributes.from).format('MMMM Do YYYY')}</StyledDate>
                <StyledDate>Stay to: {moment(item.attributes.to).format('MMMM Do YYYY')}</StyledDate>
                <StyledEmail>Email: {item.attributes.email}</StyledEmail>
                 <DeleteButton endpoint="api/enquiries/" itemId={item.id} />
            </StyledSingleContainer>
          )
          }).reverse() : <StyledSingleContainer>No messages</StyledSingleContainer>}
    </>

    ) : (
    <StyledHotelMessagesContainer>
    {apiData.map((item,key) => {
      const  id = `${item.id}`
      return <NavLink key={key} to={id}>{item.attributes.name}</NavLink>
    })
    }
    </StyledHotelMessagesContainer>
    )}
  </StyledMessagesContainer>
  </>
  )
}