import styled from "styled-components";

export const StyledIcon = styled.div`
  width: 30px;
  height: 30px;
  margin-right: 20px;
  color: ${(props) => props.theme.colors.Black};
`;

export const StyledFacilities = styled.div`
  display: flex;
  flex-direction: column;
  min-width: 250px;
  margin: 10px;
`;

export const StyledFacility = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: left;
  align-items: center;
  margin: 10px;
  background-color: white;
  color: black;
  padding: 10px 20px;
  border-radius: 50px;
  box-shadow: ${(props) => props.theme.shading.BoxShadow};
`;