import { useState } from 'react';
import './signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('http://localhost:7777/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
    })
    .then(response => {
      if (!response.ok) {
        return response.json().then(err => { throw err; });
      }
      return response.json();
    })
    .then(data => {
      alert("Signup Successful! Welcome " + formData.username);
      setFormData({
        username: '',
        email: '',
        password: ''
      });
    })
    .catch(error => {
      console.error('Error:', error);
      alert(error.error || 'Signup failed. Please try again.');
    });
  };

  return (
    <div>
      <h1>Travel Booking App</h1>
      <h2 className="h2"><br />Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input 
          type="text" 
          name="username" 
          placeholder="Enter name" 
          value={formData.username}
          onChange={handleChange}
          required 
        />
        <br /><br />
        <label>Email:</label>
        <input 
          type="email" 
          name="email" 
          placeholder="Enter email" 
          value={formData.email}
          onChange={handleChange}
          required 
        />
        <br /><br />
        <label>Password:</label>
        <input 
          type="password" 
          name="password" 
          placeholder="Enter password" 
          value={formData.password}
          onChange={handleChange}
          required 
        />
        <br /><br />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
}

export default Signup;
