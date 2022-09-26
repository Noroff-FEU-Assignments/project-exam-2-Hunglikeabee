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
  StyledFacilitiesContainer,
  StyledFacilityContainer,
} from "../../components/general/FormStyling";
import HeadingH1Style from "../../components/general/HeadingH1Style";
import LoadingWheel from "../general/LoadingWheel";
import useCheckAuth from "../../hooks/useCheckAuth";
import SubheadingStyle from "../general/SubheadingStyle";
import GetHotelApi from "../../hooks/useApiCall";

export default function AddHotel() {
  const [auth, setAuth] = useContext(AuthContext);
  const [dataTransit, setDataTransit] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false)

  useCheckAuth();

  const schema = yup.object().shape({
    name: yup
      .string()
      .required("Enter a title")
      .min(3, "Needs to be atleast 3 characters")
      .max(20, "Max lenght 20 characters"),
    description: yup
      .string()
      .required("Enter a description")
      .min(20, "Needs to be atleast 20 characters"),
    rating: yup
      .number()
      .required("Enter a rating between 1-5")
      .typeError("Must be a valid number")
      .oneOf([1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5], "Must be one of: 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 "),
    hero: yup
      .mixed()
      .required("You need to add a image")
      .test("fileSize", "The file is too large, max 10MB", (value) => {
        return value[0].size ? value[0].size < 10000000 : "";
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
      .test("fileSize", "The files are too large, max 10MB each file", (value) => {
       return value[0].size ? value[0].size < 10000000 : "";
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


  const [heroFile, setHero] = useState(null);
  const [imageFile, setImage] = useState(null);

  const handleHeroFile = (e) => {
    console.log(e);
    setHero(e.target.files[0].name);
  };

  const handleImageFile = (e) => {
    setImage(e.target.files.length);
  };


  const [allFacilities, setFacilities]  = useState(null)

  useEffect(() => {
    const hotelFacilities = async () => {
      const response = await axios.get(APIURL + `api/facilities?populate=*`)
      const theFacilities = response.data.data
      setFacilities(theFacilities)
     }
     hotelFacilities();
  }, [])


  const postHotel = async (data) => {
    setSuccess(false)
    setDataTransit(true);
    setError(null);
    const formData = new FormData();

    for(let i = 0; i < data.images.length; i++) {
      formData.append("files.images", data.images[i], data.images[i].name)
    }
    formData.append("files.hero", data.hero[0], data.hero[0].name);
    let facilitiesId = []
    allFacilities.forEach(item => {
      data[item.attributes.facility] && facilitiesId.push(parseInt(item.id))
    })

    formData.append(
      "data",
      JSON.stringify({
        name: data.name,
        description: data.description,
        price: data.price,
        rating: data.rating,
        facilityhotels: facilitiesId,
      })
    );

    try {
      const response = await axios.post(APIURL + "api/hotels/", formData, {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      });
      setSuccess(true)
    } catch (e) {
      console.log(e);
      setError(e.response.data.error.message);
    } finally {
      setDataTransit(false);
      reset();
    }
  };

  return (
    <>
      <HeadingH1Style>ADD HOTEL</HeadingH1Style>
      <StyledForm onSubmit={handleSubmit(postHotel)}>
        {success && <DisplayMessage success>Hotel added</DisplayMessage>}
        {error && <DisplayMessage>{error}</DisplayMessage>}
        <StyledFieldSet disabled={dataTransit}>
          <StyledInput type="text" {...register("name")} placeholder="Name" />
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
          <StyledInput step="0.5" type="number" {...register("rating")} placeholder="Hotel rating 1-5" />
          {errors.rating && (
            <DisplayMessage>{errors.rating.message}</DisplayMessage>
          )}
          <StyledFieldLabel htmlFor="hero">
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
          <StyledFieldLabel htmlFor="images">
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
          <StyledInput type="number" {...register("price")} placeholder="Price" />
          {errors.price && (
            <DisplayMessage>{errors.price.message}</DisplayMessage>
          )}
          <SubheadingStyle>Facilities</SubheadingStyle>
          <StyledFacilitiesContainer>
            {allFacilities && allFacilities.map((facility,key) => {
              return <StyledFacilityContainer key={key}>
                        <StyledFieldLabel>{facility.attributes.facility}
                        <input type="checkbox" {...register(`${facility.attributes.facility}`) } />
                        </StyledFieldLabel>
                      </StyledFacilityContainer>
            })}
          </StyledFacilitiesContainer>
          {dataTransit ? <LoadingWheel/> : <StyledButton>CREATE HOTEL</StyledButton> }
        </StyledFieldSet>
      </StyledForm>
    </>
  );
}