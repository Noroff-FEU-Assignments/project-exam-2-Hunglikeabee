import styled from "styled-components";
import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { LogoutButton } from "../Header/components/StyledMenu";
import SubheadingStyle from "../general/SubheadingStyle";

const StyledFooterContainer = styled.div`
margin-top: 100px;
border-top: 3px solid white;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
& a {
  padding: 10px;
  text-decoration: none;
  color: white;
}

& a:hover {
  color: ${props => props.theme.colors.LightPink}
}
`

const StyledLinksContainer = styled.div`
display: flex;
align-items: center;
flex-direction: column;
padding: 0px 20px;
min-width: 250px;

`;

const StyledAddressContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 0px 20px;
min-width: 250px;
`

const StyledMapContainer = styled.div`
min-width: 95vw;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

@media (min-width: 1000px) {
  min-width: 1vw;
}
`

const StyledCopyright = styled.div`
height: 30px;
margin-top: 50px;
background-color: white;
width: 100vw;
color: black;
display: flex;
justify-content: center;
align-items: center;
`

export default function Footer() {
  const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth(null);
    navigate("/");
  };

  const scrollToTop = () => {
    window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
  }

  return (
    <StyledFooterContainer>
      <StyledLinksContainer>
        <SubheadingStyle>Links</SubheadingStyle>
        <NavLink onClick={() => scrollToTop()} to="/">HOME</NavLink>
        <NavLink onClick={() => scrollToTop()} to="hotels">HOTELS</NavLink>
        <NavLink onClick={() => scrollToTop()} to="contact">CONTACT US</NavLink>
        {auth ? (
          <>
            <NavLink onClick={() => scrollToTop()} to="admin">ADMIN</NavLink>
            <LogoutButton onClick={handleLogout}>LOGOUT</LogoutButton>
          </>
        ) : (
          <NavLink onClick={() => scrollToTop()} to="login">LOGIN</NavLink>
        )}
      </StyledLinksContainer>
      <StyledAddressContainer>
          <SubheadingStyle>Visit us</SubheadingStyle>
          <a href="mailto:hansc256@gmail.com">EMAIL US</a>
          <a href="tel:624-14415">CALL US</a>
      </StyledAddressContainer>
      <StyledMapContainer>
        <SubheadingStyle>MAIN OFFICE</SubheadingStyle>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2308.711911816041!2d11.57204348502114!3d60.88360045098753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd27db360173032d6!2sChristiansfjell%20Fortress!5e0!3m2!1sen!2sno!4v1613760487502!5m2!1sen!2sno" width="250" height="250" style={{border:0}} allowFullScreen="yes" aria-hidden="false" tabIndex="0" title="Google Maps"></iframe>
      </StyledMapContainer>
      <StyledCopyright>Copyright &#169; Holidaze 2022</StyledCopyright>
    </StyledFooterContainer>
  );
}
