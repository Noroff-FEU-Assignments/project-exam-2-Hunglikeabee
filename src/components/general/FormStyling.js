import styled from "styled-components";

export const StyledForm = styled.form`
  width: 800px;
  margin: 0 auto;
  max-width: 100vw;
`;

export const StyledFieldSet = styled.fieldset`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.maxWidth ? props.maxWidth : "600px")};
  max-width: 90vw;
  margin: 0 auto;
  border: none;
`;

export const StyledInput = styled.input`
  width: 90%;
  flex: 1;
  margin: 10px auto;
  padding: 10px;
  border-radius: 50px;
  font-size: 20px;
  height: 50px;
  border: none;
  box-shadow: ${(props) => props.theme.shading.BoxShadow};
`;

export const StyledTextArea = styled.textarea`
  width: 100%;
  font-size: 20px;
  border-radius: 50px;
  border: none;
  padding: 20px;
  margin: 10px;
  resize: none;
  height: 200px;
  max-width: 85vw;
  box-shadow: ${(props) => props.theme.shading.BoxShadow};
`;

export const StyledEye = styled.div`
  color: ${(props) => props.theme.colors.White};
  margin-left: 10px;
  & svg {
    width: 20px;
    height: 20px;
  }
`;

export const StyledPasswordLayout = styled.div`
  width: 90%;
  display: flex;
  flex: 1;
  flex-direction: row;
  align-items: center;
`;

export const StyledFileInput = styled.input`
  display: none;
`;

export const StyledFieldLabel = styled.label`
  cursor: pointer;
  color: ${(props) => props.theme.colors.White};
  padding: 10px;
  margin: 10px;
  font-size: 20px;
  box-shadow: ${(props) => props.theme.shading.BoxShadow};
  border-radius: 50px;
  max-width: 85%;

  & * {
    margin-right: 20px;
  }

  &:hover {
    color: ${(props) => props.theme.colors.LightPink};
  }

  & input {
    margin: 10px;
  }
`;

export const StyledFacilitiesContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 90vw;
  align-items: end;
  justify-content: left;
  margin-bottom: 30px;
`;

export const StyledFacilityContainer = styled.div`
  margin: 15px;
`;

export const StyledButton = styled.button`
  width: 200px;
  font-size: 26px;
  max-width: 80vw;
  border-radius: 50px;
  border: none;
  padding: 10px 20px;
  margin: 10px auto;
  background-color: ${(props) => props.theme.colors.LightBlue};
  cursor: pointer;
  box-shadow: ${(props) => props.theme.shading.BoxShadow};

  &:hover {
    background-color: ${(props) => props.theme.colors.Black};
    color: ${(props) => props.theme.colors.LightPink};
  }
`;
