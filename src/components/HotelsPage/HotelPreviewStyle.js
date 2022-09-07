import styled from "styled-components"
import { Link } from "react-router-dom";

export const StyledHotels = styled(Link)`
display: flex;
flex-direction: column;
height: 350px;
width: 300px;
max-width: 95%;
<<<<<<< HEAD
border-radius: 50px;
box-shadow: ${props => props.theme.shading.BoxShadow};
text-decoration: none;
overflow: hidden;
background-color: none;
=======
border-radius: 55px;
background-color: white;
box-shadow: ${props => props.theme.shading.BoxShadow};
margin: 30px auto;
text-decoration: none;
>>>>>>> e3ef20bba6e6e8665ebd60adc5001051a363fa24
`

export const StyledTop = styled.div`
display: flex;
font-size: 22px;
justify-content: center;
align-items: center;
height: 60px;
border-radius: 50px 50px 0 0;
<<<<<<< HEAD
=======
border: none;
>>>>>>> e3ef20bba6e6e8665ebd60adc5001051a363fa24
background-color: ${props => props.theme.colors.DarkGray};
`

export const StyledImage = styled.div`
flex: 1;
display: flex;
<<<<<<< HEAD
background-repeat: no-repeat;
=======
>>>>>>> e3ef20bba6e6e8665ebd60adc5001051a363fa24
justify-content: center;
align-items: center;
background-size: cover;
background-position: center;
<<<<<<< HEAD
transition: 0.5s;

&:hover {
  transform: scale(1.6);
}
=======
>>>>>>> e3ef20bba6e6e8665ebd60adc5001051a363fa24
`

export const StyledBottom = styled.div`
display: flex;
font-size: 22px;
justify-content: space-between;
align-items: center;
height: 60px;
padding-left: 30px;
padding-right: 30px;
border-radius: 0 0 50px 50px;
background-color: ${props => props.theme.colors.DarkGray};
color: ${props => props.theme.colors.White};
`

export const StyledFirstLetter = styled.h2`
color: ${props => props.theme.colors.LightPink};
`

export const StyledRestLetter = styled.h2`
color: ${props => props.theme.colors.White};
`