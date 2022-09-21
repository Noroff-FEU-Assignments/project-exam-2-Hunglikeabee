import styled from "styled-components"

export const StyledOrderContainer = styled.form`
background-color: white;
box-shadow: ${props => props.theme.shading.BoxShadow};
z-index: 9001;
position: absolute;
width: 500px;
max-width: 95vw;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
padding: 20px;
border-radius: 50px;
`