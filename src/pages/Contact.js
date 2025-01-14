import React from "react";
import './contact.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhoneAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';




export default function Contact(){
    return(
        <div>
    <div className="contact-page">
    <div className="contact-form">
      <h2>Contact Us</h2>
      <div className="contact-details">
        
        <p><FontAwesomeIcon icon={faPhoneAlt} /> +94 4636066</p>
        <p><FontAwesomeIcon icon={faEnvelope} /> info@happypaws.com</p>
        <p><FontAwesomeIcon icon={faFacebookF} /><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Face Book</a></p>
        <p> <FontAwesomeIcon icon={faTwitter} /> <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></p>
        <p><FontAwesomeIcon icon={faInstagram} /><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instergram</a></p>

      </div>
      <form>
        <div className="form-group">
          <input type="text" placeholder="First name *" />
          <input type="text" placeholder="Last name *" />
        </div>
        <input type="email" placeholder="Email *" />
        <textarea placeholder="Message *"></textarea>
        <button type="submit">Send</button>
       </form>
       </div>

       <div class="map-container">
         <iframe
         class="map-frame"
         src="https://maps.google.com/maps?width=720&amp;height=600&amp;hl=en&amp;q=faculty%20of%20Engineering,%20University%20of%20Ruhuna,%20Galle,%20Sri%20Lanka+(Happy%20Paws)&amp;t=&amp;z=15&amp;ie=UTF8&amp;iwloc=B&amp;output=embed">
          < span><a href="https://www.gps.ie/">gps vehicle tracker</a></span>
         allowfullscreen=""
         loading="lazy"
         </iframe>
         <div class="map-info">Happy Paws</div>
         </div>
        </div></div>
    );
};