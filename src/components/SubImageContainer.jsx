import { images } from "../data";
import SubImage from "./SubImage";

const SubImageContainer = ({ sendIdToMainImage }) => {
  return (
    <>
      <div id="sub-image-container">
        {
          images.map((image) => (
            <SubImage
              key={image.id}
              id={image.id}
              url={image.url}
              sendIdToMainImage={sendIdToMainImage}
            />
          ))
        }
      </div>
    </>
  )
}
export default SubImageContainer;