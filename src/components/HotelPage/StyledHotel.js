import styled from "styled-components";

export const StyledHotelContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledHotelInfoContainer = styled.div`
  position: relative;
  margin: 60px auto;
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
  max-width: 90%;
`;

export const StyledContainer = styled.div`
  margin-bottom: 40px;
  display: flex;
  flex-wrap: wrap;
  width: 95%;
  justify-content: space-evenly;
  align-items: flex-start;
`;

export const StyledTextContainer = styled.div`
  flex-direction: column;
  justify-content: flex-start;
  flex: 1;
  margin: 10px;
  min-width: 50vw;
  @media (min-width: 800px) {
    min-width: 0;
    width: 500px;
  }
`;

export const StyledDescriptionText = styled.p`
  padding: 40px 20px;
  background-color: white;
  color: black;
  min-height: 300px;
  width: 100%;
  border-radius: 50px;
  max-width: 95vw;
  box-shadow: ${(props) => props.theme.shading.BoxShadow};
`;

export const StyledPrice = styled.div`
  background-color: ${(props) => props.theme.colors.LightYellow};
  padding: 15px;
  border-radius: 50px;
  font-size: 18px;
  align-self: center;
  margin-bottom: 50px;
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
