// src/pages/Home.jsx
import React, { useEffect, useRef } from "react";
import Header from "../components/Header";
import Hero from "../components/Hero";
import MovieSection from "../components/MovieSection";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom";
import { useFilmData } from "../hooks/useFilmData";

export default function Home({ footer, datahero }) {
  const navigate = useNavigate();
  const hasChecked = useRef(false);
  const { data, loading, error } = useFilmData();

  // Cek autentikasi user saat pertama kali halaman dimuat
  useEffect(() => {
    if (!hasChecked.current) {
      const user = JSON.parse(localStorage.getItem("loggedInUser"));
      if (!user) {
        alert("Silakan login terlebih dahulu!");
        navigate("/login");
      }
      hasChecked.current = true;
    }
  }, [navigate]);

  // Tampilan loading
  if (loading) {
    return (
      <div className="bg-[#181A1C] text-white min-h-screen flex justify-center items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  // Tampilan error
  if (error) {
    return (
      <div className="bg-[#181A1C] text-white min-h-screen flex justify-center items-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-red-500 mb-4">
            Error Loading Data
          </h2>
          <p className="text-gray-400">{error}</p>
          <button
            onClick={() => window.location.reload()}
            className="mt-4 px-6 py-2 bg-blue-500 hover:bg-blue-600 rounded-md transition-colors"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  // Acak urutan data agar tampilan dinamis
  const imgvertikal = [...data.imgVertikal].sort(() => Math.random() - 0.5);
  const topmovies = [...data.topMovies].sort(() => Math.random() - 0.5);
  const datamovies = [...data.dataMovies].sort(() => Math.random() - 0.5);
  const newmovies = [...data.newReleaseMovies].sort(() => Math.random() - 0.5);

  // Tampilan utama
  return (
    <div className="bg-[#181A1C] text-white min-h-screen">
      <Header />
      <Hero datahero={datahero} />
      <main className="px-6 md:px-20 py-10 space-y-10">
        <MovieSection
          title="Melanjutkan Tontonan Film series"
          moviesvertikal={imgvertikal}
          type="vertikal"
        />
        <MovieSection
          title="Persembahan dari chill"
          topmovies={topmovies}
          type="topmovies"
        />
        <MovieSection
          title="Top Rating Film dan Series Hari ini"
          movies={datamovies}
          type="movies"
        />
        <MovieSection
          title="Film Trending"
          type="topmovies"
          topmovies={topmovies}
        />
        <MovieSection
          title="Rilis Baru"
          type="newmovies"
          newmovies={newmovies}
        />
      </main>
      <Footer footers={footer} />
    </div>
  );
}
