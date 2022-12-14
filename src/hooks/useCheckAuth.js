import axios from "axios";
import { useContext, useEffect } from "react";
import { APIURL } from "../constants/APIURL";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function useCheckAuth() {
  const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();
  useEffect(() => {
    checkToken();
  });
  async function checkToken() {
    try {
      const response = await axios.get(APIURL + "api/contactforms/", {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      });
      if (response.status !== 200) {
        setAuth(null);
        navigate("/");
      }
    } catch (e) {
      setAuth(null);
    }
  }
}
