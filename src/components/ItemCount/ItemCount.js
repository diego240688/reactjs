import React, { useState } from 'react';
import './ItemCount.css'; // Importa el archivo CSS

const ItemCount = ({ stock, initial, onAdd }) => {
  const [quantity, setQuantity] = useState(initial);

  const increment = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="item-count-container">
      <div className="quantity-container">
        <button className="quantity-button" onClick={decrement}>-</button>
        <h4 className="quantity-display">{quantity}</h4>
        <button className="quantity-button" onClick={increment}>+</button>
      </div>
      <div>
        <button
          className="add-to-cart-button"
          onClick={() => onAdd(quantity)}
          disabled={!stock}
        >
          Agregar al carrito
        </button>
      </div>
    </div>
  );
};

export default ItemCount;
