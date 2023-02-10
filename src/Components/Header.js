import React from "react";
import {
  Filter,
  StyleHeader,
  StyleH1,
  Navigation,
  FilterOptions,
  FilterSelection,
  InputType,
  Cart,
  CartSpan,
  Remove,
} from "./StyleHeader";
export default function Header({
  namePesquisa,
  setPesquisa,
  pricePesquisa,
  setPricePesquisa,
  ordem,
  setOrdem,
  cart,
  setCart,
}) {
  const handleName = (e) => {
    setPesquisa(e.target.value);
  };

  const handleSortOrder = (e) => {
    setOrdem(e.target.value);
  };

  const calcTotal = () => {
    return cart.reduce((acc, item) => acc + item.price, 0);
  };

  const handleRemove = (index) => {
    setCart((remover) => remover.filter((_, i) => i !== index));
  };

  return (
    <nav>
      <StyleH1>AstroCommerce</StyleH1>
      <Navigation>
        <Filter>Filtro de Busca</Filter>

        <FilterOptions onChange={handleSortOrder} value={ordem}>
          <FilterSelection value="">Nenhum</FilterSelection>
          <FilterSelection value="decrescente">Decrescente</FilterSelection>
          <FilterSelection value="crescente">Crescente</FilterSelection>
        </FilterOptions>
        <InputType
          type="text"
          placeholder="Digite um nome"
          value={namePesquisa}
          onChange={handleName}
        ></InputType>
        <InputType
          type="number"
          placeholder="digite um preço"
          value={pricePesquisa}
          onChange={(e) => setPricePesquisa(e.target.value)}
        ></InputType>
        <Cart className="cart">
          {cart.map((product, index) => (
            <div key={index}>
              <CartSpan>{product.name}: </CartSpan>
              <CartSpan>R${product.price} </CartSpan>

              <Remove onClick={() => handleRemove(index)}>Remover</Remove>
            </div>
          ))}
        </Cart>
        <span>Total R${calcTotal()}</span>
      </Navigation>
    </nav>
  );
}
