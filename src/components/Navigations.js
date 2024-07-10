'use client'
import { useSelector, useDispatch }   from 'react-redux';
import { logout } from  '@/slices/loginSlice';
import { useRouter } from 'next/navigation';

function Navigation() {
  const dispatch = useDispatch();
  const router = useRouter()
  const isLogout = useSelector(state => state.login.isLogin);
  const logoutClick = async () => {
    dispatch(logout());
  }

  return (
    <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
      <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="/dashboard">Dashboard</a>
      <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="/mahasiswa">Mahasiswa</a>
      <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="/matkul">Matkul</a>
      <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="/fakultas">Fakultas</a>
      <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="/user">User</a>
      <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="/profile">Profile</a>
      <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="/about">About</a>
      <a className="me-3 py-2 link-body-emphasis text-decoration-none" href="/counter">Counter</a>
      {isLogout ?   
      <a className="py-2 link-body-emphasis text-decoration-none" onClick={logoutClick} >Logut</a> 
      : <a className="py-2 link-body-emphasis text-decoration-none" href="/login">Login</a>}
    </nav>
  );
}

export default Navigation;
