import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";

export default function ShowStarsRating(starNumber) {
  switch (starNumber) {
    case 1:
      return <FontAwesomeIcon icon={faStar} />;
    case 1.5:
      return (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarHalfStroke} />
        </>
      );
    case 2:
      return (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </>
      );
    case 2.5:
      return (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarHalfStroke} />
        </>
      );
    case 3:
      return (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </>
      );
    case 3.5:
      return (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarHalfStroke} />
        </>
      );
    case 4:
      return (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </>
      );
    case 4.5:
      return (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStarHalfStroke} />
        </>
      );
    case 5:
      return (
        <>
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
          <FontAwesomeIcon icon={faStar} />
        </>
      );
    default:
      return <div>Unknown</div>;
  }
}
