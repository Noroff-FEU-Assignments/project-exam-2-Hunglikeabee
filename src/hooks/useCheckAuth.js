import axios from "axios";
import { useContext, useEffect } from "react";
import { APIURL } from "../constants/APIURL";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

export default function useCheckAuth() {
  const [auth, setAuth] = useContext(AuthContext)
  const navigate = useNavigate();
  useEffect(() => {
    checkToken();
    if (!auth) {
      navigate("/");
    }
  }, []);
  async function checkToken() {
    try {
      const response = await axios.get(APIURL + "api/contactforms/", {headers: {
        Authorization: `Bearer ${auth}`
      }})
      if(response.stats === 401 || response.status === 403) {
        setAuth(null)
      }
    }
    catch(e) {
      setAuth(null)
    }
  }
}