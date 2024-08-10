import React, { useEffect, useState } from 'react';
import productsData from '../data/products.json';
import '../style/category.css';
import { useCart } from '../context/cartcontext';

const MaderaPage = () => {
  const [maderaProducts, setMaderaProducts] = useState([]);
  const { addToCart } = useCart();

  const fetchAndFilterProducts = () => {
    
    const filteredProducts = productsData.filter(product => product.category === 'madera');
    setMaderaProducts(filteredProducts);
  };

  useEffect(() => {
    fetchAndFilterProducts();
  }, []);

  return (
    <div className="container">
      <h1>Productos de Madera</h1>
      <div className="card-container">
        {maderaProducts.map(product => (
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

export default MaderaPage;
