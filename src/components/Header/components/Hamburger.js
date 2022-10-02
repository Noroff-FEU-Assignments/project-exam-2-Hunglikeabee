import { useState, useContext } from "react";
import {
  StyledMenu,
  StyledShowMenu,
  StyledBlackOverylay,
  StyledHamburger,
  StyledBars,
} from "./StyledHamburger";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../../context/AuthContext";
import { LogoutButton } from "./StyledMenu";

export default function Hamburger() {
  const [hamburgerState, setHamburger] = useState(false);

  const handleMenu = () => {
    scrollToTop();
    setHamburger((prev) => !prev);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      setHamburger((prev) => !prev);
    }
  };

  const navigate = useNavigate();

  const [auth, setAuth] = useContext(AuthContext);

  const handleLogout = () => {
    setAuth(null);
    handleMenu();
    navigate("/");
  };

  let activeStyle = {
    color: "#FF82E9",
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  const showMenu = (
    <>
      <StyledShowMenu>
        <NavLink
          onClick={handleMenu}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="/"
        >
          HOME
        </NavLink>
        <NavLink
          onClick={handleMenu}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="hotels"
        >
          HOTELS
        </NavLink>
        <NavLink
          onClick={handleMenu}
          style={({ isActive }) => (isActive ? activeStyle : undefined)}
          to="contact"
        >
          CONTACT US
        </NavLink>
        {auth ? (
          <>
            <NavLink
              onClick={handleMenu}
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
              to="admin"
            >
              ADMIN
            </NavLink>
            <LogoutButton onClick={handleLogout}>LOGOUT</LogoutButton>
          </>
        ) : (
          <NavLink
            onClick={handleMenu}
            style={({ isActive }) => (isActive ? activeStyle : undefined)}
            to="login"
          >
            LOGIN
          </NavLink>
        )}
      </StyledShowMenu>
      <StyledBlackOverylay onClick={handleMenu} />
    </>
  );

  return (
    <StyledMenu>
      <StyledHamburger
        aria-label="Hamburger menu"
        tabIndex={0}
        onKeyDown={(e) => handleKeyDown(e)}
        onClick={() => setHamburger((prev) => !prev)}
      >
        <StyledBars className={hamburgerState ? "openMenu" : ""} />
      </StyledHamburger>
      {hamburgerState ? showMenu : ""}
    </StyledMenu>
  );
}
