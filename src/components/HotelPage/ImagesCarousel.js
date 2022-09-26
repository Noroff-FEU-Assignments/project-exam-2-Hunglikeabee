import styled from "styled-components"
import "react-image-gallery/styles/css/image-gallery.css";
import ReactImageGallery from "react-image-gallery"


const StyledGallery = styled(ReactImageGallery)`
& * {
  height: 250px !important;
}
  `

export default function ImagesCarousel({images}) {

  console.log(images)

  const imageTest = images.map(image => {
       return ({
        original: image.attributes.formats.medium.url ? image.attributes.formats.medium.url : image.attributes.formats.small.url,
        thumbnail: image.attributes.formats.small.url,
      })
    })


  console.log(imageTest)

  return(
    <StyledGallery items={imageTest}></StyledGallery>
  )
}