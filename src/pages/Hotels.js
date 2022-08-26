import styled from "styled-components";
import { useContext } from "react";
import ApiContext from "../context/ApiContext";

import HotelPreview from "../components/HotelsPage/HotelPreview";

const HotelsContainer = styled.div`
max-width: 800px;
margin: 0 auto;
display: flex;
flex-wrap: wrap;

& a {
  margin: 10px;
}
`

export default function Hotels() {

  const [apiData] = useContext(ApiContext)
  console.log(apiData)

  return (
    <HotelsContainer>
      <HotelPreview data={apiData} />
    </HotelsContainer>

  )
}