import "./App.css";
import products from "./Components/pages/dbitems/Db";
import Home from "./Components/pages/Home";
import Header from "./Components/Header";
import { useState } from "react";
import "./Components/pages/Home.css";

import { GlobalStyle } from "./GlobalStyle";

function App() {
  const [namePesquisa, setPesquisa] = useState("");

  const [pricePesquisa, setPricePesquisa] = useState("");

  const [ordem, setOrdem] = useState("");

  const [cart, setCart] = useState([]);

  const handleFilter = (product) => {
    return product.name.toLowerCase().includes(namePesquisa.toLowerCase());
  };

  const handleFilterPrice = (product) => {
    return pricePesquisa ? product.price <= pricePesquisa : true;
  };

  const handleClick = (product) => {
    const filterProduct = { name: product.name, price: product.price };
    setCart([...cart, filterProduct]);
  };

  return (
    <div className="App">
      <GlobalStyle />
      <createGlobalStyle />
      <Header
        namePesquisa={namePesquisa}
        setPesquisa={setPesquisa}
        pricePesquisa={pricePesquisa}
        setPricePesquisa={setPricePesquisa}
        ordem={ordem}
        setOrdem={setOrdem}
        cart={cart}
        setCart={setCart}
      />
      {products
        .filter(handleFilterPrice)
        .filter(handleFilter)
        .sort((atualEstado, proximoEstado) => {
          if (ordem === "crescente") {
            if (atualEstado.name < proximoEstado.name) {
              return -1;
            } else if (atualEstado.name > proximoEstado.name) {
              return 1;
            } else {
              return 0;
            }
          }
          if (ordem === "decrescente") {
            if (atualEstado.name < proximoEstado.name) {
              return +1;
            } else if (atualEstado.name > proximoEstado.name) {
              return -1;
            } else {
              return 0;
            }
          }
        })
        .map((product) => (
          <Home
            product={product}
            key={product.id}
            handleClick={handleClick}
          ></Home>
        ))}
    </div>
  );
}

export default App;
