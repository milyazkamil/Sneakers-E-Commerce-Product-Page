import { useEffect, useState } from "react";
import { images } from "../data";

const MainImage = (idFromSubImage) => {
  const [mainImageId, setMainImageId] = useState(1);
  const [imageUrl, setImageUrl] = useState(
    images[Object.values(idFromSubImage)[0] - 1].url
  );

  useEffect(() => {
    setMainImageId(Object.values(idFromSubImage)[0]);
    setImageUrl(images[Object.values(idFromSubImage)[0] - 1].url)
  }, [idFromSubImage]);

  return (
    <div id="main-image">
      <img src={imageUrl} id={mainImageId} alt="product image" />
    </div>
  )
}
export default MainImage;