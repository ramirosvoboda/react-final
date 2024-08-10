import React, { useEffect, useState } from 'react';
import productsData from '../data/products.json';
import '../style/category.css';
import { useCart } from '../context/cartcontext';

const RodadosPage = () => {
  const [rodadosProducts, setRodadosProducts] = useState([]);
  const { addToCart } = useCart();

  const fetchAndFilterProducts = () => {

    const filteredProducts = productsData.filter(product => product.category === 'rodados');
    setRodadosProducts(filteredProducts);
  };

  useEffect(() => {
    fetchAndFilterProducts();
  }, []);

  return (
    <div className="container">
      <h1>Productos de Rodados</h1>
      <div className="card-container">
        {rodadosProducts.map(product => (
          <div key={product.id} className="card">
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p className="price">Precio: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Añadir al Carrito</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RodadosPage;
