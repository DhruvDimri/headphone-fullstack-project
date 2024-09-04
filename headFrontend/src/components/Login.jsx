import React, { useState } from "react";
import "./login.css";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [login, setLogin] = useState({
    email: "",
    password: "",
  });

  function handleChange(name, value) {
    setLogin((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:8000/users/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(login),
      });
      if (response.ok) {
        console.log("Login successfully");
        navigate("/home");
      } else {
        // Handle non-JSON responses
        const contentType = response.headers.get("Content-Type");
        if (contentType && contentType.includes("application/json")) {
          // Response is JSON
          const errorData = await response.json();
          console.log("Error response from server:", errorData);
        } else {
          // Response is not JSON
          const errorText = await response.text();
          console.log("Error response from server:", errorText);
        }
      }
    } catch (error) {
      console.log("Error h fetch mai", error.message);
    }
  }

  return (
    <div className="login">
      <p>
        <span>Login</span> your account
      </p>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email*"
          value={login.email}
          name="email"
          required
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <input
          type="password"
          placeholder="Password*"
          value={login.password}
          name="password"
          required
          onChange={(e) => handleChange(e.target.name, e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;