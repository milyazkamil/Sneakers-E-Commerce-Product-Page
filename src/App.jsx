import { useState } from "react";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

function App() {
  const [products, setProducts] = useState({});

  return (
    <>
      <main id="main-container">
        <Header products={products} setProducts={setProducts} />
        <MainContent setProducts={setProducts} />
      </main>
    </>
  )
}
export default App;
