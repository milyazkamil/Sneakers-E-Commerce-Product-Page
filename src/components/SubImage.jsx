const SubImage = ({ id, url, sendIdToMainImage }) => {
  const sendId = () => {
    sendIdToMainImage(id);
  };
  
  return (
    <div id="sub-image">
      <img
        id={id}
        src={url}
        onClick={sendId}
        alt="product image"
      />
    </div>
  )
}
export default SubImage;