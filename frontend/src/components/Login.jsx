import React, { useState } from 'react';
import { TextField, Button, Grid, Typography, Paper } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../styles/Login.css'; // Import the CSS file if needed
import react1 from "../assets/react1.png"

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // Initialize useNavigate

  const handleLogin = () => {
    // Logic to handle login (e.g., console logging the credentials)
    console.log('Login:', { username, password });

    // Navigate to home page after login
    navigate('/home');
  };

  return (
    <Grid container component="main" className="login-container">
      <Paper elevation={6} square>
        {/* Left Image Section */}
        <div className="left-image">
          <img src={react1} alt="Register" />
        </div>
        <div className="login-form">
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleLogin}
          >
            Sign In
          </Button>
          <Typography className='Log'
                    onClick={() => navigate('/register')}
                    style={{cursor:'pointer',marginTop:"20px"}}>Not registered ? Then register in here!</Typography>
          
        </div>
      </Paper>
    </Grid>
  );
};

export default Login;
