import { useState, useEffect } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import { toast, ToastContainer } from "react-toastify";

import "./App.css";

function App() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
      .then((reponse) => reponse.json())
      .then((reponse) => setProducts(reponse))
      .catch((err) => console.log(err));
  }, []);

  function showProducts(product) {
    const filter = products.filter(
      (item) =>
        item.name.toLowerCase().includes(product) ||
        item.category.toLowerCase().includes(product) ||
        item.name.toUpperCase().includes(product) ||
        item.category.toUpperCase().includes(product)
    );
    return setFilteredProducts(filter);
  }

  function handleClick(productId) {
    const id = products.find((product) => product.id === productId);
    const exists = currentSale.find((p) => {
      return p.id === productId;
    });

    if (exists) {
      return toast.error("Esse produto já está no carrinho", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }

    toast.success("Produto adicionado no carrinho", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });

    id.quantity = 1;

    return setCurrentSale([...currentSale, id]);
  }

  function deleteList(index) {
    let newList = [...currentSale];
    newList.splice(index, 1);
    setCurrentSale(newList);
    return toast.warning("Produto removido do carrinho", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  return (
    <>
      <div className="App-Header">
        <Header
          showProducts={showProducts}
          filteredProducts={filteredProducts}
          setFilteredProducts={setFilteredProducts}
          setInputValue={setInputValue}
          inputValue={inputValue}
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
            inputValue={inputValue}
            setInputValue={setInputValue}
          />
          <Cart
            currentSale={currentSale}
            deleteList={deleteList}
            cartTotal={cartTotal}
            setCartTotal={setCartTotal}
            setCurrentSale={setCurrentSale}
          />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
