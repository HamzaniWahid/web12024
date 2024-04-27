'use client'
import Head from 'next/head';
import { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    // Lakukan validasi formulir di sini jika diperlukan

    // Contoh: Validasi bahwa email dan password tidak kosong
    if (!email || !password) {
      alert('Please enter email and password');
      return;
    }
  }

  return (
    <div className="container">
      <h1 className="mt-5">{email}</h1>
      <form onSubmit={handleLogin} className="mt-3">
        <div className="mb-3">
          <label htmlFor="email" className="form-label">Email:</label>
          <input
            type="email"
            className="form-control"
            id="email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
}

export default Login;
