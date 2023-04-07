import TotalValue from "../TotalValue";
import { TbPaperBagOff } from "react-icons/tb";
import "./styles.css";

function Cart({ currentSale, deleteList, setCurrentSale }) {
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
                    <h3>{card.name}</h3>
                    <p onClick={() => deleteList(index)}>Remover</p>
                  </div>
                  <span>{card.category}</span>
                </div>
              </li>
            ))}
          </ul>
          <TotalValue
            currentSale={currentSale}
            setCurrentSale={setCurrentSale}
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
