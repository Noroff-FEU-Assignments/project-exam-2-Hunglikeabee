import styled from "styled-components";
import { useContext, useEffect } from "react";
import ApiContext from "../context/ApiContext";
import HotelPreview from "../components/hotelspage/HotelPreview";
import HeadingH1Style from "../components/general/HeadingH1Style";
import GetHotelApi from "../hooks/useApiCall";

const HotelsContainer = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  & a {
    margin: 15px;
  }
`;

export default function Hotels() {
  const [apiData] = useContext(ApiContext);
  useEffect(() => {
    document.title = "Holidaze | Hotels";
  }, []);
  GetHotelApi();
  return (
    <>
      <HeadingH1Style>Discover our hotels</HeadingH1Style>
      <HotelsContainer>
        <HotelPreview data={apiData} />
      </HotelsContainer>
    </>
  );
}
