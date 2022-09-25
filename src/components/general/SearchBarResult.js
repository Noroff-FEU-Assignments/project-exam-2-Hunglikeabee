import styled from "styled-components";
import { NavLink } from "react-router-dom";

const StyledHotels = styled(NavLink)`
border: none;
display: flex;
padding: 10px;
padding-left: 30px;
border-bottom: 1px solid gray;
text-decoration: none;

&:hover {
  color: ${props => props.theme.colors.LightPink};
  background-color: ${props => props.theme.colors.DarkGray};
}

&:nth-child(1) {
  border-top-left-radius: 50px;
  border-top-right-radius: 50px;
}
&:nth-last-child(1) {
  border-bottom: none;
  border-bottom-left-radius: 50px;
  border-bottom-right-radius: 50px;
}
`


export default function SearchBarResult({data}) {
  return data.length > 0 ? (
    data.map((hotel, key) => {
      return (
        <StyledHotels key={key} to={`/hotel/${hotel.id}`}>{hotel.attributes.name}</StyledHotels>
      );
    })
  ) : (
    ""
  );
}
