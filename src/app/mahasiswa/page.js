'use client'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMahasiswa } from '@/slices/mahasiswaSlice';

export default function Home() {
  const dispatch = useDispatch();
  const mahasiswa = useSelector((state) => state.mahasiswa.data);
  const mahasiswaStatus = useSelector((state) => state.mahasiswa.status);

  useEffect(() => {
    if (mahasiswaStatus === 'idle') {
      dispatch(fetchMahasiswa());
    }
  }, [mahasiswaStatus, dispatch]);

  return (
    <div>
      <h1>Daftar Mahasiswa</h1>
      {mahasiswaStatus === 'loading' && <p>Loading...</p>}
      {mahasiswaStatus === 'succeeded' && (
        <ul>
          {mahasiswa.map((mhs) => (
            <li key={mhs.id}>{mhs.nama} - {mhs.nim} - {mhs.jurusan}</li>
          ))}
        </ul>
      )}
      {mahasiswaStatus === 'failed' && <p>Error loading data...</p>}
    </div>
  );
}
