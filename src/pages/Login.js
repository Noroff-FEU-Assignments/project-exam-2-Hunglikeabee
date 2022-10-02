import axios from "axios";
import { useState, useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import HeadingH1Style from "../components/general/HeadingH1Style";
import { APIURL } from "../constants/APIURL";
import DisplayMessage from "../components/general/DisplayMessage";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import {
  StyledForm,
  StyledFieldSet,
  StyledInput,
  StyledEye,
  StyledPasswordLayout,
  StyledButton,
} from "../components/general/FormStyling";
import LoadingWheel from "../components/general/LoadingWheel";
import useCheckAuth from "../hooks/useCheckAuth";

export default function Login() {
  useCheckAuth();
  useEffect(() => {
    document.title = "Holidaze | Login";
  }, []);

  const navigate = useNavigate();
  const loginUrl = APIURL + "api/auth/local";
  const schema = yup.object().shape({
    username: yup.string().required("Enter username"),
    password: yup.string().required("Enter password"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [loggingInn, setLoggingInn] = useState(false);
  const [error, setError] = useState(null);
  const [auth, setAuth] = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(true);

  const changeShowPassword = () => {
    setShowPassword((prev) => !prev);
  };

  const tryLogin = async (data) => {
    setLoggingInn(true);
    setError(null);

    try {
      const response = await axios.post(loginUrl, {
        identifier: data.username,
        password: data.password,
      });
      if (response.statusText === "OK") {
        setAuth(response.data.jwt);
        navigate("/admin");
      }
    } catch (e) {
      if (e.request.status === 400) {
        setError("Invalid username or password");
      } else {
        setError(e.message);
      }
    } finally {
      setLoggingInn(false);
    }
  };
  return (
    <>
      <HeadingH1Style>Login</HeadingH1Style>
      <StyledForm onSubmit={handleSubmit(tryLogin)}>
        {error ? <DisplayMessage>{error}</DisplayMessage> : ""}
        <StyledFieldSet maxWidth="300px" disabled={loggingInn}>
          <StyledInput {...register("username")} placeholder="Username..." />
          {errors.username && (
            <DisplayMessage>{errors.username.message}</DisplayMessage>
          )}
          <StyledPasswordLayout>
            <StyledInput
              {...register("password")}
              type={showPassword ? "password" : "text"}
              placeholder="Password..."
            />
            <StyledEye tabIndex="0" onClick={changeShowPassword}>
              <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
            </StyledEye>
          </StyledPasswordLayout>
          {errors.password && (
            <DisplayMessage>{errors.password.message}</DisplayMessage>
          )}
          {loggingInn ? <LoadingWheel /> : <StyledButton>LOGIN</StyledButton>}
        </StyledFieldSet>
      </StyledForm>
    </>
  );
}
