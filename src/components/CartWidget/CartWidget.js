import React, { useContext } from 'react';
import { Link } from 'react-router-dom'; // Asegúrate de importar Link
import { CartContext } from '../context/CartContext';
import './estilocart.css';

const CartWidget = () => {
  const { cart } = useContext(CartContext);

  // Calcula la cantidad total de elementos en el carrito
  const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

  return (
    <div>
      <Link to="/cart" className={totalItems === 0 ? 'empty-cart' : ''}>
  🛒 {totalItems > 0 && totalItems}
</Link>
    </div>
  );
};

export default CartWidget;




