import { useState, useEffect } from "react";
import Cart from "./components/Cart";
import Header from "./components/Header";
import ProductsList from "./components/ProductsList";
import { toast, ToastContainer } from "react-toastify";
import { useMediaQuery } from "react-responsive";

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

  const isMobile = useMediaQuery({ maxWidth: 480 });

  const handleRemoveAll = () => {
    setCurrentSale([]);
    toast.warning("Todos os produtos removidos do carrinho", {
      position: isMobile ? "top-center" : "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      style: {
        width: isMobile ? "80%" : "310px",
        margin: isMobile ? "0 auto" : "default",
        marginTop: isMobile ? "20px" : "default",
        borderRadius: isMobile ? "5px" : "default",
      },
    });
  };

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
        position: isMobile ? "top-center" : "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        style: {
          width: isMobile ? "80%" : "310px",
          margin: isMobile ? "0 auto" : "default",
          marginTop: isMobile ? "20px" : "default",
          borderRadius: isMobile ? "5px" : "default", // Defina a largura conforme a tela (mobile ou desktop)
        },
      });
    }

    toast.success("Produto adicionado no carrinho", {
      position: isMobile ? "top-center" : "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      style: {
        width: isMobile ? "80%" : "310px",
        margin: isMobile ? "0 auto" : "default",
        marginTop: isMobile ? "20px" : "default",
        borderRadius: isMobile ? "5px" : "default", // Defina a largura conforme a tela (mobile ou desktop)
      },
    });

    id.quantity = 1;

    return setCurrentSale([...currentSale, id]);
  }

  function deleteList(index) {
    let newList = [...currentSale];
    newList.splice(index, 1);
    setCurrentSale(newList);
    return toast.warning("Produto removido do carrinho", {
      position: isMobile ? "top-center" : "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      style: {
        width: isMobile ? "80%" : "310px",
        margin: isMobile ? "0 auto" : "default",
        marginTop: isMobile ? "20px" : "default",
        borderRadius: isMobile ? "5px" : "default", // Defina a largura conforme a tela (mobile ou desktop)
      },
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
            handleRemoveAll={handleRemoveAll}
          />
        </div>
      </div>
      <ToastContainer />
    </>
  );
}

export default App;
