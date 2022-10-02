import { useState, useEffect, useContext } from "react";
import AuthContext from "../../context/AuthContext";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import DisplayMessage from "../general/DisplayMessage";
import { APIURL } from "../../constants/APIURL";
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
} from "../general/FormStyling";
import HeadingH1Style from "../general/HeadingH1Style";
import LoadingWheel from "../general/LoadingWheel";
import useCheckAuth from "../../hooks/useCheckAuth";
import Subheading from "../general/Subheading";
import { useNavigate } from "react-router-dom";

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
    .oneOf(
      [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5],
      "Must be one of: 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5 "
    ),
  hero: yup
    .mixed()
    .required("You need to add a image")
    .test(
      "type",
      "Only the following formats are accepted: .jpeg, .jpg, .bmp, .webp and .png",
      (value) => {
        return (
          value &&
          (value[0].type === "image/jpeg" ||
            value[0].type === "image/bmp" ||
            value[0].type === "image/jpg" ||
            value[0].type === "image/webp" ||
            value[0].type === "image/png")
        );
      }
    ),
  alttext: yup
    .string()
    .required("Enter alt text")
    .min(3, "Needs to be atleast 3 characters")
    .max(100, "Max length 100 characters"),
  images: yup
    .mixed()
    .required("You need to add a image")
    .test(
      "type",
      "Only the following formats are accepted: .jpeg, .jpg, .bmp, .webp and .png",
      (value) => {
        for(let i=0; i < value.length; i++) {
          return (
            value &&
            (value[i].type === "image/jpeg" ||
              value[i].type === "image/bmp" ||
              value[i].type === "image/jpg" ||
              value[i].type === "image/webp" ||
              value[i].type === "image/png")
          );
        }

      }
    ),
  price: yup
    .number()
    .typeError("Specify a number")
    .required("Enter a price")
    .min(1, "Needs atleast 1 number"),
});

export default function AddHotel() {
  const [auth] = useContext(AuthContext);
  const [dataTransit, setDataTransit] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  useCheckAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const [heroFile, setHero] = useState(null);
  const [imageFile, setImage] = useState(null);

  const handleHeroFile = (e) => {
    setHero(e.target.files.length > 0 ? e.target.files[0].name : "");
  };

  const handleImageFile = (e) => {
    setImage(e.target.files.length);
  };

  const [allFacilities, setFacilities] = useState(null);

  useEffect(() => {
    const hotelFacilities = async () => {
      const response = await axios.get(APIURL + `api/facilities?populate=*`);
      const theFacilities = response.data.data;
      setFacilities(theFacilities);
    };
    hotelFacilities();
  }, []);

  const postHotel = async (data) => {
    setSuccess(false);
    setDataTransit(true);
    setError(null);
    const formData = new FormData();

    for (let i = 0; i < data.images.length; i++) {
      formData.append("files.images", data.images[i], data.images[i].name);
    }
    formData.append("files.hero", data.hero[0], data.hero[0].name);
    let facilitiesId = [];
    allFacilities.forEach((item) => {
      data[item.attributes.facility] && facilitiesId.push(parseInt(item.id));
    });

    formData.append(
      "data",
      JSON.stringify({
        name: data.name,
        description: data.description,
        price: data.price,
        rating: data.rating,
        facilityhotels: facilitiesId,
        altText: data.alttext,
      })
    );

    try {
      const response = await axios.post(APIURL + "api/hotels/", formData, {
        headers: {
          Authorization: `Bearer ${auth}`,
        },
      });
      setSuccess(true);
    } catch (e) {
      setError(e.response);
    } finally {
      setHero(null);
      setImage(null);
      setDataTransit(false);
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
            placeholder="Description..."
          />
          {errors.description && (
            <DisplayMessage>{errors.description.message}</DisplayMessage>
          )}
          <StyledInput
            step="0.5"
            type="number"
            {...register("rating")}
            placeholder="Hotel rating 1-5"
          />
          {errors.rating && (
            <DisplayMessage>{errors.rating.message}</DisplayMessage>
          )}
          <StyledFieldLabel htmlFor="hero">
            <FontAwesomeIcon icon={faFile} />
            {heroFile ? heroFile : "Choose a hero image"}
          </StyledFieldLabel>
          {errors.hero && (
            <DisplayMessage>{errors.hero.message}</DisplayMessage>
          )}
          <StyledFileInput
            onInput={handleHeroFile}
            type="file"
            id="hero"
            {...register("hero")}
          />
          {errors.hero && (
            <DisplayMessage>{errors.hero.message}</DisplayMessage>
          )}
          <StyledInput
            {...register("alttext")}
            placeholder="Hero alt text..."
          />
          {errors.alttext && (
            <DisplayMessage>{errors.alttext.message}</DisplayMessage>
          )}
          <StyledFieldLabel htmlFor="images">
            <FontAwesomeIcon icon={faFile} />
            {imageFile === 1
              ? `1 file selected`
              : imageFile > 1
              ? `${imageFile} files selected`
              : "Choose Images"}
          </StyledFieldLabel>
          {errors.images && (
            <DisplayMessage>{errors.images.message}</DisplayMessage>
          )}
          <StyledFileInput
            onInput={handleImageFile}
            type="file"
            id="images"
            multiple
            {...register("images")}
          />
          {errors.images && (
            <DisplayMessage>{errors.images.message}</DisplayMessage>
          )}
          <StyledInput
            type="number"
            {...register("price")}
            placeholder="Price"
          />
          {errors.price && (
            <DisplayMessage>{errors.price.message}</DisplayMessage>
          )}
          <Subheading>Facilities</Subheading>
          <StyledFacilitiesContainer>
            {allFacilities &&
              allFacilities.map((facility, key) => {
                return (
                  <StyledFacilityContainer key={key}>
                    <StyledFieldLabel>
                      {facility.attributes.facility}
                      <input
                        type="checkbox"
                        {...register(`${facility.attributes.facility}`)}
                      />
                    </StyledFieldLabel>
                  </StyledFacilityContainer>
                );
              })}
          </StyledFacilitiesContainer>
          {dataTransit ? (
            <LoadingWheel />
          ) : (
            <StyledButton>CREATE HOTEL</StyledButton>
          )}
        </StyledFieldSet>
      </StyledForm>
    </>
  );
}
