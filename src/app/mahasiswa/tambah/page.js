'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux';
import { tambahMahasiswa } from '@/slices/mahasiswaSlice';

export default function Tambah() {
  const [nama, setNama] = useState('');
  const [nim, setNim] = useState('');
  const [jurusan, setJurusan] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const mahasiswa = { nama, nim, jurusan };

    await dispatch(tambahMahasiswa(mahasiswa));
    router.push('/mahasiswa');
  };

  return (
    <div className="container mt-5">
      <h1>Tambah Mahasiswa</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Nama</label>
          <input
            type="text"
            className="form-control"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">NIM</label>
          <input
            type="text"
            className="form-control"
            value={nim}
            onChange={(e) => setNim(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Jurusan</label>
          <input
            type="text"
            className="form-control"
            value={jurusan}
            onChange={(e) => setJurusan(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Tambah</button>
      </form>
    </div>
  );

}
