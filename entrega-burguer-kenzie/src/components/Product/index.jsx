import "./styles.css";

function Product({ products, filteredProducts, handleClick, soma }) {
  return (
    <>
      {filteredProducts.length >= 1
        ? filteredProducts.map((product) => (
            <li key={product.id} className="card">
              <div className="img-content">
                <img
                  src={product.img}
                  alt={product.name}
                  className="img-card"
                />
              </div>
              <div className="info-contents">
                <h3 className="name-card">{product.name}</h3>
                <span className="category-card">{product.category}</span>
                <p className="price-card">
                  {product.price.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <button
                  className="button-card"
                  onClick={() => handleClick(product.id)}
                >
                  Adicionar
                </button>
              </div>
            </li>
          ))
        : products.map((product) => (
            <li key={product.id} className="card">
              <div className="img-content">
                <img
                  src={product.img}
                  alt={product.name}
                  className="img-card"
                />
              </div>
              <div className="info-contents">
                <h3 className="name-card">{product.name}</h3>
                <span className="category-card">{product.category}</span>
                <p className="price-card">
                  {product.price.toLocaleString("pt-BR", {
                    minimumFractionDigits: 2,
                    style: "currency",
                    currency: "BRL",
                  })}
                </p>
                <button
                  className="button-card"
                  onClick={() => handleClick(product.id)}
                >
                  Adicionar
                </button>
              </div>
            </li>
          ))}
    </>
  );
}

export default Product;
