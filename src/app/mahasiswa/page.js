"use client";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMahasiswa } from "@/slices/mahasiswaSlice";
import Link from "next/link";

export default function Home() {
  const dispatch = useDispatch();
  const mahasiswa = useSelector((state) => state.mahasiswa.data);
  const mahasiswaStatus = useSelector((state) => state.mahasiswa.status);

  useEffect(() => {
    if (mahasiswaStatus === "idle") {
      dispatch(fetchMahasiswa());
    }
  }, [mahasiswaStatus, dispatch]);

  const handleDelete = async (id) => {
    // Implement delete logic here
  };

  return (
    <div className="container mt-5">
      <h1>Daftar Mahasiswa</h1>
      <Link href="/mahasiswa/tambah">Tambah Mahasiswa</Link>
      {mahasiswaStatus === "loading" && <p>Loading...</p>}
      {mahasiswaStatus === "succeeded" && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nama</th>
              <th scope="col">NIM</th>
              <th scope="col">Jurusan</th>
              <th scope="col">Aksi</th> {/* Tambah kolom Aksi */}
            </tr>
          </thead>
          <tbody>
            {mahasiswa.map((mhs) => (
              <tr key={mhs.id}>
                <td>{mhs.nama}</td>
                <td>{mhs.nim}</td>
                <td>{mhs.jurusan}</td>
                <td>
                  <Link href={`mahasiswa/${mhs.id}/ubah`}>Edit</Link> &nbsp;
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(mhs.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {mahasiswaStatus === "failed" && <p>Error loading data...</p>}
    </div>
  );
}
