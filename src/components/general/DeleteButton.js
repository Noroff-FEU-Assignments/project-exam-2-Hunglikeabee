import { APIURL } from "../../constants/APIURL";
import AuthContext from "../../context/AuthContext";
import { useState, useContext } from "react";
import axios from "axios";
import { StyledDelete, StyledPrompt } from "./StyledDeleteButton";
import Subheading from "./Subheading";
import DefaultButton from "./DefaultButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import LoadingWheel from "./LoadingWheel";
import { useNavigate } from "react-router-dom";

export default function DeleteButton(props) {
  const [auth] = useContext(AuthContext);
  const [showPrompt, setPromptShow] = useState(false);
  const [tryDelete, setDelete] = useState(false);

  const navigate = useNavigate();

  const handleAccept = () => {
    handleDelete();
  };

  const handleDelete = () => {
    setDelete(true);
    const deleteUrl = APIURL + props.endpoint;
    const deleteApi = deleteUrl + props.itemId;
    const tryDelete = async () => {
      try {
        const response = await axios.delete(deleteApi, {
          headers: {
            Authorization: `Bearer ${auth}`,
          },
        });
          window.location.reload();
      } catch (e) {
        navigate("/login");
      }
    };
    tryDelete();
  };

  return (
    <StyledDelete onClick={() => setPromptShow((prev) => !prev)}>
      {tryDelete ? <LoadingWheel /> : <FontAwesomeIcon icon={faTrashCan} />}
      {showPrompt ? (
        <StyledPrompt role="alert">
          <Subheading>Delete?</Subheading>
          <div>
            <DefaultButton onClick={() => handleAccept()}>Accept</DefaultButton>
            <DefaultButton>Cancel</DefaultButton>
          </div>
        </StyledPrompt>
      ) : (
        ""
      )}
    </StyledDelete>
  );
}
