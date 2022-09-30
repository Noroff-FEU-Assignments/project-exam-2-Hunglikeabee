import { StyledHeading, StyledFirstLetter, StyledRestLetter } from "./SubheadingStyle";

export default function Subheading(props) {
  const FirstLetter = props.children.charAt(0);
  const PropsText = props.children.slice(1);

  return (
    <StyledHeading {...props}>
      <StyledFirstLetter>{FirstLetter}</StyledFirstLetter>
      <StyledRestLetter {...props}>{PropsText}</StyledRestLetter>
    </StyledHeading>
  );
}
