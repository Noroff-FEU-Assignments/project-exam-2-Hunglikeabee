import styled from "styled-components";

export const StyledContainer = styled.div`
border-top: 3px solid ${(props) => props.theme.colors.White};
margin-top: 100px;
`

export const StyledFooterContainer = styled.div`
  margin: auto;
  margin-top: 100px;
  max-width: 1000px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  & a {
    padding: 10px;
    text-decoration: none;
    color: ${(props) => props.theme.colors.White};
  }

  & a:hover {
    color: ${(props) => props.theme.colors.LightPink};
  }
`;

export const StyledLinksContainer = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: 0px 20px;
  min-width: 250px;
  max-width: 98vw;
`;

export const StyledAddressContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px 20px;
  min-width: 250px;
  max-width: 98vw;
`;

export const StyledMapContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

`;

export const StyledCopyright = styled.div`
  height: 30px;
  margin-top: 50px;
  background-color: ${(props) => props.theme.colors.White};
  color: ${(props) => props.theme.colors.Black};
  display: flex;
  justify-content: center;
  align-items: center;
`;