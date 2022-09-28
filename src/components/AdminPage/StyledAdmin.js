import styled from "styled-components";

export const StyledAdminPanel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & a {
    padding: 5px;
    margin: 10px;
    border-radius: 50px;
    box-shadow: ${(props) => props.theme.shading.BoxShadow};
    background-color: white;
    text-decoration: none;
    font-size: 26px;
    width: 400px;
    max-width: 90vw;
    text-align: center;
    color: black;
  }

  & a:hover {
    background-color: ${(props) => props.theme.colors.DarkGray};
    color: ${(props) => props.theme.colors.LightPink};
  }
`;