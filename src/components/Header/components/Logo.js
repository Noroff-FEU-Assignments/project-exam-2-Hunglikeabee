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
`

export default function Logo() {
  return <StyledLink to="/"><StyledLogo></StyledLogo></StyledLink>
}