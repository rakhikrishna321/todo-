import React, { useState } from "react";
import { TextField, Button, Grid, Typography, Paper } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../styles/Register.css"; // Import the updated CSS
import react1 from "../assets/react1.png"

const Register = () => {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const navigate = useNavigate();

  const handleRegister = async(e) => {
    e.preventDefault()//prevents page reload

// check for missing field
    const missingField = ["Username", "Email", "Password", "Confirm Password"].find(
      (field, index) => ![username, email, password, confirmPassword][index]
    );
    
    if (missingField) {
      alert(`Oops you forgot ${missingField} !`);
      return;
    }

    if(username.length<3){
      alert("Username must be atleast 3 characters long!")
      return
    }

    if (password!==confirmPassword){
      alert("Password do not match!")
      return
    }

    try{
      const response= await fetch("http://localhost:5001/auth/register",{
        method:"POST",
        headers:{
          "Content-Type" : "application/json",
        },
        body:JSON.stringify({username,email,password})
      })
      const data = await response.json();
      if (response.ok){
        alert(data.message)
        navigate("/login");
      }else{
        alert(data.message)
      }
    }catch(error){
      console.error("ERROR",error)
      alert("Something happend you can't register!")
    }
  };

  return (
    <Grid container component="main" className="register-container">
      <Paper elevation={6} square className="MuiPaper-root">
        {/* Left Image Section */}
        <div className="left-image">
          <img src={react1} alt="Register" />
        </div>

        {/* Right Form Section */}
        <div className="register-form">
          <Typography component="h1" variant="h5">
            Register
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
            label="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            label="Confirm Password"
            type="password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            onClick={handleRegister}
          >
            Register
          </Button>

          <Typography
            className="Log"
            onClick={() => navigate("/login")}
            style={{ cursor: "pointer", marginTop: "10px" }}
          >
            Already registered? Then login here!
          </Typography>
        </div>
      </Paper>
    </Grid>
  );
};

export default Register;
