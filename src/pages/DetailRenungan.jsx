// DetailRenungan.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom"; // Import useNavigate

const DetailRenungan = () => {
  const location = useLocation();
  const navigate = useNavigate(); // Inisialisasi useNavigate
  const { post } = location.state; // Ambil data post dari state

  if (!post) {
    return <div>Post tidak ditemukan.</div>; // Menangani kasus jika post tidak ada
  }

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 mb-4">
        <h1 className="text-2xl font-bold mb-2 text-center text-black dark:text-aliceblue">{post.title}</h1>
        <p className="text-gray-500 dark:text-gray-400 italic mb-2 text-center">By: {post.author}</p>
        <img src={post.image} alt={post.title} className="w-full h-64 object-cover rounded-md mb-4" />
        <div className="text-gray-700 dark:text-gray-300 text-justify">
          {post.text.split("\n").map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p> 
          ))}
        </div>
        <button
          onClick={() => navigate("/renungan")}
          className="mt-4 p-2 bg-brownsoft2 text-black rounded-lg hover:bg-gray-600" 
        >
          Kembali
        </button>
      </div>
    </div>
  );
};

export default DetailRenungan;
