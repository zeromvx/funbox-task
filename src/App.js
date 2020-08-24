import React from 'react';
import './App.scss';
import Product from "./components/Product/Product";

const PRODUCTS = [
  {
    type: "с фуа-гра",
    portionsCount: 10,
    giftCount: 1,
    weight: "0,5",
    inStock: true,
    activeDescr: "Печень утки разварная с артишоками.",
  },
  {
    type: "с рыбой",
    portionsCount: 40,
    giftCount: 2,
    weight: "2",
    inStock: true,
    activeDescr: "Головы щучьи с чесноком да свежайшая сёмгушка.",
  },
  {
    type: "с курой",
    portionsCount: 100,
    giftCount: 5,
    weight: "5",
    inStock: false,
    activeDescr: "Печень утки разварная с артишоками.",
  }
];

function App() {
  return (
    <div className="app">
      <h1>Ты сегодня покормил кота?</h1>
      <ul className="products">
        {
          PRODUCTS.map(({ type, portionsCount, giftCount, weight, inStock, activeDescr }) => (
            <Product
              key={type}
              type={type}
              portionsCount={portionsCount}
              giftCount={giftCount}
              weight={weight}
              inStock={inStock}
              activeDescr={activeDescr}
            />
          ))
        }
      </ul>
    </div>
  );
}

export default App;
