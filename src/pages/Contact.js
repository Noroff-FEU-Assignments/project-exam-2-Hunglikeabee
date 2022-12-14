import HeadingH1Style from "../components/general/HeadingH1Style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import {
  StyledForm,
  StyledFieldSet,
  StyledInput,
  StyledTextArea,
  StyledButton,
} from "../components/general/FormStyling";
import Subheading from "../components/general/Subheading";
import { APIURL } from "../constants/APIURL";
import axios from "axios";
import { useEffect, useState } from "react";
import DisplayMessage from "../components/general/DisplayMessage";
import LoadingWheel from "../components/general/LoadingWheel";

//Form handeling and error checking

const schema = yup.object().shape({
  name: yup
    .string()
    .required("Enter your name")
    .min(3, "Needs to be atleast 3 characters"),
  email: yup
    .string()
    .required("Enter your email")
    .email("Enter a valid email: example@mail.com"),
  message: yup
    .string()
    .required("Enter your message")
    .min(10, "Message needs to be atleast 10 characters"),
});


export default function Contact() {
  useEffect(() => {
    document.title = "Holidaze | Contact us";
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  //States for the form
  const [contactSend, setContactSend] = useState(false);
  const [error, setError] = useState(null);
  const [messageSuccessful, setSuccessful] = useState(false);

  //Attempt to send the contact form to the api
  const contactApi = APIURL + "api/contactforms";
  const sendContact = async (data) => {
    setContactSend(true);
    setError(null);
    const formData = new FormData();
    formData.append(
      "data",
      JSON.stringify({
        name: data.name,
        email: data.email,
        message: data.message,
      })
    );

    try {
      const response = await axios.post(contactApi, formData);
      if (response.status === 200) {
        setSuccessful(true);
      }
    } catch (e) {
      setError(e.response.data.error.message);
    } finally {
      setContactSend(false);
      reset();
    }
  };

  return (
    <>
      <HeadingH1Style>Contact us</HeadingH1Style>
      <StyledForm onSubmit={handleSubmit(sendContact)}>
        <StyledFieldSet disabled={contactSend}>
          <Subheading>Send us a message</Subheading>
          {messageSuccessful ? (
            <DisplayMessage success>Message sendt</DisplayMessage>
          ) : error ? (
            <DisplayMessage error>{error}</DisplayMessage>
          ) : (
            ""
          )}
          <StyledInput {...register("name")} type="text" placeholder="Name" />
          {errors.name && (
            <DisplayMessage>{errors.name.message}</DisplayMessage>
          )}
          <StyledInput
            {...register("email")}
            type="email"
            placeholder="E-mail"
          />
          {errors.email && (
            <DisplayMessage>{errors.email.message}</DisplayMessage>
          )}
          <StyledTextArea
            {...register("message")}
            type="textfield"
            placeholder="Message..."
          />
          {errors.message && (
            <DisplayMessage>{errors.message.message}</DisplayMessage>
          )}
          {contactSend ? <LoadingWheel /> : <StyledButton>Send</StyledButton>}
        </StyledFieldSet>
      </StyledForm>
    </>
  );
}
