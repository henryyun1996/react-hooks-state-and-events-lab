import React, {useState} from "react";

function Item({ name, category }) {

  const [inCart, setInCart] = useState(true)
  const divClass = inCart ? "" : "in-cart"
  // console.log(inCart)

  function toAddItem() {
    setInCart((inCart) => !inCart);
  }

  return (
    <li className={divClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={inCart ? "add" : "remove"} onClick={toAddItem}>{inCart ? "Add to Cart" : "Remove from Cart" }</button>
    </li>
  );
}

export default Item;
