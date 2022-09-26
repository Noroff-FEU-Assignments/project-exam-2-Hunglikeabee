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

const StyledFixedMessage = styled.div`
  width: 500px;
  position: fixed;
  top: 150px;
  left: 50%;
  transform: translateX(-50%);
  max-width: 90%;
  border-radius: 50px;
  background-color: ${props => props.error ? "lightcoral" : props.success ? "lightgreen" : props.warning ? "yellow" : "lightcoral"};
  font-size: 18px;
  padding: 20px;
  text-align: center;
`


export default function DisplayMessage(props) {
  return <StyledMessage{...props}>{props.children}</StyledMessage>;
}


export function DisplayFixedMessage(props) {
  return <StyledFixedMessage{...props}>{props.children}</StyledFixedMessage>;
}