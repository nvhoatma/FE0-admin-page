import React from "react";
import Sidebar from "../components/Sidebar";
import "../styles/HomePage.css";

const HomePage = () => {
  return (
    <div
      style={{
        display: "flex",
        backgroundColor: "#081028",
        minHeight: "100vh",
      }}
    >
      <SidebarLeft />
      <div
        style={{
          marginLeft: "250px",
          padding: "20px",
          flex: 1,
          color: "white",
        }}
      >
        <h1>Welcome to the Home Page</h1>
        <p>Dashboard content here...</p>
      </div>
    </div>
  );
};

export default HomePage;
