import React, { useContext, useState, useEffect } from 'react';
import { CartContext } from '../context/CartContext'; // Asegúrate de que la ruta sea correcta
import './CartPage.css';

const CartPage = () => {
  const { cart, removeItem, updateCart } = useContext(CartContext);
  const [totalPrice, setTotalPrice] = useState(calculateTotalPrice(cart));

  useEffect(() => {
    setTotalPrice(calculateTotalPrice(cart));
  }, [cart]);

  function calculateTotalPrice(cartItems) {
    return cartItems.reduce((total, item) => total + item.precio * item.quantity, 0);
  }

  function handleQuantityChange(item, newQuantity) {
    if (newQuantity >= 1) {
      const updatedCart = cart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: newQuantity } : cartItem
      );
      updateCart(updatedCart); // Actualizar el carrito con la nueva cantidad usando la función del contexto
    }
  }

  function handleCheckout() {
    // Lógica para finalizar la compra aquí
  }

  return (
    <div className="cart-container">
      <h2>Detalles de la compra</h2>
      <div className="cart-items">
        {cart.map(item => (
          <div className="cart-item" key={item.id}>
            <span className="item-name">{item.titulo}</span>
            <div className="quantity-controls">
              <button onClick={() => handleQuantityChange(item, item.quantity - 1)}>-</button>
              <span>{item.quantity}</span>
              <button onClick={() => handleQuantityChange(item, item.quantity + 1)}>+</button>
            </div>
            <span className="item-price">${(item.precio * item.quantity).toFixed(2)}</span>
            <button onClick={() => removeItem(item.id)}>Eliminar</button>
          </div>
        ))}
      </div>
      <p className="total-price">Precio Total: ${totalPrice.toFixed(2)}</p>
      <button className="checkout-button" onClick={handleCheckout}>Finalizar Compra</button>
    </div>
  );
};

export default CartPage;





