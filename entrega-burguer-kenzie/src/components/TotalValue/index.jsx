import "./styles.css";

function TotalValue({ currentSale, setCurrentSale }) {
  const saldo = currentSale?.reduce((valorAnterior, valorAtual) => {
    return (valorAnterior += valorAtual.price);
  }, 0);

  return (
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
        <button onClick={() => setCurrentSale([])}>Remover todos</button>
      </div>
    </div>
  );
}

export default TotalValue;
