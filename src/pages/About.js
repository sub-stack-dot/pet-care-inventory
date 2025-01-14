import React from "react";
import Happy_costomer from"../components/Happy_costomer";
import './about.css';

export default function About(){
    return(
        <div>
    
            <div className="about-container">
         <div className="about-text">
          <h1>About</h1>
          <h2>Happy Paws</h2>
          <p>
             Our pet care inventory is thoughtfully curated to meet all your furry friend's needs.
             From high-quality food and cozy bedding to fun toys and essential grooming products,
             we provide everything to keep your pets happy and healthy. 
             At Happy Paws Pet Care inventory, we believe in offering only the best for your beloved companions, 
             ensuring comfort, care, and endless tail wags!
         </p>
         </div>
        <Happy_costomer/>
         </div>
        </div>
    );
};