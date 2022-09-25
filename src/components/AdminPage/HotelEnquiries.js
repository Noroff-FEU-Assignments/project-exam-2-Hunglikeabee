import ApiContext from "../../context/ApiContext";
import { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate, useParams } from "react-router-dom";
import AuthContext from "../../context/AuthContext";
import { StyledSingleContainer, StyledName, StyledDate, StyledEmail, StyledClose, StyledMessage, StyledMessagesContainer } from "./StyledAdminMessages";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { APIURL } from "../../constants/APIURL";
import SubheadingStyle from "../general/SubheadingStyle";
import DefaultButton from "../general/DefaultButton";
import { StyledPrompt } from "./StyledAdminMessages";
import axios from "axios";

import { StyledHotelMessagesContainer } from "./StyledHotelEnquiries";
import HeadingH1Style from "../general/HeadingH1Style";

export default function HotelEnquiries() {
  const [auth] = useContext(AuthContext)
  const [apiData] = useContext(ApiContext)
  const { id } = useParams()
  const navigate = useNavigate()

  const [hotelMessages, setMessages] = useState([])
  const [hotelName, setHotelName] = useState("Unnamed")

  useEffect(() => {
    if(id) {
      const getHotel = apiData.filter(hotel => parseInt(hotel.id) === parseInt(id))
      setHotelName(getHotel[0].attributes.name)
      setMessages(getHotel[0].attributes.enquiries.data)
    }
  }, [id])



  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  });


  const [showPrompt, setPromptShow] = useState(false);
  const [messageId, setMessageId] = useState(null);

  const promptModal = (id) => {
    setPromptShow(true);
    setMessageId(id);
  };

  const handleAccept = () => {
    handleDelete(messageId);
    setPromptShow(false);
  };

  const handleCancel = () => {
    setPromptShow(false);
  };

const enquiriesApi = APIURL + `api/enquiries/`
  const promptDelete = (
    <StyledPrompt role="alert">
      <SubheadingStyle>Delete?</SubheadingStyle>
      <div>
        <DefaultButton onClick={() => handleAccept(messageId)}>
          Accept
        </DefaultButton>
        <DefaultButton onClick={() => handleCancel()}>Cancel</DefaultButton>
      </div>
    </StyledPrompt>
  );

  const handleDelete = (messageId) => {
    const deleteApi = enquiriesApi + messageId;
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
      }
    };
    tryDelete();
  };


  return (
  <>
  <HeadingH1Style>Hotel messages</HeadingH1Style>
  {showPrompt ? promptDelete : ""}
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
                 <StyledClose onClick={() => promptModal(item.id)}>
                      <FontAwesomeIcon icon={faTrashCan}/>
                </StyledClose>
            </StyledSingleContainer>
          )
          }).reverse() : <div>No messages</div>}
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