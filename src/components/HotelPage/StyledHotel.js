import styled from "styled-components"

export const StyledHotelContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
`

export const StyledHotelInfoContainer = styled.div`
margin: 40px auto;
padding: 20px;
text-align: center;
display: flex;
flex-direction: row;
flex-wrap: wrap;
flex-direction: column;
justify-content: flex-start;
align-items: center;
box-shadow: ${props => props.theme.shading.BoxShadow};
border-radius: 50px;
width: 1000px;
max-width: 95vw;
`

export const StyledTextContainer = styled.div`
flex-direction: column;
justify-content: flex-start;
flex: 1;
max-width: 600px;
`

export const StyledDescriptionText = styled.p`
padding: 40px 20px;
background-color: white;
border-radius: 50px;
`



export const StyledPrice = styled.div`
background-color: ${props => props.theme.colors.LightYellow};
padding: 20px;
border-radius: 50px;
margin: 20px;
font-size: 30px;
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