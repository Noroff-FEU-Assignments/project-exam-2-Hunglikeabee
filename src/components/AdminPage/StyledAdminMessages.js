import styled from "styled-components";

export const StyledMessagesContainer = styled.div`
  margin: 40px auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const StyledSingleContainer = styled.div`
  position: relative;
  width: 500px;
  max-width: 95vw;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.colors.DarkGray};
  box-shadow: ${(props) => props.theme.shading.BoxShadow};
  color: ${(props) => props.theme.colors.White};
  border-radius: 50px;
  margin: 20px;
  padding: 20px;
`;

export const StyledName = styled.p`
  padding-top: 10px;
  font-size: 22px;
`;

export const StyledDate = styled.p`
  font-size: 14px;
`;

export const StyledEmail = styled.p`
  padding-bottom: 10px;
`;

export const StyledMessage = styled.p`
  flex: 1;
  background-color: ${(props) => props.theme.colors.White};
  color: ${(props) => props.theme.colors.Black};
  border-radius: 50px;
  padding: 20px;
`;
