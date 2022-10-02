import styled from "styled-components";
import { Link } from "react-router-dom";

import LogoLarge from "../../../images/logo/holidazelogo.png";
import LogoLargeBlack from "../../../images/logo/holidazelogoblack.png";
const StyledLink = styled(Link)``;

const StyledLogo = styled.div`
  width: 160px;
  height: 80px;
  margin-left: 20px;
  background-image: url(${(props) => props.theme.colors.White === "#FFFFFF" ? LogoLarge : LogoLargeBlack});
  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 450px) {
    width: 140px;
  }

  @media (max-width: 280px) {
    width: 100px;
  }

  @media (max-width: 220px) {
    display: none;
  }
`;

export default function Logo() {
  return (
    <StyledLink to="/">
      <StyledLogo></StyledLogo>
    </StyledLink>
  );
}
