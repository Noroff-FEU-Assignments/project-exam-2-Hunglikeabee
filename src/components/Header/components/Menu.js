import { NavLink, useNavigate } from "react-router-dom"

import { useContext } from "react"
import AuthContext from "../../../context/AuthContext"

import { StyledMenu, LogoutButton } from "./StyledMenu"



export default function Menu() {

  const navigate = useNavigate()

  const [auth, setAuth] = useContext(AuthContext)

  const handleLogout = () => {
    setAuth(null)
    navigate("/")
  }

  let activeStyle = {
    color: "#FF82E9"
  };

  return (
    <StyledMenu>
      <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="/">HOME</NavLink>
      <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="hotels">HOTELS</NavLink>
      <NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="contact">CONTACT US</NavLink>
      {auth ? <><NavLink style={({ isActive }) =>
              isActive ? activeStyle : undefined
            } to="admin">ADMIN</NavLink><LogoutButton onClick={handleLogout}>LOGOUT</LogoutButton></> : <NavLink style={({ isActive }) =>
            isActive ? activeStyle : undefined
          } to="login">LOGIN</NavLink> }
    </StyledMenu>
  )
}