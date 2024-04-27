// ./src/app/login/page.js

import Head from 'next/head';
import { useEffect, useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');

  useEffect(() => {
    // Code yang hanya dijalankan di sisi klien
    // Anda dapat menggunakan setState atau operasi klien lainnya di sini
  }, []); // Dependency array kosong agar efek hanya dijalankan sekali setelah render pertama

  return (
    <div>
      <Head>
        <title>Login</title>
      </Head>
      <h1>Login Page</h1>
      <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      {/* Tambahkan formulir login lainnya di sini */}
    </div>
  );
}

export default Login;
