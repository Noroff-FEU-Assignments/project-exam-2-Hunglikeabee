import { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import DisplayMessage from "../../components/general/DisplayMessage";
import { APIURL } from "../../constants/APIURL"
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";

import {
  StyledForm,
  StyledFieldSet,
  StyledInput,
  StyledFileInput,
  StyledButton,
  StyledFieldLabel,
  StyledTextArea,
} from "../../components/general/FormStyling";
import HeadingH1Style from "../../components/general/HeadingH1Style";
import LoadingWheel from "../general/LoadingWheel";

export default function AddHotel() {
  const navigate = useNavigate();
  const [auth, setAuth] = useContext(AuthContext);
  const [dataTransit, setDataTransit] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false)

  useEffect(() => {
    if (!auth) {
      navigate("/");
    }
  });

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Enter a title")
      .min(3, "Needs to be atleast 3 characters"),
    description: yup
      .string()
      .required("Enter a description")
      .min(20, "Needs to be atleast 20 characters"),
    rating: yup
      .number()
      .required("Enter a rating between 1-5")
      .min(1, "Needs to be atleast 1")
      .max(5, "Max rating is 5"),
    hero: yup
      .mixed()
      .required("You need to add a image")
      .test("fileSize", "The file is too large", (value) => {
        return value && value[0].size < 10000000;
      })
      .test(
        "type",
        "Only the following formats are accepted: .jpeg, .jpg, .bmp and .png",
        (value) => {
          return (
            value &&
            (value[0].type === "image/jpeg" ||
              value[0].type === "image/bmp" ||
              value[0].type === "image/png")
          );
        }
      ),
    images: yup
      .mixed()
      .required("You need to add a image")
      .test("fileSize", "The file is too large, max 10MB", (value) => {
       return value && value[0].size < 10000000;
      })
      .test(
        "type",
        "Only the following formats are accepted: .jpeg, .jpg, .bmp and .png",
        (value) => {
          return (
            value &&
            (value[0].type === "image/jpeg" ||
              value[0].type === "image/bmp" ||
              value[0].type === "image/png")
          );
        }
      ),
    price: yup
      .number()
      .typeError("Specify a number")
      .required("Enter a price")
      .min(1, "Needs atleast 1 number"),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const postHotel = async (data) => {
    console.log(data);
    setSuccess(false)
    setDataTransit(true);
    setError(null);
    const formData = new FormData();



    for(let i = 0; i < data.images.length; i++) {
      formData.append("files.images", data.images[i], data.images[i].name)
    }

    formData.append("files.hero", data.hero[0], data.hero[0].name);

    formData.append(
      "data",
      JSON.stringify({
        name: data.name,
        description: data.description,
        price: data.price,
        rating: data.rating,
      })
    );

    try {
      const response = await axios.post(APIURL + "api/hotels", formData, {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      });
      setSuccess(true)
      console.log(response);
    } catch (e) {
      console.log(e);
      setError(e.response.data.error.message);
    } finally {
      setDataTransit(false);
      reset();
    }
  };

  const [heroFile, setHero] = useState(null);
  const [imageFile, setImage] = useState(null);

  const handleHeroFile = (e) => {
    console.log(e);
    setHero(e.target.files[0].name);
  };

  const handleImageFile = (e) => {
    setImage(e.target.files.length);
  };

  return (
    <>
      <HeadingH1Style>ADD HOTEL</HeadingH1Style>
      <StyledForm onSubmit={handleSubmit(postHotel)}>
        {success ? <DisplayMessage success>Hotel added</DisplayMessage> : ""}
        {error ? <DisplayMessage>{error}</DisplayMessage> : ""}
        <StyledFieldSet disabled={dataTransit}>
          <StyledInput {...register("name")} placeholder="Name" />
          {errors.name && (
            <DisplayMessage>{errors.name.message}</DisplayMessage>
          )}
          <StyledTextArea
            {...register("description")}
            placeholder="Description"
          />
          {errors.description && (
            <DisplayMessage>{errors.description.message}</DisplayMessage>
          )}
          <StyledInput {...register("rating")} placeholder="Hotel rating 1-5" />
          {errors.rating && (
            <DisplayMessage>{errors.rating.message}</DisplayMessage>
          )}
          <StyledFieldLabel for="hero">
            <FontAwesomeIcon icon={faFile} />
            {heroFile ? heroFile : "Choose a hero image"}
          </StyledFieldLabel>
          <StyledFileInput
            onInput={handleHeroFile}
            type="file"
            id="hero"
            {...register("hero")}
            placeholder="Select hero"
          />
          {errors.hero && (
            <DisplayMessage>{errors.hero.message}</DisplayMessage>
          )}
          <StyledFieldLabel for="images">
            <FontAwesomeIcon icon={faFile} />
            {imageFile === 1
              ? `1 file selected`
              : imageFile > 1
              ? `${imageFile} files selected`
              : "Choose Images"}
          </StyledFieldLabel>
          <StyledFileInput
            onInput={handleImageFile}
            type="file"
            multiple
            id="images"
            {...register("images")}
            placeholder="Select image"
          />
          {errors.images && (
            <DisplayMessage>{errors.images.message}</DisplayMessage>
          )}
          <StyledInput {...register("price")} placeholder="Price" />
          {errors.price && (
            <DisplayMessage>{errors.price.message}</DisplayMessage>
          )}
          {dataTransit ? <LoadingWheel/> : <StyledButton>CREATE HOTEL</StyledButton> }
        </StyledFieldSet>
      </StyledForm>
    </>
  );
}