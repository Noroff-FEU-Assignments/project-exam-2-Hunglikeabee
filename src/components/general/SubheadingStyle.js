<<<<<<< HEAD
import styled from "styled-components";

const StyledHeading = styled.div`
  background-color: ${(props) => props.theme.LightYellow};
  font-size: 26px;
  border-radius: 0 50px 50px 0;
  margin-top: 40px;
  max-width: 90%;
  width: 600px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  box-shadow: inset 0px 0px 10px 5px rgba(0, 0, 0, 0.2);
  white-space: nowrap;
  overflow: hidden;

  @media (max-width: 500px) {
    font-size: 18px;
  }

  @media (max-width: 300px) {
    font-size: 12px;
  }

  @media (min-width: 800px) {
=======
import styled from "styled-components"

const StyledHeading = styled.div`
background-color: ${props => props.theme.LightYellow};
font-size: 26px;
border-radius: 0 50px 50px 0;
margin-top: 40px;
max-width: 90%;
width: 600px;
display: flex;
justify-content: center;
align-items: center;
height: 80px;
box-shadow: inset 0px 0px 10px 5px rgba(0,0,0, 0.2);
white-space: nowrap;
overflow: hidden;


@media (max-width: 500px) {
    font-size: 18px;
}

@media (max-width: 300px) {
    font-size: 12px;
}

@media (min-width: 800px) {
>>>>>>> e3ef20bba6e6e8665ebd60adc5001051a363fa24
    border-radius: 50px;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
<<<<<<< HEAD
  }
`;

const StyledFirstLetter = styled.h2`
  color: ${(props) => props.theme.colors.LightPink};
`;

const StyledRestLetter = styled.h2`
  color: ${(props) => props.theme.colors.Black};
`;

export default function SubheadingStyle(props) {
  const FirstLetter = props.children.charAt(0);
  const PropsText = props.children.slice(1);

  return (
    <StyledHeading {...props}>
      <StyledFirstLetter>{FirstLetter}</StyledFirstLetter>
      <StyledRestLetter>{PropsText}</StyledRestLetter>
    </StyledHeading>
  );
}
=======
}
`

const StyledFirstLetter = styled.h2`
color: ${props => props.theme.colors.LightPink};
`

const StyledRestLetter = styled.h2`
color: ${props => props.theme.colors.Black};
`

export default function SubheadingStyle(props) {
    const FirstLetter = props.children.charAt(0);
    const PropsText = props.children.slice(1);

    return (
    <StyledHeading {...props}>
        <StyledFirstLetter>{FirstLetter}</StyledFirstLetter>
        <StyledRestLetter>{PropsText}</StyledRestLetter>
    </StyledHeading>
    )
}
>>>>>>> e3ef20bba6e6e8665ebd60adc5001051a363fa24
