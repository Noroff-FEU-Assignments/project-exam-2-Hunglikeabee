import axios from "axios";
import { useState, useContext } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import HeadingH1Style from "../components/general/HeadingH1Style";
import { APIURL } from "../constants/APIURL";
import ErrorMessage from "../components/general/ErrorMessage";
import InputField from "../components/general/InputField";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { StyledField, StyledEye, StyledPasswordLayout } from "./StyledLogin";

export default function Login() {

  const navigate = useNavigate();
  const loginUrl = APIURL + "api/auth/local"
  const schema = yup.object().shape({
      username: yup.string().required("Enter username"),
      password: yup.string().required("Enter password")
  })
  const {register, handleSubmit, formState: {errors}} = useForm({
      resolver: yupResolver(schema)
  })
  const [loggingInn, setLoggingInn] = useState(false)
  const [error, setError]  = useState(null)
  const [auth, setAuth] = useContext(AuthContext)
  const [showPassword, setShowPassword] = useState(true)

  const changeShowPassword = () => {
    setShowPassword(prev => !prev)
  }

  const tryLogin = async (data) => {
  setLoggingInn(true)
  setError(null)

      try {
          const response = await axios.post(loginUrl, {
              identifier: data.username,
              password: data.password,
          })
          console.log(response)
          if(response.statusText === "OK") {
              setAuth(response.data.jwt)
              navigate("/admin")
          }
      }
      catch(e) {
          setError(e.message)
      }
      finally {
          setLoggingInn(false)
      }
  }
  return(
    <form onSubmit={handleSubmit(tryLogin)}>
        <HeadingH1Style>Login</HeadingH1Style>
        {error ? <ErrorMessage>{error}</ErrorMessage> : ""}
        <StyledField disabled={loggingInn}>
            <input {...register("username")} placeholder="Username..." />
            {errors.username && <ErrorMessage>{errors.username.message}</ErrorMessage>}
            <StyledPasswordLayout>
                <input {...register("password")} type={showPassword ? "password": "text"} placeholder="Password..." /><StyledEye tabIndex="0" onClick={changeShowPassword}><FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} /></StyledEye>
            </StyledPasswordLayout>
            {errors.password && <ErrorMessage>{errors.password.message}</ErrorMessage>}
            <button>LOGIN</button>
        </StyledField>
    </form>
  )
}