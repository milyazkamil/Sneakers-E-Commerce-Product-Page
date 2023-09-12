import Navbar from "./Navbar";

const Header = ({ products, setProducts }) => {
  return (
    <header id="header">
      <Navbar products={products} setProducts={setProducts} />
    </header>
  )
}
export default Header;