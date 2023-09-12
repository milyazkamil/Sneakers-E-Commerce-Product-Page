import { useState } from 'react';
import logo from '../assets/images/logo.svg';
import avatar from '../assets/images/image-avatar.png';
import image1 from '../assets/images/image-product-1.jpg';
import Navigation from './Navigation';
import MenuSvg from './SvgComponents/MenuSvg';
import CartSvg from './SvgComponents/CartSvg';
import CloseSvg from './SvgComponents/CloseSvg';
import DeleteSvg from './SvgComponents/DeleteSvg';

const Navbar = ({ products, setProducts }) => {
  const {name, price, count} = products;
  const [isHideBasket, setIsHideBasket] = useState(true);
  const [isHideLeftBar, setIsHideLeftBar] = useState(true);

  const showHiddenBasket = () => {
    setIsHideBasket(prev => !prev);
  };

  const deleteProduct = () => {
    setProducts({})
  };

  return (
    <>
      <nav id="navbar">
        <div id="logo-nav-container">
          <span id='menu' onClick={() => setIsHideLeftBar((prev) => !prev)}>
            <MenuSvg />
          </span>
          <a href="#">
            <img id="logo" src={logo} alt="logo image" />
          </a>
          <Navigation />
        </div>
        <div id="profile-basket-container">
          <button onClick={showHiddenBasket} id="basket" type="button">
            <span>
              <CartSvg />
            </span>
            {count > 0 ? <span id="badge">{count}</span> : <></>}
          </button>
          <img id="profile" src={avatar} alt="avatar image" />
        </div>
        {isHideLeftBar === true ? (
          <></>
        ) : (
          <div id="left-bar-container">
            <div id="left-bar-navigation">
              <div>
                <span onClick={() => setIsHideLeftBar((prev) => !prev)}>
                  <CloseSvg />
                </span>
              </div>
              <Navigation />
            </div>
          </div>
        )}
      </nav>

      {
        isHideBasket === false ? (
          <div id="my-products">
            <div id='cart-header'>
              <h4 id="cart-title">Cart</h4>
              <span onClick={showHiddenBasket}>
                <CloseSvg />
              </span>
            </div>
            <div id="cart-content">
              {products.id === undefined ? (
                <div id="cart-empty">
                  <span>Your cart is empty</span>
                </div>
              ) : (
                <div id="cart-full">
                  <img id="cart-small-image" src={image1} alt={name} />
                  <div id="cart-product-info">
                    <p id="product-name">{name}</p>
                    <span>${price}.00 x </span>
                    <span id='count-span'>{count}</span>
                    <span id="total-price">${price * count}.00</span>
                  </div>
                  <button
                    id="delete-product"
                    onClick={deleteProduct}
                    type="button"
                  >
                    <span>
                      <DeleteSvg />
                    </span>
                  </button>
                </div>
              )}
              <button id="checkout" type="button">
                Checkout
              </button>
            </div>
          </div>
        ) : (
          <></>
        )
      }
    </>
  )
}
export default Navbar;