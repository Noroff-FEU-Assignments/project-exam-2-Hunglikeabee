import styled from "styled-components";

const StyledLine = styled.div`
width: 800px;
max-width: 90%;
margin: 20px auto;
border: 1px solid white;
height: 2px;
`

const StyledParagraph = styled.p`
color: ${props => props.theme.colors.White};
max-width: 400px;
margin: 20px auto;
text-align: center;
`

export default function Paragraph(props) {
    return (
    <>
        <StyledLine />
        <StyledParagraph>{props.children}</StyledParagraph>
    </>
    )
}