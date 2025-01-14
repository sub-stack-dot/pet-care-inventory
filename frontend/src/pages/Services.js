import React from 'react';
import './services.css'


export default function Services() {
  return (
    <div>

      <div className="container">
      {/* Left side with image */}
      <div className="image-side"></div>

      {/* Right side with content */}
      <div className="content-side">
        <h1>Hi! We're Happy Paws,</h1>
        <p>
          an expert dog inventory supplyers<br />
          based in Down South Sri Lanka
        </p>
        <a href="http://localhost:3000/Items" className="btn">
          What we have
        </a>
      </div>
    </div>
    </div>
  )
}
