import React from 'react'
import { useState } from 'react';
import { TextField, Button, Container, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Login = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your registration logic here
    console.log('Registration data:', formData);
  };

  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
       <Container component="main" maxWidth="xs">
      <Paper elevation={3} sx={{ padding: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <Typography component="h1" variant="h5">
          Login
        </Typography>
        <form onSubmit={handleSubmit} style={{ width: '100%', marginTop: '1rem' }}>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            type="email"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            id="password"
            label="Password"
            name="password"
            type="password"
            onChange={handleChange}
          />
          <p style={{textAlign:'center'}}>Don't have a account?<Link to="/register">Register</Link> </p>
          <Button type="submit" fullWidth variant="contained" sx={{ marginTop: '2rem' }}>
            Login
          </Button>
        </form>
      </Paper>
    </Container>
    </div>
  )
}

export default Login
