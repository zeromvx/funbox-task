import React, {useState} from "react";
import "./Product.scss";

const Product = ({type, portionsCount, giftCount, weight, inStock, activeDescr}) => {
  const [isActive, setIsActive] = useState(false);
  const [productDescr, setProductDescr] = useState("Сказочное заморское явство.");
  const classes = ["product"];

  if (!inStock) {
    classes.push("product--disabled")
  } else if (isActive) {
    classes.push("product--active")
  }

  const handleProductSelect = () => {
    if (inStock) {
      setIsActive(!isActive);
      setProductDescr("Сказочное заморское явство.");
    }
  }

  const handleMouseLeave = () => {
    if (isActive) {
      setProductDescr("Котэ не одобряет?");
    }
  }

  return (
    <li className={classes.join(" ")} onMouseLeave={handleMouseLeave}>
      <div className="wrapper" onClick={handleProductSelect}>
        <div className="product__header">
          <div className="product__corner"/>
          <div className="product__rectangle">
            <p className="product__descr">{productDescr}</p>
          </div>
        </div>

        <div className="product__main">
          <h2 className="product__title">
            Нямушка <span className="product__title-type">{type}</span>
          </h2>
          <p>
            <span className="product__number">{portionsCount}</span> порций
          </p>

          {
            giftCount === 1 ? <p>мышь в подарок</p> : null
          }
          {
            giftCount > 1 && giftCount < 5 ?
              <p><span className="product__number">{giftCount}</span> мыши в
                подарок</p> : null
          }
          {
            giftCount >= 5
              ? <>
                <p><span className="product__number">{giftCount}</span> мышей в
                  подарок</p>
                <p>Заказчик доволен.</p>
              </>
              : null
          }

          <img src="/images/Photo.png" alt="cat" className="product__img"/>

          <div className="product__weight">
            <p className="product__weight-count">{weight}</p>
            <p className="product__weight-kg">кг</p>
          </div>
        </div>
      </div>

      <div className="product__footer">
        {
          !inStock && <p>Печалька, {type} закончился.</p>
        }
        {
          isActive && inStock && <p>{activeDescr}</p>
        }
        {
          !isActive && inStock &&
          <p>Чего сидишь? Порадуй котэ, <button onClick={handleProductSelect} className="btn-buy">купи</button></p>
        }
      </div>
    </li>
  )
}

export default Product;