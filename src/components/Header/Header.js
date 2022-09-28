import Logo from "./components/Logo";
import Hamburger from "./components/Hamburger";
import Menu from "./components/Menu";
import { StyledMenuContainer, StyledMenu } from "./StyledHeader";

export default function Header() {
  return (
    <StyledMenuContainer>
      <StyledMenu>
        <Logo />
        <Menu />
        <Hamburger />
      </StyledMenu>
      
    </StyledMenuContainer>
  );
}
