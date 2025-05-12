import React, { useState, useEffect } from "react";
import img1 from "../assets/right_login.jpg";
import img2 from "../assets/right_login2.jpg";
import img3 from "../assets/right_login3.jpg";
import img4 from "../assets/right_login4.jpg";
import logo_login from "../assets/logo_login.png";
import "../styles/LoginPage.css";
import { Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";

const images = [img1, img2, img3, img4];

const LoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [index, setIndex] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Giả sử login thành công, chuyển sang trang /home
    login();
    navigate("/home");
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="wrapper">
      <div className="left">
        <div className="header">
          <img src={logo_login} alt="Logo" className="logo" />
          <span className="brand">ZeroTwo</span>
        </div>

        <div className="form-wrapper">
          <form onSubmit={handleSubmit}>
            <h4>Start your journey</h4>
            <h3>Sign In to Manager Account</h3>

            <TextField
              label="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              margin="normal"
            />
            <TextField
              label="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              margin="normal"
            />
            <Button
              type="submit"
              variant="contained"
              fullWidth
              sx={{ mt: 2, py: 1.5 }}
            >
              Sign In
            </Button>
          </form>
        </div>
      </div>

      <div className="right">
        {images.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`Slide ${i}`}
            className={`slide ${i === index ? "active" : ""}`}
          />
        ))}

        <div className="dots">
          {images.map((_, i) => (
            <div
              key={i}
              className={`dot ${i === index ? "active" : ""}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
