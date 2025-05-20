import React from 'react';
import busImage from '../pictures/ChatGPT Image May 20, 2025, 04_07_08 PM.png';

const About = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', padding: '40px', marginTop: '64px', maxWidth: '900px', marginLeft: 'auto', marginRight: 'auto', backgroundColor: '#f9f9f9', borderRadius: '8px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)' }}>
      <img 
        src={busImage} 
        alt="Moyale Star Bus" 
        style={{ width: '400px', borderRadius: '12px', objectFit: 'cover', marginRight: '40px' }} 
      />
      <div>
        <h1 style={{ color: '#2e7d32', fontWeight: 'bold', marginBottom: '20px' }}>About Us</h1>
        <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#555' }}>
          Discover the Comfort, Reliability, and Elegance of Travel with Moyale Star
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666', marginTop: '16px' }}>
          At Moyale Star, we do more than just move people — we create exceptional travel experiences. From the moment you book to the moment you arrive, every detail is crafted to deliver comfort, safety, and peace of mind.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666', marginTop: '16px' }}>
          Our modern fleet of spacious, air-conditioned buses is designed for your comfort, guided by professional drivers who prioritize safety and punctuality. Whether you're commuting for business, connecting with family, or exploring new places, Moyale Star ensures every journey is smooth, scenic, and stress-free.
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#666', marginTop: '16px' }}>
          Join thousands who trust Moyale Star for their travel — because with us, every seat is a step closer to where you belong.
        </p>
      </div>
    </div>
  );
};

export default About;
