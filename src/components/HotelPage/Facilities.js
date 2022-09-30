import axios from "axios";
import { APIURL } from "../../constants/APIURL";
import { useContext, useState, useEffect } from "react";
import ApiContext from "../../context/ApiContext";
import Subheading from "../general/Subheading";
import {
  StyledIcon,
  StyledFacilities,
  StyledFacility,
} from "./StyledFacilities";

export default function Facilities({ hotelId }) {
  const [apiData] = useContext(ApiContext);
  const [allFacilities, setFacilities] = useState(null);
  const currentHotelFacilities = apiData.filter(
    (item) => item.id === parseInt(hotelId)
  );
  const hotelFacilitesId =
    currentHotelFacilities[0].attributes.facilityhotels.data.map(
      (item) => item.id
    );

  useEffect(() => {
    const hotelFacilities = async () => {
      const response = await axios.get(APIURL + `api/facilities?populate=*`);
      const theFacilities = response.data.data;
      setFacilities(theFacilities);
    };
    hotelFacilities();
  }, []);

  return (
    <StyledFacilities>
      <Subheading>Facilities</Subheading>
      {allFacilities &&
        hotelFacilitesId.map((item, key) => {
          const oneFacility = allFacilities.filter(
            (facility) => facility.id === item
          );
          return (
            <StyledFacility key={key}>
              <StyledIcon
                style={{
                  backgroundImage: `url(${oneFacility[0].attributes.facilityicon.data.attributes.url})`,
                }}
              ></StyledIcon>
              <div>{oneFacility[0].attributes.facility}</div>
            </StyledFacility>
          );
        })}
    </StyledFacilities>
  );
}
