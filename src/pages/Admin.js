import { NavLink } from "react-router-dom";
import HeadingH1Style from "../components/general/HeadingH1Style";
import { useEffect } from "react";
import useCheckAuth from "../hooks/useCheckAuth";
import { StyledAdminPanel } from "../components/adminPage/StyledAdmin";

export default function Admin() {
  useCheckAuth();
  useEffect(() => {
    document.title = "Holidaze | Admin";
  });

  return (
    <>
      <HeadingH1Style>Admin</HeadingH1Style>
      <StyledAdminPanel>
        <NavLink to="/addhotel">Add Hotel</NavLink>
        <NavLink to="/messages">Messages</NavLink>
        <NavLink to="/enquiries">Enquiries</NavLink>
      </StyledAdminPanel>
    </>
  );
}
