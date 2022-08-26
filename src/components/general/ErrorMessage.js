import styled from "styled-components"

const StyledError = styled.div`
width: 300px;
max-width: 80vw;
border: 1px solid red;
background-color: lightcoral;
font-size: 26px;
text-align: center;
margin: 0px auto;
`

export default function ErrorMessage(props) {
  return (
    <StyledError>{props.children}</StyledError>
  )
}
