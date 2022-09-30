import styled from "styled-components";
import Carousel from "react-gallery-carousel";
import "react-gallery-carousel/dist/index.css"

const StyledImageGallery = styled(Carousel)`
& ul {
  background-color: ${props => props.theme.colors.DarkGray};
}
& img {
  object-fit: contain;
  background-color: ${props => props.theme.colors.DarkGray};
}
`

export default function ImagesCarousel({ images }) {
  const imageTest = images.map((image) => {
    return {
      src: image.attributes.formats.medium.url
        ? image.attributes.formats.medium.url
        : image.attributes.formats.small.url,
    };
  });

  return <StyledImageGallery zIndexAtMax={"9004"} hasMediaButton={false} images={imageTest} style={{height: "300px", width: "600px", maxWidth: "100vw"}} />
}