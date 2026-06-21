import { useState } from 'react';
import './login.css';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:7777/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw data;
      }

      alert("Login Successful! Welcome " + data.user.username);

      setFormData({
        email: '',
        password: ''
      });

    } catch (error) {
      console.error("Error:", error);
      alert(error.error || "Login failed. Please try again.");
    }
  };

  return (
    <div>
      <h1>Travel Booking App</h1>
      <h2 className="h2">Login</h2>

      <form onSubmit={handleSubmit}>
        <label>Email:</label>
        <input 
          type="email"
          name="email"
          placeholder="Enter email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <label>Password:</label>
        <input 
          type="password"
          name="password"
          placeholder="Enter password"
          value={formData.password}
          onChange={handleChange}
          required
        />

        <input type="submit" value="Login" />

        <br /><br />
        <a href="/signup">Don't have an account? Signup</a>
      </form>
    </div>
  );
}

export default Login;