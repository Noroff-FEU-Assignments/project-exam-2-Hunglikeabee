import styled from "styled-components";

export const StyledContainer = styled.div`
  margin-top: 50px;
  border-top: 3px solid ${(props) => props.theme.colors.White};
`;

export const StyledActivitiesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1200px;
  margin: 0 auto;
`;

export const StyledActivityContainer = styled.a`
  width: 250px;
  max-width: 95vw;
  background-color: white;
  text-decoration: none;
  color: black;
  display: flex;
  flex-direction: column;
  margin: 20px;
  border-radius: 50px 0px;
  box-shadow: ${(props) => props.theme.shading.BoxShadow};
  &:hover button {
    color: ${(props) => props.theme.colors.LightPink};
    background-color: black;
  }
`;

export const StyledTitle = styled.h3`
  height: 80px;
  padding-top: 30px;
  margin-bottom: 20px;
  font-size: 22px;
  text-align: center;
`;

export const StyledImage = styled.div`
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  border-radius: 50px 0px;
`;

export const StyledDescription = styled.p`
  flex: 1;
  padding: 10px;
  margin: 20px 0px 0px 0px;
`;

export const StyledButton = styled.button`
  padding: 10px;
  border: none;
  color: black;
  background-color: ${(props) => props.theme.colors.LightYellow};
  font-size: 22px;
  cursor: pointer;
  margin-top: 20px;
  border-radius: 0px 0px 50px 0px;
`;
