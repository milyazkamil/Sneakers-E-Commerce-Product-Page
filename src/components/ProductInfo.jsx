import { useState } from "react";
import AddToCart from "./AddToCart";
import ProductCount from "./ProductCount";
import ProductPrice from "./ProductPrice";

const ProductInfo = ({ setProducts }) => {
  const [productCount, setProductCount] = useState(0);

  return (
    <section id="product-info">
      <h2 id="sub-title">SNEAKER COMPANY</h2>
      <h1 id="main-title">Fall Limited Edition Sneakers</h1>
      <p id="product-description">
        These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber out sole, they'll withstand everything the weather can offer.
      </p>
      <ProductPrice />
      <div>
        <ProductCount productCount={productCount} setProductCount={setProductCount} />
        <AddToCart productCount={productCount} setProducts={setProducts} />
      </div>
    </section>
  )
}
export default ProductInfo;