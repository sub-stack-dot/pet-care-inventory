import React, { useState } from 'react';
import './orders.css';

// Reuse product data from Items.js (you could move this to a separate file for sharing)
const products = [
  { id: 1, title: "Plant based softies", price: "Rs.450" },
  { id: 2, title: "Chiken chonks", price: "Rs.550" },
  { id: 3, title: "Chiken & Duck softies", price: "Rs.650" },
  { id: 4, title: "Nibbles", price: "Rs.200" },
  { id: 5, title: "Salmon chonks", price: "Rs.500" },
  { id: 6, title: "Gnashers", price: "Rs.600" },
  // Add groomingProducts and supplementProducts here if you want them included
];

const Orders = () => {
  const [order, setOrder] = useState({
    product: '',
    quantity: 1,
    customerName: '',
    contact: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you could send the order to a backend or log it
    console.log('Order Submitted:', order);
    alert('Order submitted successfully!');
    setOrder({ product: '', quantity: 1, customerName: '', contact: '' }); // Reset form
  };

  return (
    <div className="orders-page">
      <h2>Place Your Order</h2>
      <form className="order-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="product">Select Product:</label>
          <select
            id="product"
            name="product"
            value={order.product}
            onChange={handleChange}
            required
          >
            <option value="">-- Choose a Product --</option>
            {products.map((product) => (
              <option key={product.id} value={product.title}>
                {product.title} ({product.price})
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="quantity">Quantity:</label>
          <input
            type="number"
            id="quantity"
            name="quantity"
            value={order.quantity}
            onChange={handleChange}
            min="1"
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="customerName">Your Name:</label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={order.customerName}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="contact">Contact Number:</label>
          <input
            type="tel"
            id="contact"
            name="contact"
            value={order.contact}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Submit Order
        </button>
      </form>
    </div>
  );
};

export default Orders;