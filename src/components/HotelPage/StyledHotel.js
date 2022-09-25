import styled from "styled-components"

export const StyledHotelContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

export const StyledHotelInfoContainer = styled.div`
margin: 0 auto;
padding: 20px;
text-align: center;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
align-items: center;
box-shadow: ${props => props.theme.shading.BoxShadow};
border-radius: 50px;
`

export const StyledTextContainer = styled.div`
display: flex;
flex: 1;
background-color: white;
border-radius: 50px;

`

export const StyledDescriptionText = styled.p`
margin: 20px;
max-width: 500px;
`



export const StyledPrice = styled.div`
background-color: ${props => props.theme.colors.LightYellow};
padding: 20px;
border-radius: 50px;
margin: 20px;
font-size: 30px;
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