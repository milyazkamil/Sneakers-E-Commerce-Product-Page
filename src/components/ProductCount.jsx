const ProductCount = ({ productCount, setProductCount }) => {
  return (
    <div id="product-count">
      <button
        type="button"
        onClick={() => setProductCount(productCount !== 0 ? productCount - 1 : 0)}
      >
        -
      </button>
      <span>{productCount}</span>
      <button type="button" onClick={() => setProductCount((prev) => prev + 1)}>
        +
      </button>
    </div>
  )
}
export default ProductCount;