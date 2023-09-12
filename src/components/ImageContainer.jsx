import { useState } from "react";
import MainImage from "./MainImage";
import SubImageContainer from "./SubImageContainer";

const ImageContainer = () => {
  const [idFromSubImage, setIdFromSubImage] = useState(1);

  const sendIdToMainImage = (id) => {
    setIdFromSubImage(id);
  };

  return (
    <>
      <div id="image-container">
        <MainImage idFromSubImage={idFromSubImage} />
        <SubImageContainer sendIdToMainImage={sendIdToMainImage} />
      </div>
    </>
  )
}
export default ImageContainer;