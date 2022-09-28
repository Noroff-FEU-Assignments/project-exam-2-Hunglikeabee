import styled from "styled-components";

export const StyledHotelMessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  & a {
    text-decoration: none;
    width: 400px;
    max-width: 95vw;
    color: ${(props) => props.theme.colors.Black};
    padding: 10px;
    border-radius: 50px;
    margin: 10px;
    background-color: ${(props) => props.theme.colors.White};
    box-shadow: ${(props) => props.theme.shading.BoxShadow};
  }

  & a:hover {
    color: ${(props) => props.theme.colors.LightPink};
    background-color: ${(props) => props.theme.colors.DarkGray};
  }
`;
