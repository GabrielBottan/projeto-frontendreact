import styled from "styled-components";

export const Filter = styled.h2`
  font-family: Inter;
  font-weight: 300px;
`;

export const StyleH1 = styled.h1`
  display: flex;
  justify-content: center;
  font-family: "Jolly Lodger";
  font-size: 50px;
  transition: 0.5s all ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const Navigation = styled.nav`
  display: flex;
  flex-direction: column;
  width: 15rem;
  row-gap: 10px;
  font-family: Inter;
  margin-left: 1rem;
`;

export const FilterOptions = styled.select`
  width: 240px;
  padding: 5px;
  font-size: 13px;
  border: 0;
  border-radius: 5px;
  height: 34px;
  font-family: Inter;
  background: transparent;
  color: #fffafa;
  border: 1px solid;
`;

export const FilterSelection = styled.option`
  color: #000000;
`;
export const InputType = styled.input`
  width: 240px;
  padding: 5px;
  font-size: 13px;
  border: 0;
  border-radius: 5px;
  height: 34px;
  font-family: Inter;
  background: transparent;
  color: #fffafa;
  border: 1px solid;
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
`;

export const Cart = styled.div`
  display: grid;
  border: 1px solid;
  grid-template-rows: 1fr;
  row-gap: 1rem;
  font-family: Inter;
  box-shadow: 2px 2px 2px rgb(160, 160, 160);
`;

export const CartSpan = styled.span`
  display: flex;
`;

export const Remove = styled.button`
  display: flex;
  font-family: Inter;
  border-radius: 10px;
  text-align: center;
  text-decoration: none;
  text-transform: uppercase;
  text-shadow: 1px 1px 0 #fff;
  padding: 5px 15px;
`;
