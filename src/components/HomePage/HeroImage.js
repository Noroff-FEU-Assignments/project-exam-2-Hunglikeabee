<<<<<<< HEAD
import HeroImage from "../../images/fernando-alvarez-rodriguez-M7GddPqJowg-unsplash.jpg";
import styled from "styled-components";

const StyledHero = styled.div`
  background-image: url(${HeroImage});
  background-size: cover;
  background-position: center;
  height: 400px;
  width: 600px;
  max-width: 95%;
  margin: 0 auto;
  border-radius: 50px;
  box-shadow: ${(props) => props.theme.shading.BoxShadow};
`;

export default function Hero() {
  return <StyledHero></StyledHero>;
}
=======
import HeroImage from "../../images/fernando-alvarez-rodriguez-M7GddPqJowg-unsplash.jpg"
import styled from "styled-components"


const StyledHero = styled.div`
background-image: url(${HeroImage});
background-size: cover;
background-position: center;
height: 400px;
width: 600px;
max-width: 95%;
margin: 0 auto;
border-radius: 50px;
box-shadow: ${props => props.theme.shading.BoxShadow};
`

export default function Hero() {
    return (
        <StyledHero></StyledHero>
    )

}
>>>>>>> e3ef20bba6e6e8665ebd60adc5001051a363fa24
