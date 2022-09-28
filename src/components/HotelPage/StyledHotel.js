import styled from "styled-components";

export const StyledHotelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledHotelInfoContainer = styled.div`
  position: relative;
  margin: 40px auto;
  padding: 20px;
  text-align: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  box-shadow: ${(props) => props.theme.shading.BoxShadow};
  border-radius: 50px;
  width: 1000px;
  max-width: 95vw;
`;

export const StyledContainer = styled.div`
margin-bottom: 40px;
`

export const StyledTextContainer = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  max-width: 600px;
`;

export const StyledDescriptionText = styled.p`
  padding: 40px 20px;
  background-color: white;
  color: black;
  border-radius: 50px;
  box-shadow: ${(props) => props.theme.shading.BoxShadow};
`;

export const StyledPrice = styled.div`
  position: absolute;
  bottom: -40px;
  background-color: ${(props) => props.theme.colors.LightYellow};
  padding: 15px;
  border-radius: 50px;
  font-size: 24px;
  align-self: end;
`;

export const StyledCloseButton = styled.div`
  background-color: lightcoral;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  border-radius: 50px;
  box-shadow: ${(props) => props.theme.shading.BoxShadow};
  top: -20px;
  right: 10px;
  width: 70px;
  height: 70px;
  color: ${(props) => props.theme.colors.White};
  &:hover {
    background-color: lightgreen;
    color: ${(props) => props.theme.colors.Black};
  }
  & svg {
    width: 40px;
    height: 40px;
  }
`;
