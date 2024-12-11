import React from "react";
import { useNavigate } from "react-router-dom";
import { logout } from "./authService";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logout();
      alert("Logged out successfully!");
      navigate("/login");
    } catch (error) {
      alert("Logout failed!");
    }
  };

  return (
    <div>
      <h1>Dashboard</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Dashboard;