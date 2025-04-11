import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import "../styles/Navbar.css";
import react1 from "../assets/react1.png"; // Replace with your actual logo
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AccountCircle from "@mui/icons-material/AccountCircle"; // Using Material-UI icon

function Navbar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleOpenMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    console.log("Logging out...");
    setAnchorEl(null);
    navigate("/"); // Redirects to Mhome.jsx (assuming it's linked to '/')
  };

  return (
    <nav className="navbar">
      {/* Left - Logo */}
      <div className="navbar-logo" onClick={() => navigate("/home")} >
        <img src={react1} alt="FocusFlow Logo" />
      </div>

      {/* Center - App Name */}
      <div className="navbar-title" style={{
        fontFamily:'monospace',
        color:'#ffcc00',
      }}>FocusFlow</div>

      {/* Right - Account Icon with Menu */}
      <div className="navbar-account">
        <IconButton onClick={handleOpenMenu} sx={{ color: "white" }}>
          <AccountCircle fontSize="large" />
        </IconButton>
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleCloseMenu}
          sx={{ 
            "& .MuiMenu-paper": {
                height:"40px", 
                width:"70px",
            }
          }}
        >
          <MenuItem onClick={handleLogout}>Logout</MenuItem>
        </Menu>
      </div>
    </nav>
  );
}

export default Navbar;
