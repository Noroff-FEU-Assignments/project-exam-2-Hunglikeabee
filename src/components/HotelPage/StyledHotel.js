import styled from "styled-components"

export const StyledHotelContainer = styled.div`
margin: 20px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

export const StyledHero = styled.div`
background-position: center;
background-size: cover;
width: 600px;
max-width: 100%;
height: 400px;
border-radius: 50px;
`

export const StyledCarousel = styled.div`
display: flex;

`

export const StyledImageCarousel = styled.div`
width: 200px;
height: 200px;
margin: 10px auto;
background-position: center;
background-size: cover;
background-repeat: no-repeat;
`

export const StyledDescription = styled.div`
width: 400px;
max-width: 95%;
margin: 0 auto;
height: 200px;
border-radius: 50px;
padding: 20px;
background-color: white;
`

export const StyledFacilitiesContainer = styled.div`

`

export const StyledPrice = styled.div`

`

export const StyledOrderButton = styled.button`

`

export const StyledCloseButton = styled.div`
background-color: lightcoral;
display: flex;
justify-content: center;
align-items: center;
position: absolute;
border-radius: 50px;
box-shadow: ${props => props.theme.shading.BoxShadow};
top: -20px;
right: 10px;
width: 70px;
height: 70px;
color: white;
&:hover {
  background-color: lightgreen;
  color: black;
}
& svg {
  width: 40px;
  height: 40px;
}

`