'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { login } from  '@/slices/loginSlice';
import { useSelector, useDispatch }   from 'react-redux';


function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [jumlah, setJumlah] = useState(3)
  const router = useRouter()
  const dispatch = useDispatch();
  const errorMessage = useSelector(state => state.login.errorMessage);
  const success = useSelector(state => state.login.isLogin);
  

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(login({"username": email, "password": password}));
  }

  return (
    success ? router.push('/dashboard') :
    <div className="container">
      {errorMessage}
      <p>Login Maksimal adalah  {jumlah}</p>
      <h1 className="mt-5">Halaman Login</h1>
      <form onSubmit={handleLogin}  className="mt-3">
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
