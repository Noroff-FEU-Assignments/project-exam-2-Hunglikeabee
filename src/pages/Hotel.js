import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import ApiContext from "../context/ApiContext";
import { StyledHotelContainer, StyledHero, StyledCarousel, StyledImageCarousel, StyledDescription, StyledFacilitiesContainer, StyledPrice, StyledOrderButton, StyledCloseButton } from "../components/HotelPage/StyledHotel";
import { DateRangePicker } from 'react-date-range'
import "react-date-range/dist/styles.css"
import "react-date-range/dist/theme/default.css"
import { addDays } from 'date-fns';
import { StyledOrderContainer } from './../components/HotelPage/StyledOrderHotel';
import {  StyledInput } from "../components/general/FormStyling";
import HeadingH1Style from "../components/general/HeadingH1Style";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import DisplayMessage from "../components/general/DisplayMessage";
import axios from "axios";
import { APIURL } from "../constants/APIURL";
import DefaultButton from "../components/general/DefaultButton";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import LoadingWheel from "../components/general/LoadingWheel";

export default function Hotel() {
const [apiData] = useContext(ApiContext)
const { id } = useParams()
const thisHotel = apiData.filter(item => item.id === parseInt(id))


const hotelImages = thisHotel[0].attributes.images.data.map(item => {
  return item
})

const [orderModal, setOrderModal] = useState(false)

const handleOrderModal = () => {
  setOrderModal((prev) => !prev)
}

useEffect(() => {
  document.addEventListener("keydown", hideModalOnEscape, true)
}, [])


const hideModalOnEscape = (e) => {
  if(e.key === "Escape") {
    setOrderModal(false)
  }
}

const [currentDate, setDate] = useState([
  {
    startDate: new Date(),
    endDate: addDays(new Date(), 2),
    key: 'selection'
  }
]);


const emailRegEx = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
const hotelEnquiry = APIURL + `api/enquiries/`;
const [orderSend, setOrderSend] = useState(false);
const [error, setError] = useState(null);
const [messageSuccessful, setSuccessful] = useState(false);


const schema = yup.object().shape({
  name: yup
    .string()
    .required("Enter your name")
    .min(3, "Needs to be atleast 3 characters"),
  email: yup
    .string()
    .required("Enter your email")
    .matches(emailRegEx, "Enter a valid email: example@mail.com"),
});
const {
  register,
  handleSubmit,
  reset,
  formState: { errors },
} = useForm({
  resolver: yupResolver(schema),
});

const sendOrder = async (data) => {
  setOrderSend(true);
  setError(null);
  const formData = new FormData()
  formData.append(
    "data",
    JSON.stringify({
      name: data.name,
      email: data.email,
      from: moment(data.startDate).format("YYYY-MM-DD"),
      to: moment(data.endDate).format("YYYY-MM-DD"), hotel: {
          id: id
      }
    })
  )

  try {
    const response = await axios.post(hotelEnquiry, formData)
    if(response.status === 200) {
      setSuccessful(true)
    }
  }
  catch(e) {
    console.log(e)
  }
  finally {
    reset()
    setOrderSend(false)
  }
}


return (
      thisHotel.length > 0 ? <StyledHotelContainer>
        <StyledHero style={{
              backgroundImage: `url(${thisHotel[0].attributes.hero.data.attributes.formats.medium.url})`
            }} />
            <StyledCarousel>
                <StyledImageCarousel style={{
                  backgroundImage: `url(${hotelImages[0].attributes.formats.medium ? hotelImages[0].attributes.formats.medium.url : hotelImages[0].attributes.formats.small.url})`
                }}></StyledImageCarousel>
            </StyledCarousel>
        <StyledDescription>{thisHotel[0].attributes.description}</StyledDescription>
        <StyledFacilitiesContainer></StyledFacilitiesContainer>
        <StyledPrice>{thisHotel[0].attributes.price}</StyledPrice>
        <StyledOrderButton onClick={handleOrderModal}>ORDER THIS HOTEL</StyledOrderButton>
        {orderModal ? <StyledOrderContainer onSubmit={handleSubmit(sendOrder)}>
          <HeadingH1Style>Book hotel</HeadingH1Style>
          {messageSuccessful ? (
            <DisplayMessage success>Order Placed</DisplayMessage>
          ) : error ? <DisplayMessage error>{error}</DisplayMessage> : (
            ""
          )}
          <StyledInput {...register("name")} type="text" placeholder="Name" />
          {errors.name && (
            <DisplayMessage>{errors.name.message}</DisplayMessage>
          )}
          <StyledInput
            {...register("email")}
            type="text"
            placeholder="E-mail"
          />
                    {errors.email && (
            <DisplayMessage>{errors.email.message}</DisplayMessage>
          )}
                <DateRangePicker
            onChange={item => setDate([item.selection])}
            showSelectionPreview={true}
            moveRangeOnFirstSelection={false}
            months={1}
            ranges={currentDate}
            direction="vertical"
            minDate={new Date()}
          />
          {orderSend ? <LoadingWheel /> : <DefaultButton>Place order</DefaultButton>}
          <StyledCloseButton onClick={() => setOrderModal(false)}><FontAwesomeIcon icon={faClose} /></StyledCloseButton>
          </StyledOrderContainer>
 : ""}
      </StyledHotelContainer> : ""
        )
}