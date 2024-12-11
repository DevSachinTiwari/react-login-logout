import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { login } from "./authService";

const LoginPage = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      await login(credentials);
      alert("Login successful!");
      navigate("/dashboard");
    } catch (error) {
      alert("Login failed!");
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="email"
        value={credentials.email}
        onChange={(e) => setCredentials({ ...credentials, email: e.target.value })}
      />
      <input
        type="password"
        placeholder="Password"
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;