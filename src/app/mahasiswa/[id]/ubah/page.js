"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { fetchMahasiswaById, updateMahasiswa, fetchMahasiswa } from "@/slices/mahasiswaSlice";

export default function UbahMahasiswa({ params }) {
  const [nama, setNama] = useState("");
  const [nim, setNim] = useState("");
  const [editable, setEditAble] = useState(false);
  const [jurusan, setJurusan] = useState("");
  const mahasiswa = useSelector((state) => state.mahasiswa.selectedMahasiswa);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const id = params.id;
    if (id) {
      console.log(id);
      dispatch(fetchMahasiswaById(id));
    }
  });

  useEffect(() => {
    if (mahasiswa && editable == false) {
      setEditAble(true);
      setNama(mahasiswa.nama);
      setNim(mahasiswa.nim);
      setJurusan(mahasiswa.jurusan);
    }
  }, [mahasiswa, editable]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = {
      id: mahasiswa.id,
      nama,
      nim,
      jurusan,
    };
    await dispatch(updateMahasiswa(updatedData));
    await dispatch(fetchMahasiswa());
    router.push("/mahasiswa");
  };

  return (
    <div className="container mt-5">
      <h1>Ubah Mahasiswa</h1>
      {mahasiswa ? (
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="nama" className="form-label">
              Nama
            </label>
            <input
              type="text"
              className="form-control"
              id="nama"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="nim" className="form-label">
              NIM
            </label>
            <input
              type="text"
              className="form-control"
              id="nim"
              value={nim}
              onChange={(e) => setNim(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="jurusan" className="form-label">
              Jurusan
            </label>
            <input
              type="text"
              className="form-control"
              id="jurusan"
              value={jurusan}
              onChange={(e) => setJurusan(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-primary me-2">
            Simpan
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => router.push("/")}
          >
            Batal
          </button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
