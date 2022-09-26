import axios from "axios";
import { APIURL } from "../../constants/APIURL";
import AuthContext from "../../context/AuthContext";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledMessagesContainer,
  StyledSingleContainer,
  StyledName,
  StyledDate,
  StyledEmail,
  StyledMessage,
} from "./StyledAdminMessages";
import moment from "moment";
import HeadingH1Style from "./../general/HeadingH1Style";
import useCheckAuth from "../../hooks/useCheckAuth";
import DeleteButton from "../general/DeleteButton";

export default function AdminMessages() {
  const navigate = useNavigate();
  const [auth, setAuth] = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const messagesApi = APIURL + "api/contactforms/";

  useCheckAuth();

  const getMessages = async () => {
    try {
      const response = await axios.get(messagesApi, {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      });
      if (response.status === 200) {
        setMessages(response.data.data);
      }
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMessages();
  }, []);

  return (
    <>
      <HeadingH1Style>Admin messages</HeadingH1Style>
      <StyledMessagesContainer>
        {messages ? (
          messages
            .map((item, key) => {
              return (
                <StyledSingleContainer key={key}>
                  <StyledName>Name: {item.attributes.name}</StyledName>
                  <StyledDate>
                    {moment(item.attributes.createdAt).format(
                      "MMMM Do YYYY, h:mm:ss a"
                    )}
                  </StyledDate>
                  <StyledEmail>Email: {item.attributes.email}</StyledEmail>
                  <StyledMessage>{item.attributes.message}</StyledMessage>
                  <DeleteButton endpoint="api/contactforms/" itemId={item.id} />
                </StyledSingleContainer>
              );
            })
            .reverse()
        ) : (
          <StyledSingleContainer>No messages</StyledSingleContainer>
        )}
      </StyledMessagesContainer>
    </>
  );
}
