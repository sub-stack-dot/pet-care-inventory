import React, { useState } from "react";
import { createOrder } from "../services/orderService"; // Import axios API
import "./orders.css";

const products = [
  { id: 1, title: "Plant based softies", price: "Rs.450" },
  { id: 2, title: "Chiken chonks", price: "Rs.550" },
  { id: 3, title: "Chiken & Duck softies", price: "Rs.650" },
  { id: 4, title: "Nibbles", price: "Rs.200" },
  { id: 5, title: "Salmon chonks", price: "Rs.500" },
  { id: 6, title: "Gnashers", price: "Rs.600" },
];

const Orders = () => {
  const [order, setOrder] = useState({
    product: "",
    quantity: 1,
    customerName: "",
    contact: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false); // Prevent multiple clicks

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setOrder((prev) => ({
      ...prev,
      [name]: name === "quantity" ? parseInt(value) || 1 : value, // Ensure quantity is a number
    }));
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await createOrder(order); // Use axios API call

      if (response.status === 201) {
        alert("🎉 Order submitted successfully!");
        setOrder({ product: "", quantity: 1, customerName: "", contact: "" }); // Reset form
      }
    } catch (error) {
      console.error("Error submitting order:", error);
      alert(`⚠️ Failed to submit order: ${error.response?.data?.error || "Unknown error"}`);
    } finally {
      setIsSubmitting(false); // Enable button again
    }
  };

  return (
    <div className="orders-page">
      <h2>📦 Place Your Order</h2>
      <form className="order-form" onSubmit={handleSubmit}>
        {/* Product Selection */}
        <div className="form-group">
          <label htmlFor="product">Select Product:</label>
          <select id="product" name="product" value={order.product} onChange={handleChange} required>
            <option value="">-- Choose a Product --</option>
            {products.map((product) => (
              <option key={product.id} value={product.title}>
                {product.title} ({product.price})
              </option>
            ))}
          </select>
        </div>

        {/* Quantity */}
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

        {/* Customer Name */}
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

        {/* Contact Number */}
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

        {/* Submit Button */}
        <button type="submit" className="submit-btn" disabled={isSubmitting}>
          {isSubmitting ? "Submitting..." : "Submit Order"}
        </button>
      </form>
    </div>
  );
};

export default Orders;
