import { NavLink } from "react-router-dom";
import HeadingH1Style from "../components/general/HeadingH1Style";
import { useNavigate } from "react-router-dom"
import { useContext, useEffect } from "react";
import AuthContext from "../context/AuthContext";
import styled from "styled-components";

const StyledAdminPanel = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

& a {
  padding: 5px;
  margin: 10px;
  border-radius: 50px;
  box-shadow: ${props => props.theme.shading.BoxShadow};
  background-color: white;
  text-decoration: none;
  font-size: 26px;
  width: 400px;
  max-width: 90vw;
  text-align: center;
  color: black;
}

& a:hover {
  background-color: ${props => props.theme.colors.DarkGray};
  color: ${props => props.theme.colors.LightPink};
}

`

export default function Admin() {

  const [auth, setAuth] = useContext(AuthContext)
  const navigate = useNavigate()

  useEffect(() => {
    document.title = "Holidaze | Admin"
    if (!auth) {
      navigate("/");
    }
  });

  return(
    <>
    <HeadingH1Style>Admin</HeadingH1Style>
    <StyledAdminPanel>
    <NavLink to="/addhotel">Add Hotel</NavLink>
    <NavLink to="/messages">Messages</NavLink>
    <NavLink to="/enquiries">Enquiries</NavLink>
    </StyledAdminPanel>
    </>
  )
}