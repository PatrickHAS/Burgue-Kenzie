import { useState, useEffect } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";

import "./App.css";

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

  function showProducts(product) {
    const filter = products.filter(
      (item) => item.name.includes(product) || item.category.includes(product)
    );
    return setFilteredProducts(filter);
  }

  function handleClick(productId) {
    const id = products.find((product) => product.id === productId);
    const exists = currentSale.find((p) => {
      return p.id === productId;
    });

    if (exists) {
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
