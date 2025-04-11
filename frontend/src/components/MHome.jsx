import React from 'react';
import '../styles/MHome.css';
import react1 from '../assets/react1.png'; // Import the image
import { useNavigate } from 'react-router-dom';

const MHome = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="left-image">
        <img src={react1} alt="Image Description" />
      </div>
      <div className="content">
        <h1>FocusFlow</h1>
        <p>Tailored with just the essentials, FocusFlow is designed for those aiming to maintain clarity and calm while achieving their objectives, projects, and to-dos.</p>
        <button className="get-started" onClick={() => navigate("/register")}>Get Started</button>
        <p>Already have an account? <a href="/login">Sign in</a></p>
      </div>
    </div>
  );
};

export default MHome;
