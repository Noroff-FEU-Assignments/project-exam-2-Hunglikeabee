import styled from "styled-components"

export const StyledMessagesContainer = styled.div`
margin: 40px auto;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

`

export const StyledSingleContainer = styled.div`
position: relative;
width: 500px;
max-width: 95vw;
display: flex;
flex-direction: column;
background-color: ${props => props.theme.colors.DarkGray};
box-shadow: ${props => props.theme.shading.BoxShadow};
color: white;
border-radius: 50px;
margin: 20px;
padding: 20px;
`

export const StyledName = styled.p`
padding-top: 10px;
font-size: 22px;
`

export const StyledDate = styled.p`
font-size: 14px;
`

export const StyledEmail = styled.p`
padding-bottom: 10px;
`

export const StyledMessage = styled.p`
flex: 1;
background-color: ${props => props.theme.colors.White};
color: black;
border-radius: 50px;
padding: 20px;
`

export const StyledClose = styled.div`
position: absolute;
z-index: 50;
top: -15px;
right: 10px;
margin: 10px;
cursor: pointer;
background-color: white;
border-radius: 50px;
padding: 10px;
box-shadow: ${props => props.theme.shading.BoxShadow};
transition: 0.2s ease-in-out;

& svg {
  height: 25px;
  width: 25px;
  color: red;
}

&:hover {
  padding: 15px;
  margin: 5px;
}
&:hover svg {
  color: green;
}
`

export const StyledPrompt = styled.div`
border-radius: 50px;
position: fixed;
z-index: 100;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
width: 300px;
height: 300px;
max-width: 95vw;
max-height: 80vh;
background-color: black;
box-shadow: ${props => props.theme.shading.BoxShadow};
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`