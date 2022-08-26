import styled from "styled-components";

import Logo from "./components/Logo";
import Hamburger from "./components/Hamburger"
import Menu from "./components/Menu";


const StyledMenuContainer = styled.div`
height: 120px;
width: 100%;
background-color: white;
box-shadow: 0px 0px 10px 5px black;
display: flex;
align-items: center;
`

const StyledMenu = styled.div`
width: 100%;
max-width: 1000px;
margin: 0 auto;
display: flex;
justify-content: space-between;

`

export default function Header() {
  return (
    <StyledMenuContainer>
      <StyledMenu>
        <Logo />
        <Menu />
        <Hamburger />
      </StyledMenu>
    </StyledMenuContainer>
    )
}