import React, { useState, useEffect } from "react";
import "./orders.css";

const Orders = () => {
  const [order, setOrder] = useState({
    product: "",
    quantity: 1,
    customerName: "",
    contact: "",
  });

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/products/get-all-products")
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((err) => console.error("Error fetching products:", err));
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((prev) => ({
      ...prev,
      [name]: name === "quantity" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://localhost:5000/api/orders/create-order", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(order),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Failed to submit order");
      }

      alert("Order submitted successfully!");
      setOrder({ product: "", quantity: 1, customerName: "", contact: "" });
    } catch (error) {
      alert("Error: " + error.message);
      console.error("Order submission error:", error);
    } finally {
      setLoading(false);
    }
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
              <option key={product._id} value={product.title}>
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

        <button type="submit" className="submit-btn" disabled={loading}>
          {loading ? "Submitting..." : "Submit Order"}
        </button>
      </form>
    </div>
  );
};

export default Orders;