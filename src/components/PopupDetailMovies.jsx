import React from "react";
import { useMyList } from "../context/MyListContext";
import { Link } from "react-router-dom";

export default function PopupDetailMovies({ movie, onClose }) {
  const { addToMyList, myList, removeFromMyList } = useMyList();
  const isInMyList = myList.some((m) => m.title === movie.title);

  const handleAdd = () => addToMyList(movie);
  const handleRemove = () => removeFromMyList(movie.title);

  const safeCast = Array.isArray(movie.cast)
    ? movie.cast
    : movie.cast
    ? [movie.cast]
    : [];
  const safeEpisodes = Array.isArray(movie.episodes) ? movie.episodes : [];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4">
      <div className="relative w-full max-w-5xl max-h-[95vh] bg-[#181A1C] rounded-lg overflow-hidden shadow-2xl">
        {/* Tombol Tutup */}
        <button
          onClick={onClose}
          className="absolute right-4 top-4 z-10 w-10 h-10 flex items-center justify-center text-white text-2xl rounded-full bg-[rgba(0,0,0,0.4)] hover:bg-[rgba(0,0,0,0.7)] backdrop-blur-sm"
        >
          ✕
        </button>

        {/* Konten Scrollable */}
        <div className="overflow-y-auto max-h-[95vh]">
          {/* Hero Section */}
          <div className="relative h-[400px] w-full">
            <img
              src={movie.image}
              className="w-full h-full object-cover"
              alt={movie.title}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#181A1C] via-transparent to-transparent" />

            {/* Judul dan Aksi */}
            <div className="absolute bottom-8 left-8 right-8">
              <h1 className="text-4xl sm:text-5xl font-bold mb-4 text-white">
                {movie.title}
              </h1>

              <div className="flex gap-3 flex-wrap">
                {/* Tombol Play */}
                <Link
                  to="/profile"
                  className="flex items-center gap-2 bg-white text-black font-semibold px-5 py-2 rounded-full hover:bg-gray-300 transition"
                >
                  <i className="fi fi-sr-play text-black"></i> Putar
                </Link>

                {/* Tambah / Hapus dari Daftar Saya */}
                {isInMyList ? (
                  <button
                    onClick={handleRemove}
                    className="flex items-center gap-2 border border-gray-400 text-white px-5 py-2 rounded-full hover:bg-gray-700 transition"
                  >
                    <i className="fi fi-sr-check"></i> Di Daftar Saya
                  </button>
                ) : (
                  <button
                    onClick={handleAdd}
                    className="flex items-center gap-2 border border-gray-400 text-white px-5 py-2 rounded-full hover:bg-gray-700 transition"
                  >
                    <i className="fi fi-sr-plus"></i> Tambah ke Daftar Saya
                  </button>
                )}
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="p-8 text-gray-300 space-y-6">
            {/* Info Film */}
            <div className="flex flex-wrap gap-4 text-sm sm:text-base">
              <span className="px-3 py-1 bg-gray-700 rounded-full">
                Rating: ⭐ {movie.rating || "N/A"}
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full">
                {movie.genre || "Drama"}
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full">
                {movie.duration || "1 jam 30 menit"}
              </span>
              <span className="px-3 py-1 bg-gray-700 rounded-full">
                {movie.akses === "premium" ? "Premium" : "Gratis"}
              </span>
            </div>

            {/* Deskripsi */}
            <div>
              <h2 className="text-xl font-semibold mb-2 text-white">
                Sinopsis
              </h2>
              <p className="text-gray-300 leading-relaxed">
                {movie.sinopsis ||
                  movie.description ||
                  "Film ini menceritakan kisah yang penuh emosi dan aksi, di mana karakter utama harus menghadapi tantangan besar untuk mencapai tujuannya."}
              </p>
            </div>

            {/* Pemeran */}
            <div>
              <h2 className="text-xl font-semibold mb-2 text-white">
                Pemeran Utama
              </h2>
              <ul className="list-disc list-inside text-gray-300">
                {safeCast.length > 0 ? (
                  safeCast.map((actor, idx) => <li key={idx}>{actor}</li>)
                ) : (
                  <li>Tidak diketahui</li>
                )}
              </ul>
            </div>

            {/* Episode */}
            {safeEpisodes.length > 0 && (
              <div>
                <h2 className="text-xl font-semibold mb-2 text-white">
                  Episode ({safeEpisodes.length})
                </h2>
                <div className="grid sm:grid-cols-2 gap-4">
                  {safeEpisodes.map((ep, idx) => (
                    <div
                      key={idx}
                      className="bg-[#202325] p-4 rounded-lg hover:bg-[#2a2d2f] transition"
                    >
                      <h3 className="font-semibold text-white mb-1">
                        Episode {idx + 1}: {ep.title || "Tanpa Judul"}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {ep.description || "Deskripsi belum tersedia."}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
