import styled from "styled-components";

export const StyledField = styled.fieldset`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
border: none;

`

export const StyledEye = styled.div`
    color: white;
    padding-left: 10px;

    & svg {
      width: 20px;
      height: 20px;
    }
`

export const StyledPasswordLayout = styled.div`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
width: 300px;
max-width: 90;
`
