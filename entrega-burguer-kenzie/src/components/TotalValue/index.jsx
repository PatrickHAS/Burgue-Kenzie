import "./styles.css";

function TotalValue({ currentSale, setCurrentSale, handleRemoveAll }) {
  const saldo = currentSale?.reduce((valorAnterior, valorAtual) => {
    return valorAnterior + valorAtual.price * valorAtual.quantity;
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
          <button onClick={() => handleRemoveAll()}>Remover todos</button>
        </div>
      </div>
    </>
  );
}

export default TotalValue;
