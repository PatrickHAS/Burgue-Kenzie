import "./styles.css";
import { toast } from "react-toastify";

function TotalValue({ currentSale, setCurrentSale }) {
  const saldo = currentSale?.reduce((valorAnterior, valorAtual) => {
    return (valorAnterior += valorAtual.price);
  }, 0);

  return (
    <>
      <div className="value-delete">
        <div className="total-value">
          <div className="info-value">
            <p>Total</p>
            <span>
              {saldo.toLocaleString("pt-BR", {
                minimumFractionDigits: 2,
                style: "currency",
                currency: "BRL",
              })}
            </span>
          </div>
          <button
            onClick={() => (
              // eslint-disable-next-line no-sequences
              setCurrentSale([]),
              toast.warning("Todos os produtos removido do carrinho", {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
              })
            )}
          >
            Remover todos
          </button>
        </div>
      </div>
    </>
  );
}

export default TotalValue;
