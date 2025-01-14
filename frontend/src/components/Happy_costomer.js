import React from 'react';
import './happy_costomer.css';


const Happy_costomer = () => {
  const customers = [
    {
      name: 'PICO',
      image: "/GoldenRotweiler.jpg", // Replace with the actual path or URL
      description: "Happy Paws has everything my furry friend could ever need! From comfy bedding to delicious treats, Paco is always excited when a package arrives!\n– Sarah, proud owner of Pico",
      details: '3 yr old\nGolden Retriever',
    },
    {
      name: 'MIKA & MILO',
      image: "/Beagles.jpg", // Replace with the actual path or URL
      description: "As a busy pet mom, Happy Paws makes my life so much easier. Mika and Milo love their new toys, and I love the quality products and fast delivery!\n– Emma, owner of Mika & Milo",
      details: '3 months old\nBeagle',
    },
    {
      name: 'JOHNY',
      image: "/Rot.jpg", // Replace with the actual path or URL
      description: "I was impressed with the variety of grooming products available. Johny looks and feels so much better after using their recommended shampoo and brush!\n– Liam, Johny's caretaker",
      details: '2 yr old\nGolden Retriever',
    },
    {
        name: 'BELLA',
        image: "/FrenchBulldog's.jpg", // Replace with the actual path or URL
        description: "Bella enjoys her mealtime even more with the premium food we get from Happy Paws. It's so reassuring to know we're giving her the best nutrition.\n– Olivia, French Bulldog owner",
        details: '1 yr old\nFrench Bulldog',
      },
      {
        name: 'MAX & COCO',
        image: "/Labradogs.jpg", // Replace with the actual path or URL
        description: "Our playful duo, Max & Coco, adore the toys and chew bones from Happy Paws. Thanks for keeping them happy and active!\n– Ethan & Mia, pet parents",
        details: '3 yr old\nLabrador Retriever',
      },
      {
        name: 'LUCY',
        image: "/pomanarian.jpg", // Replace with the actual path or URL
        description: "Lucy is a picky eater, but the treats from Happy Paws have been a hit! She also loves her new cozy blanket—it’s her favorite nap spot now!\n– Ava, owner of Lucy",
        details: '2 yr old\nPomeranian',
      }
  ];

  return (
    <section className="happy-customers">
      <h2>OUR HAPPY CUSTOMERS</h2>
      <div className="customer-grid">
        {customers.map((customer, index) => (
          <div className="customer" key={index}>
            <img src={customer.image} alt={customer.name} />
            <h3>{customer.name}</h3>
            <p>{customer.description}</p>
            <span>{customer.details}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Happy_costomer;
