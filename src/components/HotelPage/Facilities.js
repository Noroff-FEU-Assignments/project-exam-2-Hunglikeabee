import styled from "styled-components";
import axios from "axios";
import { APIURL } from "../../constants/APIURL";
import { useContext, useState, useEffect } from "react";
import ApiContext from "../../context/ApiContext";
import SubheadingStyle from "../general/SubheadingStyle";

const StyledIcon = styled.div`
width: 30px;
height: 30px;
margin-right: 20px;
`

const StyledFacilities = styled.div`
display: flex;
flex-direction: column;
min-width: 250px;
`;

const StyledFacility = styled.div`
display: flex;
flex-direction: row;
justify-content: left;
align-items: center;
margin: 10px;
background-color: white;
padding: 10px 20px;
border-radius: 50px;
`

export default function Facilities({hotelId}) {

  const [apiData] = useContext(ApiContext)
  const currentHotelFacilities = apiData.filter(item => item.id === parseInt(hotelId))
  const hotelFacilitesId = currentHotelFacilities[0].attributes.facilityhotels.data.map(item => item.id)


  const [allFacilities, setFacilities]  = useState(null)

  useEffect(() => {
    const hotelFacilities = async () => {
      const response = await axios.get(APIURL + `api/facilities?populate=*`)
      const theFacilities = response.data.data
      setFacilities(theFacilities)
     }
     hotelFacilities();
  }, [])



  return (<StyledFacilities>
          <SubheadingStyle>Facilities</SubheadingStyle>
            {allFacilities && hotelFacilitesId.map((item, key) => {
              const oneFacility = allFacilities.filter(facility => facility.id === item)
              console.log(oneFacility)
              return (
                <StyledFacility key={key}>
                <StyledIcon style={{backgroundImage: `url(${oneFacility[0].attributes.facilityicon.data.attributes.url})`}}></StyledIcon>
                    <div>{oneFacility[0].attributes.facility}</div>
                </StyledFacility>

              )
            }) }
        </StyledFacilities>
        )
}
