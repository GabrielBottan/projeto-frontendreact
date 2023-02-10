import React from "react";

import "./Home.css";
import { StyleDiv } from "./StylePage";
export default function Home({ product, handleClick }) {
  return (
    <div className="Container">
      <div className="card">
        <StyleDiv>
          <h2>{product.name}</h2>
          <img
            src={product.image}
            width="300px"
            height="300px"
            alt={product.name}
          />
          <p>R${product.price}</p>
          <p>{product.description}</p>
          <button onClick={() => handleClick(product)}>Comprar</button>
        </StyleDiv>
      </div>
    </div>
  );
}
