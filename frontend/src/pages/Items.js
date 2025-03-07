import React, { useEffect, useState } from 'react';
import './items.css';

const Items = () => {
  const [foodProducts, setFoodProducts] = useState([]);
  const [groomingProducts, setGroomingProducts] = useState([]);
  const [supplementProducts, setSupplementProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/products');
        if (!response.ok) {
          throw new Error('Failed to fetch products');
        }
        const data = await response.json();

        // Filter products by category
        setFoodProducts(data.filter(product => product.category === 'Food'));
        setGroomingProducts(data.filter(product => product.category === 'Grooming'));
        setSupplementProducts(data.filter(product => product.category === 'Supplements'));
        setLoading(false);
      } catch (err) {
        console.error('Error fetching products:', err);
        setError('Unable to load products. Please try again later.');
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  if (loading) {
    return <div className="items-page1">Loading products...</div>;
  }

  if (error) {
    return <div className="items-page1">{error}</div>;
  }

  return (
    <div className="items-page1">
      <h2>Foods</h2>
      <div className="gallery">
        {foodProducts.length > 0 ? (
          foodProducts.map((product) => (
            <div key={product._id} className="gallery-item">
              <img src={product.image} alt={product.alt} />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </div>
          ))
        ) : (
          <p>No food products available.</p>
        )}
      </div>

      <h2>Grooming Items</h2>
      <div className="gallery">
        {groomingProducts.length > 0 ? (
          groomingProducts.map((product) => (
            <div key={product._id} className="gallery-item">
              <img src={product.image} alt={product.alt} />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </div>
          ))
        ) : (
          <p>No grooming products available.</p>
        )}
      </div>

      <h2>Supplements</h2>
      <div className="gallery">
        {supplementProducts.length > 0 ? (
          supplementProducts.map((product) => (
            <div key={product._id} className="gallery-item">
              <img src={product.image} alt={product.alt} />
              <h3>{product.title}</h3>
              <p>{product.price}</p>
            </div>
          ))
        ) : (
          <p>No supplements available.</p>
        )}
      </div>

      <div className="items-page2"></div>
    </div>
  );
};

export default Items;