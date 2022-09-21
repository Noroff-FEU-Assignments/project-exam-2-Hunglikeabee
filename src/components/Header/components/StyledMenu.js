import styled from "styled-components"

export const StyledMenu = styled.div`
display: flex;
align-items: center;

& a {
  padding: 15px;
  text-decoration: none;
  font-size: 22px;
  color: ${props => props.theme.colors.Black}

}

& a:hover {
  color: ${props => props.theme.colors.LightPink}
}

@media (max-width: 799px) {
  display: none;
}
`

export const LogoutButton = styled.button`
margin: 15px;
width: 76px;
height: 40px;
font-size: 22px;
border-radius: 50px;
background-color: ${props => props.theme.colors.Black};
color: ${props => props.theme.colors.LightPink};
border: none;
cursor: pointer;

&:hover {
  color: ${props => props.theme.colors.Black};
  background-color: ${props => props.theme.colors.LightPink};
}
`