import React, { useEffect, useState } from 'react';
import productsData from '../data/products.json';
import '../style/category.css';
import { useCart } from '../context/cartcontext';
import { useParams } from 'react-router-dom';

const ProductsPage = () => {
  const [products, setProducts] = useState([]);
  const { addToCart } = useCart();
  const { category } = useParams(); 

  useEffect(() => {
    if (category) {
      const filteredProducts = productsData.filter(product => product.category === category);
      setProducts(filteredProducts);
    } else {
      setProducts(productsData);
    }
  }, [category]);

  return (
    <div className="container">
      <h1>{category ? `Productos de ${category.charAt(0).toUpperCase() + category.slice(1)}` : 'Todos los Productos'}</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product.id} className="card">
            <h2>{product.name}</h2>
            <img src={product.image} alt={product.name} />
            <p>{product.description}</p>
            <p className="price">Precio: ${product.price}</p>
            <button onClick={() => addToCart(product)}>Comprar</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;
