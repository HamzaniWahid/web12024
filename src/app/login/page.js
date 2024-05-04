'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [jumlah, setJumlah] = useState(3)
  const router = useRouter()

  const handleLogin = async (e) => {
    let nilaiJumlah = jumlah;
    e.preventDefault();
    if (nilaiJumlah == 0) {
      alert('Anda sudah tidak berhak, silahkan tunggu 1 jam');
      return;
    }
    else if (!email || !password) {
      alert('Please enter email and password');
      return;
    } else if (email != 'admin@gmail.com' || password != '123') {
      nilaiJumlah = nilaiJumlah - 1;
      setJumlah(nilaiJumlah);
      alert('Email atau password salah');
      return;
    } else {
      router.push('/dashboard')
    }
  }

  return (
    <div className="container">
      <p>Login Maksimal adalah  {jumlah}</p>
      <h1 className="mt-5">Halaman Login</h1>
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
