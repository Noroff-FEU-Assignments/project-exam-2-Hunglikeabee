import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../context/AuthContext";
import { LogoutButton } from "../Header/components/StyledMenu";
import Subheading from "../general/Subheading";
import {
  StyledContainer,
  StyledFooterContainer,
  StyledLinksContainer,
  StyledAddressContainer,
  StyledMapContainer,
  StyledCopyright,
} from "./StyledFooter";

export default function Footer() {
  const [auth, setAuth] = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    setAuth(null);
    navigate("/");
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <StyledContainer>
      <StyledFooterContainer>
        <StyledLinksContainer>
          <Subheading>Links</Subheading>
          <NavLink onClick={() => scrollToTop()} to="/">
            HOME
          </NavLink>
          <NavLink onClick={() => scrollToTop()} to="hotels">
            HOTELS
          </NavLink>
          <NavLink onClick={() => scrollToTop()} to="contact">
            CONTACT US
          </NavLink>
          {auth ? (
            <>
              <NavLink onClick={() => scrollToTop()} to="admin">
                ADMIN
              </NavLink>
              <LogoutButton onClick={handleLogout}>LOGOUT</LogoutButton>
            </>
          ) : (
            <NavLink onClick={() => scrollToTop()} to="login">
              LOGIN
            </NavLink>
          )}
        </StyledLinksContainer>
        <StyledAddressContainer>
          <Subheading>INFO</Subheading>
          <a href="mailto:hansc256@gmail.com">EMAIL</a>
          <a href="tel:624-14415">CALL</a>
        </StyledAddressContainer>
        <StyledMapContainer>
          <Subheading>MAIN OFFICE</Subheading>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2308.711911816041!2d11.57204348502114!3d60.88360045098753!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xd27db360173032d6!2sChristiansfjell%20Fortress!5e0!3m2!1sen!2sno!4v1613760487502!5m2!1sen!2sno"
            width="200"
            height="250"
            style={{ border: 0 }}
            allowFullScreen="yes"
            aria-hidden="false"
            tabIndex="0"
            title="Google Maps"
          ></iframe>
        </StyledMapContainer>
      </StyledFooterContainer>
      <StyledCopyright>Copyright &#169; Holidaze 2022</StyledCopyright>
    </StyledContainer>
  );
}
