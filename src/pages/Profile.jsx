import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

export default function Profile({ footer }) {
  return (
    <div className="bg-[#181A1C] text-white min-h-screen">
      <Header />

      <div className="max-w-6xl  mx-auto px-4 sm:px-6 lg:px-8  py-10">
        <h1 className="text-2xl sm:text-3xl font-bold mb-8 sm:pt-10 pt-7">
          Profil Saya
        </h1>

        <div className="flex flex-col lg:flex-row gap-10">
          {/* Left Section */}
          <div className="w-full lg:w-3/5">
            <div className="flex flex-col sm:flex-row items-start gap-4 mb-6">
              <img
                src="./img/profile.png"
                alt=""
                className="w-24 h-24 sm:w-[140px] sm:h-[140px]"
              />

              <div className="flex flex-col gap-2">
                <button className="px-4 py-2 text-sm border border-blue-600 rounded-full text-blue-600 hover:bg-blue-500 hover:text-white transition">
                  Ubah Foto
                </button>
                <span className="text-xs text-gray-400">📄 Maksimal 2MB</span>
              </div>
            </div>

            <div className="space-y-4">
              {/* Nama */}
              <div className="bg-[#22282A] border border-gray-700 rounded p-3">
                <label className="block text-xs text-gray-400 mb-1">
                  Nama Pengguna
                </label>
                <div className="flex items-center justify-between gap-2">
                  <input
                    type="text"
                    value="William"
                    className="bg-transparent outline-none text-white w-full"
                    readOnly
                  />
                  <button className="text-gray-400 hover:text-white">✏️</button>
                </div>
              </div>

              {/* Email */}
              <div className="bg-[#22282A] border border-gray-700 rounded p-3">
                <label className="block text-xs text-gray-400 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  value="william1980@gmail.com"
                  className="bg-transparent outline-none text-white w-full"
                  readOnly
                />
              </div>

              {/* Password */}
              <div className="bg-[#22282A] border border-gray-700 rounded p-3">
                <label className="block text-xs text-gray-400 mb-1">
                  Kata Sandi
                </label>
                <div className="flex items-center justify-between gap-2">
                  <input
                    type="password"
                    value="••••••••••••"
                    className="bg-transparent outline-none text-white w-full"
                    readOnly
                  />
                  <button className="text-gray-400 hover:text-white">✏️</button>
                </div>
              </div>

              <button className="bg-blue-600 hover:bg-blue-700 px-6 py-2 rounded-full text-sm font-medium transition">
                Simpan
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className="w-full lg:w-2/5">
            <div className="bg-gradient-to-r from-blue-500 to-blue-700 rounded-xl p-6 min-h-[180px] flex flex-col justify-between">
              <div>
                <div className="inline-block bg-blue-200 text-blue-800 px-4 py-1 rounded-full text-sm font-semibold mb-3">
                  Belum Premium
                </div>

                <h2 className="text-lg sm:text-xl font-bold mb-2">
                  Kamu Belum Premium 🚀
                </h2>

                <p className="text-sm sm:text-base text-blue-100">
                  Upgrade ke akun premium untuk menikmati fitur eksklusif dan
                  pengalaman tanpa batas.
                </p>
              </div>
              <Link
                to="/premium"
                className="border border-gray-200 rounded-full max-w-[200px] mt-1 px-4 py-2 text-sm inline-flex items-center gap-2 bg-blue-300 hover:text-blue-700 hover:cursor-pointer text-left"
              >
                <i className="fi fi-sr-star"></i> <span>Upgrade Premium</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer footers={footer} />
    </div>
  );
}
