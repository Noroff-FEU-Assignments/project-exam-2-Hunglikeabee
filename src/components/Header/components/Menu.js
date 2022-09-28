import { NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import AuthContext from "../../../context/AuthContext";
import { StyledMenu, LogoutButton } from "./StyledMenu";

export default function Menu() {
  const navigate = useNavigate();

  const [auth, setAuth] = useContext(AuthContext);

  const handleLogout = () => {
    setAuth(null);
    navigate("/");
  };

  let activeStyle = {
    color: "#FF82E9",
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <StyledMenu>
      <NavLink
        onClick={() => scrollToTop()}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="/"
      >
        HOME
      </NavLink>
      <NavLink
        onClick={() => scrollToTop()}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="hotels"
      >
        HOTELS
      </NavLink>
      <NavLink
        onClick={() => scrollToTop()}
        style={({ isActive }) => (isActive ? activeStyle : undefined)}
        to="contact"
      >
        CONTACT US
      </NavLink>
      {auth ? (
        <>
          <NavLink
            onClick={() => scrollToTop()}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="admin"
          >
            ADMIN
          </NavLink>
          <LogoutButton onClick={handleLogout}>LOGOUT</LogoutButton>
        </>
      ) : (
        <NavLink
          onClick={() => scrollToTop()}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="login"
        >
          LOGIN
        </NavLink>
      )}
    </StyledMenu>
  );
}
