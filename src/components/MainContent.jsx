import ImageContainer from "./ImageContainer";
import ProductInfo from "./ProductInfo";

const MainContent = ({ setProducts }) => {
  return (
    <section id="main-content">
      <ImageContainer />
      <ProductInfo setProducts={setProducts} />
    </section>
  )
}
export default MainContent;