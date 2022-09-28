import styled from "styled-components";
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery";

const StyledGallery = styled(ReactImageGallery)`
`;

export default function ImagesCarousel({ images }) {
  const imageTest = images.map((image) => {
    return {
      original: image.attributes.formats.medium.url
        ? image.attributes.formats.medium.url
        : image.attributes.formats.small.url,
      thumbnail: image.attributes.formats.small.url,
    };
  });
  return <StyledGallery items={imageTest}></StyledGallery>;
}
