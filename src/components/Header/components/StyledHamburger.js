import styled from "styled-components";

export const StyledMenu = styled.div`
  position: relative;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 30px;

  @media (min-width: 800px) {
    display: none;
  }
`;

export const StyledShowMenu = styled.div`
  position: fixed;
  z-index: 8999;
  width: 500px;
  max-width: 100%;
  height: 600px;
  top: 0%;
  right: 0%;
  bottom: 0%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: black;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  border-radius: 10px;

  & a {
    padding: 5px;
    font-size: 22px;
    background-color: black;
    color: white;
    text-decoration: none;
  }

  & a:hover {
    color: lightgreen;
  }
`;

export const StyledBlackOverylay = styled.div`
  z-index: 8998;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.5);
`;

export const StyledHamburger = styled.div`
  z-index: 9001;
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  & .openMenu {
    background: transparent;
  }

  & .openMenu::before {
    transform: rotate(45deg);
    background-color: ${props => props.theme.colors.LightPink};
  }

  & .openMenu::after {
    transform: rotate(-45deg);
    background-color: ${props => props.theme.colors.Black};
  }
`;

export const StyledBars = styled.div`
  position: relative;
  width: 40px;
  height: 5px;
  background: black;
  border-radius: 5px;
  transition: all 0.25s ease-in-out;

  &::before,
  &::after {
    content: "";
    position: absolute;
    width: 45px;
    height: 5px;
    background: black;
    border-radius: 5px;
    transition: all 0.25s ease-in-out;
  }

  &::before {
    transform: translateY(-13px);
  }
  &::after {
    transform: translateY(13px);
  }
`;