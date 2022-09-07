import { useState, useEffect, useContext } from "react"
import AuthContext from "../context/AuthContext"
import { useNavigate } from "react-router-dom"
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup"
import { useForm } from "react-hook-form"
import ErrorMessage from "../components/general/ErrorMessage"
import { APIURL } from "../constants/APIURL"
import axios from "axios"


import styled from "styled-components"
import InputField from "../components/general/InputField"

const StyledField = styled.fieldset`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

& input {
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
}

& button {
    padding: 10px 20px;
    margin: 10px;
    background-color: lightgreen;
}
`




export default function Admin() {

  const navigate = useNavigate()
  const [auth, setAuth] = useContext(AuthContext)
  const [dataTransit, setDataTransit] = useState(false)
  const [ error, setError ] = useState(null)

  useEffect(() => {
    if (!auth) {
      navigate("/")
    }
  })


  const schema = yup.object().shape({
    name: yup.string().required("Enter a title").min(3, "Needs to be atleast 3 characters"),
    description: yup.string().required("Enter a description").min(20, "Needs to be atleast 20 characters"),
    hero: yup.mixed().required("You need to add a image").test("fileSize", "The file is too large", (value) => {
      return value && value[0].size < 1000000;
    }),
    images: yup.mixed().required("You need to add a image").test("fileSize", "The file is too large", (value) => {
      return value && value[0].size < 1000000;
    }),
    price: yup.number().typeError("Specify a number").required("Enter a price").min(1, "Needs atleast 1 number")
  })

  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(schema)
  })



  const postHotel = async (data) => {
    console.log(data)
    setDataTransit(true)
    setError(null)

    console.log(auth)
    try {
      const response = await axios.post(APIURL + "api/hotels", {
        data: {
          name: data.name,
          description: data.description,
          hero: data.hero,
          images: data.images,
          price: data.price
        }
      },
      {
        headers: {
        Authorization: `Bearer ${auth}`
      }})
    }
    catch(e) {
      console.log(e)
      setError(e.response.data.error.message)
    }
    finally {
      setDataTransit(false)
    }
  }


  return(
    <>
    <div>ADMIN PAGE</div>
    <form onSubmit={handleSubmit(postHotel)}>
    {error ? <ErrorMessage>{error}</ErrorMessage> : ""}
      <StyledField disabled={dataTransit}>
        <input {...register("name")} placeholder="Name" />
        {errors.name && <ErrorMessage>{errors.name.message}</ErrorMessage>}
        <input {...register("description")} placeholder="Description"/>
        {errors.description && <ErrorMessage>{errors.description.message}</ErrorMessage>}
        <input type="file" {...register("hero")} placeholder="Select hero" />
        <input type="file" {...register("images")} placeholder="Select images" />
        <input {...register("price")} placeholder="Price" />
        {errors.price && <ErrorMessage>{errors.price.message}</ErrorMessage>}
        <button>CREATE HOTEL</button>
      </StyledField>
    </form>
    </>
  )
}