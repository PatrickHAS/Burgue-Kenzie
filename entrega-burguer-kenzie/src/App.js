import { useState, useEffect } from "react";

import "./App.css";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((reponse) => reponse.json())
      .then((reponse) => setProducts(reponse))
      .catch((err) => console.log(err));
  }, []);

  function showProducts(text) {
    const filter = products.filter(
      (item) => item.name === text || item.category === text
    );
    return setFilteredProducts(filter);
  }

  function handleClick(productId) {
    const id = products.find((product) => product.id === productId);
    const isTrue = currentSale.find((p) => {
      return p.id === productId;
    });
    if (isTrue) {
      return alert("Esse produto já está no carrinho");
    }
    return setCurrentSale([...currentSale, id]);
  }

  function deleteList(index) {
    let newList = [...currentSale];
    newList.splice(index, 1);
    setCurrentSale(newList);
  }

  return (
    <>
      <div className="App-Header">
        <Header
          showProducts={showProducts}
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
        />
      </div>
      <div className="App-contents">
        <div className="App">
          <ProductsList
            products={products}
            showProducts={showProducts}
            filteredProducts={filteredProducts}
            setFilteredProducts={setFilteredProducts}
            handleClick={handleClick}
          />
          <Cart
            currentSale={currentSale}
            deleteList={deleteList}
            cartTotal={cartTotal}
            setCurrentSale={setCurrentSale}
          />
        </div>
      </div>
    </>
  );
}

export default App;
