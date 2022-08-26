import styled from "styled-components";

const StyledLoading = styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: 0 auto;
width: 150px;
height: 150px;
position: relative;
overflow: hidden;
`

const LoadingLine = styled.div`
position: absolute;
border-radius: 50%;
width: 100%;
height: 100%;
border: 10px solid transparent;
mix-blend-mode: overlay;
${props => props.location ? `border-${props.location}-color: ${props.linecolor};` : ""}

animation: rotateLoader ${props => props.duration ? props.duration : "1s"}  ${props => props.timing ? props.timing : "linear"} infinite;


@keyframes rotateLoader {
    0%{
        transform: rotate(0deg)
    }
    100%{
        transform: rotate(360deg)
    }
}
`

export default function LoadingWheel() {
    return <StyledLoading>
                <LoadingLine linecolor="lightcoral" location="top" duration="1.5s" timing="ease-out" />
                <LoadingLine linecolor="lightblue" location="left" duration="2s" timing="ease-in-out" />
                <LoadingLine linecolor="lightgreen" location="right" duration="3s" timing="linear"/>
            </StyledLoading>

}