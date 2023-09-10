import React, { useContext, useState } from 'react';
import { CartContext } from '../context/CartContext';
import './itemDetail.css'; // Importar la hoja de estilos


const ItemDetail = ({
  id,
  titulo,
  genero,
  stock,
  descripcion,
  precio,
}) => {
  const [quantity, setQuantity] = useState(1);
  const { onAddItem } = useContext(CartContext);

  const handleIncrement = () => {
    if (quantity < stock) {
      setQuantity(quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAddToCart = () => {
    const item = {
      id,
      titulo,
      genero,
      stock,
      descripcion,
      precio,
    };
  
    console.log('Item a agregar al carrito:', item);
    onAddItem(item.id, quantity, precio,titulo); // Pasar el precio también
  
    // Restablecer la cantidad después de agregar al carrito
    setQuantity(1);
  };

  return (
    <div className="item-detail">
      <h2>Titulo :{titulo}</h2>
      <p>Descripción: {descripcion}</p>
      <p>Género: {genero}</p>
      <p>Stock disponible: {stock}</p>
      <p>Precio: ${precio.toFixed(2)}</p>
      <div className="quantity-control">
        <button onClick={handleDecrement}>-</button>
        <span>{quantity}</span>
        <button onClick={handleIncrement}>+</button>
      </div>
      <button onClick={handleAddToCart}>Agregar al carrito</button>
    </div>
  );
};

export default ItemDetail;
