"use client";
import { useEffect } from "react";
import { useRouter } from 'next/navigation';
import { useDispatch, useSelector } from "react-redux";
import { fetchUser, deleteUser } from "@/slices/userSlice";
import Link from "next/link";


export default function Home() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.data);
  const userStatus = useSelector((state) => state.user.status);
  const router = useRouter();

  useEffect(() => {
    if (userStatus === "idle") {
      dispatch(fetchUser());
    }
  }, [userStatus, dispatch]);

  const handleDelete = async (id) => {
    await dispatch(deleteUser(id));
    dispatch(fetchUser());
  };

  return (
    <div className="container mt-5">
      <h1>Daftar User</h1>
      <Link href="/user/tambah">Tambah User</Link>
      {userStatus === "loading" && <p>Loading...</p>}
      {userStatus === "succeeded" && (
        <table className="table">
          <thead>
            <tr>
              <th scope="col">Nama</th>
              <th scope="col">Username</th>
              <th scope="col">Email</th>
              <th scope="col">Aksi</th> {/* Tambah kolom Aksi */}
            </tr>
          </thead>
          <tbody>
            {user.map((usr) => (
              <tr key={usr.id}>
                <td>{usr.nama}</td>
                <td>{usr.username}</td>
                <td>{usr.email}</td>
                <td>
                  <Link href={`user/${usr.id}/ubah`}>Edit</Link> &nbsp;
                  &nbsp;
                  <button
                    className="btn btn-danger"
                    onClick={() => handleDelete(usr.id)}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {userStatus === "failed" && <p>Error loading data...</p>}
    </div>
  );
}
