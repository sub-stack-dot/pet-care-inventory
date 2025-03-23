import React from 'react';
import Card from "../components/Card";
import './home.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const navigate = useNavigate();

  const handleGetStartedClick = () => {
    navigate('/Login');
  };

  return (
    <div className="home-background">
      <div className="home-content">
        <Card
          title="Discover Premium Pet Care Solutions"
          description="Your one-stop destination for all pet care needs. Explore our curated selection of essential medical supplies, top-notch grooming products, and nutritious pet food."
          buttonText="Get Started"
          onButtonClick={handleGetStartedClick}
        />
      </div>
    </div>
  );
}