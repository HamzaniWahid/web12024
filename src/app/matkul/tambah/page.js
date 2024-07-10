'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { useDispatch } from 'react-redux';
import { tambahMatkul } from '@/slices/matkulSlice';

export default function Tambah() {
  const [nama, setNama] = useState('');
  const [kode, setKode] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const dispatch = useDispatch();
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const matkul = { nama, kode, deskripsi };

    await dispatch(tambahMatkul(matkul));
    router.push('/matkul');
  };

  return (
    <div className="container mt-5">
      <h1>Tambah Matkul</h1>
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
          <label className="form-label">Kode</label>
          <input
            type="text"
            className="form-control"
            value={kode}
            onChange={(e) => setKode(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Deskripsi</label>
          <input
            type="text"
            className="form-control"
            value={deskripsi}
            onChange={(e) => setDeskripsi(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Tambah</button>
      </form>
    </div>
  );

}
