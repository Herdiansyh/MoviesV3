// src/context/MyListProvider.js
import React, { useState, useEffect } from "react";
import { MyListContext } from "./MyListContext";
import { myListAPI } from "../services/myListAPI";

export function MyListProvider({ children }) {
  const [myList, setMyList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchMyList = async () => {
    try {
      setLoading(true);
      const data = await myListAPI.getAll();
      setMyList(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMyList();
  }, []);

  // Tambah film ke MyList di MockAPI
  const addToMyList = async (movie) => {
    try {
      if (myList.some((m) => m.id === movie.id)) {
        alert(`${movie.title} sudah ada di Daftar Saya`);
        return;
      }

      const added = await myListAPI.add(movie);
      setMyList((prev) => [...prev, added]);
      alert(`${movie.title} telah ditambahkan ke Daftar Saya`);
    } catch (err) {
      alert(`Gagal menambahkan: ${err.message}`);
    }
  };

  // Hapus film dari MyList di MockAPI
  const removeFromMyList = async (id, title) => {
    try {
      await myListAPI.remove(id);
      setMyList((prev) => prev.filter((m) => m.id !== id));
      alert(`${title} telah dihapus dari Daftar Saya`);
    } catch (err) {
      alert(`Gagal menghapus: ${err.message}`);
    }
  };

  return (
    <MyListContext.Provider
      value={{ myList, addToMyList, removeFromMyList, loading, error }}
    >
      {children}
    </MyListContext.Provider>
  );
}
