import CartSvg from "./SvgComponents/CartSvg";

const AddToCart = ({ setProducts, productCount }) => {
  const addToCart = () => {
    setProducts({
      id: 1,
      name: 'Fall Limited Edition Sneakers',
      price: 125,
      count: productCount,
    })
  };

  return (
    <button onClick={addToCart} id='add-to-cart' type="button">
      <span>
        <CartSvg />
      </span>
      <span>Add to cart</span>
    </button>
  )
}
export default AddToCart;