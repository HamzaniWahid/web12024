"use client";
import { useState, useEffect, useRef } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useSelector, useDispatch } from "react-redux";
import { fetchMatkulById, updateMatkul, fetchMatkul } from "@/slices/matkulSlice";

export default function UbahMatkul({ params }) {
  const [nama, setNama] = useState("");
  const [kode, setKode] = useState("");
  const [editable, setEditAble] = useState(false);
  const [deskripsi, setDeskripsi] = useState("");
  const matkul = useSelector((state) => state.matkul.selectedMatkul);
  const dispatch = useDispatch();
  const router = useRouter();

  useEffect(() => {
    const id = params.id;
    if (id) {
      console.log(id);
      dispatch(fetchMatkulById(id));
    }
  });

  useEffect(() => {
    if (matkul && editable == false) {
      setEditAble(true);
      setNama(matkul.nama);
      setKode(matkul.kode);
      setDeskripsi(matkul.deskripsi);
    }
  }, [matkul, editable]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const updatedData = {
      id: matkul.id,
      nama,
      kode,
      deskripsi,
    };
    await dispatch(updateMatkul(updatedData));
    await dispatch(fetchMatkul());
    router.push("/matkul");
  };

  return (
    <div className="container mt-5">
      <h1>Ubah Matkul</h1>
      {matkul ? (
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
            <label htmlFor="kode" className="form-label">
              Kode
            </label>
            <input
              type="text"
              className="form-control"
              id="kode"
              value={kode}
              onChange={(e) => setKode(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="deskripsi" className="form-label">
              Deskripsi
            </label>
            <input
              type="text"
              className="form-control"
              id="deskripsi"
              value={deskripsi}
              onChange={(e) => setDeskripsi(e.target.value)}
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
