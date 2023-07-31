import TotalValue from "../TotalValue";
import { TbPaperBagOff } from "react-icons/tb";
import { FaTrashAlt } from "react-icons/fa";
import "./styles.css";

function Cart({ currentSale, deleteList, setCurrentSale, handleRemoveAll }) {
  function incrementQuantity(productId) {
    setCurrentSale((prevSale) =>
      prevSale.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product
      )
    );
  }

  function decrementQuantity(productId) {
    setCurrentSale((prevSale) =>
      prevSale.map((product) =>
        product.id === productId
          ? { ...product, quantity: Math.max(product.quantity - 1, 1) }
          : product
      )
    );
  }

  return (
    <div className="cart-contents">
      <div className="title-content">
        <h2 className="title-shoppingCar">Carrinho de compras</h2>
      </div>

      {currentSale.length >= 1 ? (
        <>
          <ul className="cart-list">
            {currentSale.map((card, index) => (
              <li className="cart-card" key={card.id}>
                <div className="card-img">
                  <img src={card.img} alt={card.name} />
                </div>
                <div className="info-card">
                  <div className="nameProduct-delete">
                    <div className="quantity-product">
                      <h3>{card.name}</h3>
                      <div className="quantity-controls">
                        <button onClick={() => decrementQuantity(card.id)}>
                          -
                        </button>
                        <span>{card.quantity}</span>
                        <button onClick={() => incrementQuantity(card.id)}>
                          +
                        </button>
                      </div>
                    </div>
                    <p onClick={() => deleteList(index)}>
                      <FaTrashAlt />
                    </p>
                  </div>
                  <span>{card.category}</span>
                </div>
              </li>
            ))}
          </ul>
          <TotalValue
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
            handleRemoveAll={handleRemoveAll}
          />
        </>
      ) : (
        <div className="cart-list-contents">
          <h3 className="empety-bag">Sua sacola está vazia</h3>
          <TbPaperBagOff className="icons" />
          <p className="add-items">Adicione itens</p>
        </div>
      )}
    </div>
  );
}

export default Cart;
