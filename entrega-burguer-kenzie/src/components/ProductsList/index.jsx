import Product from "../Product";

import "./styles.css";

function ProductsList({
  products,
  showProducts,
  filteredProducts,
  setFilteredProducts,
  handleClick,
  soma,
}) {
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
