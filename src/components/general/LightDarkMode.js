import styled from "styled-components"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faLightbulb } from "@fortawesome/free-regular-svg-icons"

const StyledBulbContainer = styled.div`
width: 40px;
height: 40px;
color: yellow;
position: fixed;
bottom: 10px;
right: 10px;
padding: 10px;
background-color: ${props => props.theme.colors.White};
color: ${props => props.theme.colors.Black};
display: flex;
justify-content: center;
align-items: center;
border-radius: 50px;
z-index: 9001
`

export default function LightDarkMode(props) {
  return (
    <StyledBulbContainer onClick={props.changeDarkLight}>
      <FontAwesomeIcon icon={faLightbulb} />
    </StyledBulbContainer>
  )
}