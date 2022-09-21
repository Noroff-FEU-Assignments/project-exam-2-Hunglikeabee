import axios from "axios";
import { APIURL } from "../../constants/APIURL";
import AuthContext from "../../context/AuthContext";
import { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
  StyledMessagesContainer,
  StyledPrompt,
  StyledSingleContainer,
  StyledName,
  StyledDate,
  StyledEmail,
  StyledMessage,
  StyledClose,
} from "./StyledAdminMessages";
import SubheadingStyle from "./../general/SubheadingStyle";
import DefaultButton from "../general/DefaultButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import moment from "moment";
import HeadingH1Style from "./../general/HeadingH1Style";

export default function AdminMessages() {
  const navigate = useNavigate();
  const [auth, setAuth] = useContext(AuthContext);
  const [messages, setMessages] = useState([]);
  const messagesApi = APIURL + "api/contactforms/";

  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  });

  const getMessages = async () => {
    try {
      console.log("here");
      console.log(auth);
      const response = await axios.get(messagesApi, {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      });
      if (response.status === 200) {
        console.log(response.data.data);
        setMessages(response.data.data);
      }
    } catch (e) {
      console.log(e);
    } finally {
      console.log("YAY");
    }
  };

  useEffect(() => {
    getMessages();
  }, [auth]);

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
    const deleteApi = messagesApi + messageId;
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
        getMessages();
      }
    };
    tryDelete();
  };

  return (
    <>
      <HeadingH1Style>Admin messages</HeadingH1Style>
      <StyledMessagesContainer>
        {showPrompt ? promptDelete : ""}
        {messages.length > 0 ? (
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
                  <StyledClose>
                    <FontAwesomeIcon
                      onClick={() => promptModal(item.id)}
                      icon={faTrashCan}
                    />
                  </StyledClose>
                </StyledSingleContainer>
              );
            })
            .reverse()
        ) : (
          <div>No messages</div>
        )}
      </StyledMessagesContainer>
    </>
  );
}
