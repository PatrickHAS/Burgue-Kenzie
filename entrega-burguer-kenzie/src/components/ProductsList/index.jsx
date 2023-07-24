import Product from "../Product";
import { useEffect } from "react";

import "./styles.css";

function ProductsList({
  products,
  showProducts,
  filteredProducts,
  setFilteredProducts,
  handleClick,
  soma,
  inputValue,
}) {
  useEffect(() => {
    if (inputValue === "") {
      setFilteredProducts(products);
    }
  }, [inputValue, products, setFilteredProducts]);

  return (
    <ul className="list-contents">
      <Product
        products={products}
        showProducts={showProducts}
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        handleClick={handleClick}
        soma={soma}
      />
    </ul>
  );
}

export default ProductsList;
