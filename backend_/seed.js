import mongoose from 'mongoose';
import Product from './models/products/product.model.js';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env

mongoose.connect(process.env.MONGO); // Use the MONGO URI from .env

const products = [
  { title: "Plant based softies", price: "Rs.450", image: "/f1.jpeg", alt: "Veg softies", category: "Food", stock: 10 },
  { title: "Chiken chonks", price: "Rs.550", image: "/f2.jpeg", alt: "Meat Delights", category: "Food", stock: 10 },
  { title: "Chiken & Duck softies", price: "Rs.650", image: "/f3.jpeg", alt: "Mix Delights", category: "Food", stock: 10 },
  { title: "Nibbles", price: "Rs.200", image: "/f4.jpeg", alt: "Nibbles", category: "Food", stock: 10 },
  { title: "Salmon chonks", price: "Rs.500", image: "/f5.jpeg", alt: "Salmon", category: "Food", stock: 10 },
  { title: "Gnashers", price: "Rs.600", image: "/f6.jpeg", alt: "Gnashers", category: "Food", stock: 10 },
  { title: "Mist Shampoo", price: "Rs.700", image: "/g1.jpg", alt: "Pet Shampoo", category: "Grooming", stock: 10 },
  { title: "Shampoo", price: "Rs.600", image: "/g2.jpg", alt: "Olive oil mix shampoo", category: "Grooming", stock: 10 },
  { title: "Paw pad cream", price: "Rs.800", image: "/g3.jpg", alt: "Paw pad cream", category: "Grooming", stock: 10 },
  { title: "Cloud care brush", price: "Rs.900", image: "/g4.jpg", alt: "Cloud care brush", category: "Grooming", stock: 10 },
  { title: "Dpg combe", price: "Rs.550", image: "/g5.jpg", alt: "Combs", category: "Grooming", stock: 10 },
  { title: "Ear cleaner", price: "Rs.500", image: "/g6.jpg", alt: "Ear cleaner", category: "Grooming", stock: 10 },
  { title: "Skin Health", price: "Rs.450", image: "/s1.jpg", alt: "Suppliment", category: "Supplements", stock: 10 },
  { title: "Multivitamin", price: "Rs.600", image: "/s2.jpg", alt: "Multi Vitamin", category: "Supplements", stock: 10 },
  { title: "Multi Functional", price: "Rs.550", image: "/s4.jpg", alt: "Multi Finctional", category: "Supplements", stock: 10 },
  { title: "Hip and joint", price: "Rs.700", image: "/s3.jpg", alt: "Skin & Coat Care", category: "Supplements", stock: 10 },
  { title: "Gut Health", price: "Rs.800", image: "/s5.jpg", alt: "Energy Boost Powder", category: "Supplements", stock: 10 },
  { title: "Digestive Aid", price: "Rs.650", image: "/s8.jpg", alt: "Digestive Aid", category: "Supplements", stock: 10 },
  { title: "Skin & coat care", price: "Rs.550", image: "/s7.jpg", alt: "Skin care", category: "Supplements", stock: 10 },
];

const seedProducts = async () => {
  try {
    await Product.deleteMany({});
    await Product.insertMany(products);
    console.log('Products seeded successfully!');
    mongoose.connection.close();
  } catch (err) {
    console.error('Error seeding products:', err);
  }
};

seedProducts();