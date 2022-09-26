import { APIURL } from "../../constants/APIURL";
import AuthContext from "../../context/AuthContext";
import { useState, useContext } from "react";
import axios from "axios";
import { StyledDelete, StyledPrompt } from "./StyledDeleteButton";
import SubheadingStyle from "./SubheadingStyle";
import DefaultButton from "./DefaultButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { DisplayFixedMessage } from "./DisplayMessage";
import LoadingWheel from './LoadingWheel';

// Requires an "enpoint" prop to the "api/endpoint/ and a "itemId" prop for the id of the endpoint
export default function DeleteButton(props) {
  const [auth, setAuth] = useContext(AuthContext);
  const [showPrompt, setPromptShow] = useState(false);
  const [error, setError] = useState("")
  const [tryDelete, setDelete] = useState(false)

  const handleAccept = () => {
    handleDelete();
  };

  const handleDelete = () => {
    setDelete(true)
    const deleteUrl = APIURL + props.endpoint;
    const deleteApi = deleteUrl + props.itemId;
    const tryDelete = async () => {
      try {
        const response = await axios.delete(deleteApi, {
          headers: {
            Authorization: `Bearer ${auth}`,
          },
        });
        setTimeout(() => {
          window.location.reload();
        }, 1000)
      } catch (e) {
        setError(e.message)
        setDelete(false)
      }
    };
    tryDelete();
  };

  return (
  <StyledDelete onClick={() => setPromptShow(prev => !prev)}>
            {error ? <DisplayFixedMessage>There was an error: {error}</DisplayFixedMessage> : ""}
            {tryDelete ? <LoadingWheel /> : <FontAwesomeIcon icon={faTrashCan} />}
            {showPrompt ? (<StyledPrompt role="alert">
              <SubheadingStyle>Delete?</SubheadingStyle>
              <div>
                <DefaultButton onClick={() => handleAccept()}>
                  Accept
                </DefaultButton>
                <DefaultButton>Cancel</DefaultButton>
              </div>
            </StyledPrompt> ) : ""}
          </StyledDelete>
  )
}