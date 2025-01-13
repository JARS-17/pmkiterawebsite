import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-brownsoft2 px-4">
      {/* Ilustrasi 404 */}
      <img src="/public/404-illustration.svg" alt="Ilustrasi Halaman Tidak Ditemukan" className="w-48 h-48 md:w-64 md:h-64 mb-8" />

      {/* Judul 404 dengan Animasi */}
      <h1 className="text-5xl font-bold text-red-500 animate-bounce">404</h1>

      {/* Pesan Kesalahan */}
      <p className="mt-4 text-lg text-gray-700 dark:text-gray-300 text-center max-w-md">Oops! Halaman yang Anda cari tidak ditemukan.</p>

      {/* Tombol Kembali ke Beranda */}
      <Link to="/" className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition">
        Kembali ke Beranda
      </Link>
    </div>
  );
};

export default NotFound;
