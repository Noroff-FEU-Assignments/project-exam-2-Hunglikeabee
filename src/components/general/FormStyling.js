import styled from "styled-components"

export const StyledForm = styled.form`
max-width: 100vw;
`

export const StyledFieldSet = styled.fieldset`
display: flex;
flex-direction: column;
align-items: left;
justify-content: center;
width: ${props => props.maxWidth ? props.maxWidth : "600px"};
max-width: 90vw;
margin: 0 auto;
border: none;
`

export const StyledInput = styled.input`
width: 100%;
flex: 1;
max-width: 85vw;
margin: 10px;
padding: 10px;
border-radius: 50px;
font-size: 20px;
height: 50px;
border: none;
box-shadow: ${props => props.theme.shading.BoxShadow};
`

export const StyledTextArea = styled.textarea`
width: 100%;
font-size: 20px;
border-radius: 50px;
border: none;
padding: 20px;
margin: 10px;
resize: none;
height: 200px;
max-width: 85vw;
`

export const StyledEye = styled.div`
    color: white;
    & svg {
      width: 20px;
      height: 20px;
    }
`

export const StyledPasswordLayout = styled.div`
width: 100%;

display: flex;
flex: 1;
flex-direction: row;
align-items: center;
`

export const StyledFileInput = styled.input`
display: none;
`

export const StyledFieldLabel = styled.label`
cursor: pointer;
color: white;
padding: 5px;
margin: 10px;

& * {
  margin-right: 20px;
}

&:hover {
  color: ${props => props.theme.colors.LightPink}
}
`

export const StyledButton = styled.button`
    width: 200px;
    font-size: 26px;
    max-width: 80vw;
    border-radius: 50px;
    border: none;
    padding: 10px 20px;
    margin: 10px auto;
    background-color: lightgreen;
`