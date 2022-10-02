import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { addDays } from "date-fns";
import { StyledOrderContainer } from "./StyledOrderHotel";
import { StyledInput } from "../general/FormStyling";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import DisplayMessage from "../general/DisplayMessage";
import axios from "axios";
import { APIURL } from "../../constants/APIURL";
import moment from "moment";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";
import LoadingWheel from "../general/LoadingWheel";
import DefaultButton from "../general/DefaultButton";
import { StyledCloseButton, StyledPrice } from "./StyledHotel";
import Subheading from "../general/Subheading";
import { StyledBlackOverylay } from "../Header/components/StyledHamburger";

export default function OrderHotel(props) {
  const [currentDate, setDate] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 2),
      key: "selection",
    },
  ]);

  const [daysBetween, setBetween] = useState(null);

  useEffect(() => {
    // One day in milliseconds
    const oneDay = 1000 * 60 * 60 * 24;

    const start = currentDate[0].startDate;
    const end = currentDate[0].endDate;

    // Calculating the time difference between two dates
    const diffInTime = end.getTime() - start.getTime();

    // Calculating the no. of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay);
    setBetween(diffInDays);
  }, [currentDate]);

  const { id } = useParams();
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
      .email("Enter a valid email: example@mail.com"),
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
    const formData = new FormData();
    formData.append(
      "data",
      JSON.stringify({
        name: data.name,
        email: data.email,
        from: moment(currentDate[0].startDate).format("YYYY-MM-DD"),
        to: moment(currentDate[0].endDate).format("YYYY-MM-DD"),
        hotel: {
          id: id,
        },
      })
    );

    try {
      const response = await axios.post(hotelEnquiry, formData);
      if (response.status === 200) {
        setSuccessful(true);
      }
    } catch (e) {
      console.log(e);
    } finally {
      reset();
      setOrderSend(false);
    }
  };

  return (
    <StyledBlackOverylay>
      <StyledOrderContainer id="bookHotel" onSubmit={handleSubmit(sendOrder)}>
        <Subheading color="black">Book hotel</Subheading>
        {messageSuccessful ? (
          <DisplayMessage success>Order Placed</DisplayMessage>
        ) : error ? (
          <DisplayMessage error>{error}</DisplayMessage>
        ) : (
          ""
        )}
        <StyledInput {...register("name")} type="text" placeholder="Name" />
        {errors.name && <DisplayMessage>{errors.name.message}</DisplayMessage>}
        <StyledInput {...register("email")} type="email" placeholder="E-mail" />
        {errors.email && (
          <DisplayMessage>{errors.email.message}</DisplayMessage>
        )}
        <DateRangePicker
          onChange={(item) => setDate([item.selection])}
          showSelectionPreview={true}
          moveRangeOnFirstSelection={false}
          months={1}
          ranges={currentDate}
          direction="vertical"
          minDate={new Date()}
        />
        <StyledPrice>
          Total price: {props.hotelPrice * daysBetween},-NOK
        </StyledPrice>
        {orderSend ? (
          <LoadingWheel />
        ) : (
          <DefaultButton>Place order</DefaultButton>
        )}
        <StyledCloseButton onClick={props.handleClick}>
          <FontAwesomeIcon icon={faClose} />
        </StyledCloseButton>
      </StyledOrderContainer>
    </StyledBlackOverylay>
  );
}
