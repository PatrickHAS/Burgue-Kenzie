import { useState } from "react";
import "./styles.css";

function Header({ showProducts }) {
  const [inputValue, setInputValue] = useState("");

  return (
    <div className="header-contents">
      <div className="title-header">
        <h1 className="title-burgueKenzie">
          Burguer <span>Kenzie</span>
        </h1>
      </div>
      <div className="input-button">
        <form className="form-contents" onSubmit={(e) => e.preventDefault()}>
          <input
            className="input"
            type="text"
            placeholder="Digitar Pesquisa"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <button
            className="btn-search"
            type="submit"
            onClick={() => showProducts(inputValue)}
          >
            Pesquisar
          </button>
        </form>
      </div>
    </div>
  );
}

export default Header;
