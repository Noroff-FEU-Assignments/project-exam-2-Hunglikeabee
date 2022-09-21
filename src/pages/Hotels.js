import styled from "styled-components";
import { useContext } from "react";
import ApiContext from "../context/ApiContext";

import HotelPreview from "../components/HotelsPage/HotelPreview";
import HeadingH1Style from "../components/general/HeadingH1Style";

const HotelsContainer = styled.div`
max-width: 1000px;
margin: 0 auto;
display: flex;
justify-content: center;
flex-wrap: wrap;
& a {
  margin: 15px;
}
`

export default function Hotels() {

  const [apiData] = useContext(ApiContext)
  console.log(apiData)

  return (
    <>
    <HeadingH1Style>Discover our hotels</HeadingH1Style>
    <HotelsContainer>
      <HotelPreview data={apiData} />
    </HotelsContainer>
    </>
  )
}