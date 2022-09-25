import { useContext } from "react";
import AuthContext from "../context/AuthContext"
import { APIURL } from "../constants/APIURL";
import axios from "axios";

export default function useAxios(endpoint, headers, sendType) {
  const [auth] = useContext(AuthContext)
  const tryAxios = async () => {
    try {
      const response = axios.sendType(APIURL + endpoint, headers)
      return response.data.data
    }
    catch(e) {
      return e
    }
  }
  tryAxios();
}