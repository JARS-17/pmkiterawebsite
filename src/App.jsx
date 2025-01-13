import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import komponen halaman
import Beranda from "./pages/Beranda.jsx";
import Profil from "./pages/Profil.jsx";
import Pengurus from "./pages/Pengurus.jsx";
import Renungan from "./pages/Renungan.jsx";
import Persembahan from "./pages/Persembahan.jsx";
import Dokumentasi from "./pages/Dokumentasi.jsx";
import NotFound from "./pages/NotFound.jsx";
import DetailRenungan from "./pages/DetailRenungan.jsx"; // Import komponen detail

// Import komponen layout navbar hero dan footer
import Layout from "./components/Layout.jsx";

// Import css files
import "./index.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
  return (
    <Router>
      <Routes>
        {/* Rute utama dengan Layout */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Beranda />} />
          <Route path="profil" element={<Profil />} />
          <Route path="pengurus" element={<Pengurus />} />
          <Route path="renungan" element={<Renungan />} />
          <Route path="persembahan" element={<Persembahan />} />
          <Route path="dokumentasi" element={<Dokumentasi />} />
          <Route path="renungan/detail" element={<DetailRenungan />} /> {/* Rute untuk detail renungan */}
        </Route>

        {/* Rute 404 di luar Layout */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
};

export default App;
