import React, { useState } from 'react';
import '../style/cartpage.css';
import { useCart } from '../context/cartcontext';

const CartPage = () => {
  const { cartItems, removeFromCart, incrementQuantity, decrementQuantity } = useCart();
  const [purchaseMessage, setPurchaseMessage] = useState('');

  const handlePurchase = () => {
    if (cartItems.length === 0) {
      alert('No hay productos en el carrito para comprar.');
      return;
    }

    const totalAmount = cartItems.reduce((total, item) => total + (item.price * (item.quantity || 1)), 0);
    
    alert(`Compra exitosa. El monto total es $${totalAmount.toFixed(2)}. ¡Gracias por tu compra!`);

    setPurchaseMessage(`Compra exitosa. El monto total es $${totalAmount.toFixed(2)}. ¡Gracias por tu compra!`);
  };

  return (
    <div className="cart-container">
      <h1>Carrito de Compras</h1>
      {purchaseMessage && <div className="purchase-message">{purchaseMessage}</div>}
      <div className="cart-items">
        {cartItems.length === 0 ? (
          <p>No hay productos en el carrito.</p>
        ) : (
          cartItems.map(product => (
            <div key={product.id} className="cart-card">
              <h2>{product.name}</h2>
              <img src={product.image} alt={product.name} />
              <div className="cart-card-description">{product.description}</div>
              <p className="price">Precio: ${product.price}</p>
              <div className="quantity-container">
                <button onClick={() => decrementQuantity(product.id)}>-</button>
                <span className="quantity">{product.quantity || 1}</span>
                <button onClick={() => incrementQuantity(product.id)}>+</button>
              </div>
              <button onClick={() => removeFromCart(product.id)}>Eliminar</button>
            </div>
          ))
        )}
      </div>
      <button className="purchase-button" onClick={handlePurchase}>Comprar</button>
    </div>
  );
};

export default CartPage;
