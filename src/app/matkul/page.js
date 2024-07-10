"use client";
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from "react-redux";//bawaan redux
import { fetchMatkul, deleteMatkul } from "@/slices/matkulSlice";//ini slice
import Link from "next/link";


export default function Home() {
  const dispatch = useDispatch();
  const matkul = useSelector((state) => state.matkul.data);
  const matkulStatus = useSelector((state) => state.matkul.status);
  const router = useRouter();

  useEffect(() => {
    if (matkulStatus === "idle") {
      dispatch(fetchMatkul());//trigger ambil data
    }
  }, [matkulStatus, dispatch]);

  const handleDelete = async (id) => {
    await dispatch(deleteMatkul(id));
    dispatch(fetchMatkul());
  };

  return (
    <div className="container mt-5">
      <h1>Daftar Matkul</h1>
      <Link href="/matkul/tambah">Tambah Matkul</Link>
      {matkulStatus === "loading" && <p>Loading...</p>}
      {matkulStatus === "succeeded" && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nama</th>
              <th scope="col">Kode</th>
              <th scope="col">Deskripsi</th>
              <th scope="col">Aksi</th> {/* Tambah kolom Aksi */}
            </tr>
          </thead>
          <tbody>
            {matkul.map((maktul) => (
              <tr key={maktul.id}>
                <td>{maktul.nama}</td>
                <td>{maktul.kode}</td>
                <td>{maktul.deskripsi}</td>
                <td>
                  <Link href={`matkul/${maktul.id}/ubah`}>Edit</Link> &nbsp;
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(maktul.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {matkulStatus === "failed" && <p>Error loading data...</p>}
    </div>
  );
}
