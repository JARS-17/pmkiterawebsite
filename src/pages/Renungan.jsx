import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom"; 

const Renungan = () => {
  const [posts, setPosts] = useState([]);
  const [image, setImage] = useState(null);
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 10;
  const navigate = useNavigate(); 

  // Memuat entri dari local storage saat komponen dimuat
  useEffect(() => {
    const savedPosts = JSON.parse(localStorage.getItem("renunganPosts")) || [];
    setPosts(savedPosts);
  }, []);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (image && title && text && author) {
      const newPost = { image, title, text, author }; 
      const updatedPosts = [...posts, newPost];
      setPosts(updatedPosts);
      localStorage.setItem("renunganPosts", JSON.stringify(updatedPosts)); 
      setImage(null);
      setAuthor("");
      setTitle("");
      setText("");
    }
  };

  // Fungsi untuk menghapus entri
  const handleDelete = (index) => {
    const updatedPosts = posts.filter((_, i) => i !== index);
    setPosts(updatedPosts);
    localStorage.setItem("renunganPosts", JSON.stringify(updatedPosts));
  };

  // Fungsi untuk membuka file
  const handleOpenFile = (post) => {
    navigate("/renungan/detail", { state: { post } });
  };

  // Logika pagination
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-4 text-center text-black dark:text-aliceblue">RENUNGAN HARIAN</h1>
      <p className="text-black dark:text-aliceblue mb-6 text-center">Halaman menyediakan renungan harian untuk memperkuat iman dan spiritualitas Anda.</p>
      {/* Menampilkan entri yang disimpan */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        {currentPosts.map((post, index) => (
          <div key={index} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
            <img src={post.image} alt={post.title} className="w-full h-32 object-cover rounded-md mb-2" />
            <h2 className="text-xl font-semibold text-black dark:text-aliceblue">{post.title}</h2>
            <p className="text-gray-700 dark:text-gray-300">{post.text.substring(0, 100)}...</p>
            <p className="text-gray-500 dark:text-gray-400 italic">By: {post.author}</p>
            <button
              onClick={() => handleOpenFile(post)} 
              className="bg-blue-400 text-white py-1 px-4 rounded mt-2 inline-block hover:bg-blue-600"
            >
              Open File
            </button>
            <button onClick={() => handleDelete(index)} className="bg-red-400 text-white py-1 px-4 rounded mt-2 inline-block hover:bg-red-600">
              Hapus
            </button>
          </div>
        ))}
      </div>
      {/* Kontrol Pagination */}
      <div className="flex justify-between mb-6">
        <button onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))} disabled={currentPage === 1} className="bg-gray-300 text-black py-1 px-3 rounded disabled:opacity-50">
          &lt; Previous
        </button>
        <span className="self-center">
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages} className="bg-gray-300 text-black py-1 px-3 rounded disabled:opacity-50">
          Next &gt;
        </button>
      </div>
      <h2 className="text-xl text-center text-black dark:text-aliceblue mb-2">Bagikan cerita Renungan atau kesaksian Anda!</h2>
      <div className="bg-brownsoft2 h-1 w-1/2 mx-auto mb-4" />
      {/* Form */}
      <form onSubmit={handleSubmit} className="mb-6">
        <input type="text" placeholder="Author" value={author} onChange={(e) => setAuthor(e.target.value)} className="w-full p-2 mb-2 border rounded dark:bg-gray-800 dark:text-aliceblue" required />
        <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} className="w-full p-2 mb-2 border rounded dark:bg-gray-800 dark:text-aliceblue" required />
        <textarea placeholder="Text" value={text} onChange={(e) => setText(e.target.value)} className="w-full p-2 mb-2 border rounded dark:bg-gray-800 dark:text-aliceblue resize-none" style={{ minHeight: "150px" }} required />
        <input type="file" accept="image/*" onChange={handleImageChange} className="w-full p-2 mb-2 border rounded dark:bg-gray-800 dark:text-aliceblue" required />
        <p className="text-sm text-gray-500 dark:text-gray-400 mb-2">*Gambar tidak mengandung SARA.</p>
        <button type="submit" className="w-full p-2 bg-brownsoft2 dark:bg-gray-800 text-white rounded hover:bg-gray-600 dark:hover:bg-gray-600">
          Save
        </button>
      </form>
    </div>
  );
};

export default Renungan;
