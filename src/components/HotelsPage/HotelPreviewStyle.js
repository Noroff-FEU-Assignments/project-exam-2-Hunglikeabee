import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledHotelsContainer = styled.div`
  position: relative;
`;

export const StyledHotels = styled(NavLink)`
  position: relative;
  display: flex;
  flex-direction: column;
  height: 350px;
  width: 300px;
  max-width: 95%;
  border-radius: 50px;
  box-shadow: ${(props) => props.theme.shading.BoxShadow};
  text-decoration: none;
  overflow: hidden;
  background-color: none;
`;

export const StyledTop = styled.div`
  display: flex;
  font-size: 22px;
  justify-content: center;
  align-items: center;
  height: 60px;
  border-radius: 50px 50px 0 0;
  background-color: ${(props) => props.theme.colors.DarkGray};
`;

export const StyledImage = styled.img`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  height: 200px;
  width: 100%;
  object-fit: cover;

  &:hover {
    transform: scale(1.6);
  }
`;

export const StyledBottom = styled.div`
  display: flex;
  font-size: 22px;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  padding-left: 30px;
  padding-right: 30px;
  border-radius: 0 0 50px 50px;
  background-color: ${(props) => props.theme.colors.DarkGray};
  color: ${(props) => props.theme.colors.White};
`;

export const StyledFirstLetter = styled.h2`
  color: ${(props) => props.theme.colors.LightPink};
`;

export const StyledRestLetter = styled.h2`
  color: ${(props) => props.theme.colors.White};
`;
