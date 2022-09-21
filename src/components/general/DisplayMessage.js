import styled from "styled-components";

const StyledMessage = styled.div`
  width: 500px;
  max-width: 90%;
  border-radius: 50px;
  background-color: ${props => props.error ? "lightcoral" : props.success ? "lightgreen" : props.warning ? "yellow" : "lightcoral"};
  font-size: 18px;
  padding: 2px;
  text-align: center;
  margin: 0px auto;
`;

export default function DisplayMessage(props) {
  return <StyledMessage{...props}>{props.children}</StyledMessage>;
}
