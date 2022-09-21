import styled from "styled-components";
import { Link } from "react-router-dom";

import LogoLarge from "../../../images/logo/holidazelogo.png"
import LogoLetter from "../../../images/logo/holidazelogobigh.png"

const StyledLink = styled(Link)``

const StyledLogo = styled.div`
width: 200px;
height: 80px;
margin-left: 20px;
background-image: url(${LogoLarge});
background-size: contain;
background-position: center;
background-repeat: no-repeat;

@media (max-width: 450px) {
  width: 150px;
}

@media (max-width: 280px) {
  width: 100px
}

@media (max-width: 220px) {
  display: none;
}
`

export default function Logo() {
  return <StyledLink to="/"><StyledLogo></StyledLogo></StyledLink>
}