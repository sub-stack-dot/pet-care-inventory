import React from 'react';
import './card.css';
import { useNavigate } from 'react-router-dom';

export default function Card() {
  const navigate = useNavigate(); // Initialize the navigation function

  const handleGetStartedClick = () => {
    navigate('/SignIn'); // Navigate to the SignIn page
  };
    return (
    <div>
      <div class="Card1">
    <h1>Discover Premium Pet Care Solutions</h1>
    <p>
        Your one-stop destination for all pet care needs! Explore a curated selection of:
    </p>
    <ul>
        <li>Essential medical supplies</li>
        <li>Top-notch grooming products</li>
        <li>Nutritious and high-quality pet food</li>
    </ul>
    <p>
        Find your perfect match and bring home a new furry friend today!
    </p>
    <button id="getstartedbutton" onClick={handleGetStartedClick}>Get Started</button>
</div>

    </div>
  )
}



