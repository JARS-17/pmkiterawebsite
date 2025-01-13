// src/components/Footer.jsx
import React from "react";
import { FaTiktok, FaInstagram, FaYoutube, FaLocationArrow, FaMobileAlt } from "react-icons/fa";
import footerLogo from "../../assets/pmkweb/logo.png";

// Link untuk setiap kolom
const importantLinks = [
  { title: "Beranda", link: "/" },
  { title: "Profil", link: "/profil" },
  { title: "Pengurus", link: "/pengurus" },
  { title: "Renungan", link: "/renungan" },
];

const usefulLinks = [
  { title: "Persembahan", link: "/persembahan" },
  { title: "Dokumentasi", link: "/dokumentasi" },
  { title: "Event", link: "/events" },
  { title: "Contact", link: "/contact" },
];

const Footer = () => {
  return (
    <footer className="bg-brownsoft2 dark:bg-gray-800 text-blacksoft dark:text-aliceblue">
      <section className="container mx-auto py-10 px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Details */}
          <div>
            <h1 className="text-3xl font-bold flex items-center gap-3 mb-4">
              <img src={footerLogo} alt="PMK ITERA Logo" className="w-12 h-12" />
              PMK ITERA
            </h1>
            <p className="mb-4">Bersatu untuk menjadi berkat.</p>
            <div className="flex items-center mb-2">
              <FaLocationArrow className="text-blacksoft mr-2" />
              <span>Institut Teknologi Sumatera, Lampung Selatan</span>
            </div>
            <div className="flex items-center mb-4">
              <FaMobileAlt className="text-blacksoft mr-2" />
              <span>+8xx-xxxx-xxxx</span>
            </div>
            {/* Social Handles */}
            <div className="flex space-x-4">
              <a href="https://www.instagram.com/pmk_itera?igsh=eGE2NG85dzl3N2wy" aria-label="Instagram" className="text-blacksoft hover:text-primary transition">
                <FaInstagram size={24} />
              </a>
              <a href="https://www.tiktok.com/@pmk_itera" aria-label="Tiktok" className="text-blacksoft hover:text-primary transition">
                <FaTiktok size={20} />
              </a>
              <a href="https://www.youtube.com/@pmkitera6371" aria-label="Youtube" className="text-blacksoft hover:text-primary transition">
                <FaYoutube size={26} />
              </a>
            </div>
          </div>

          {/* Important Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Important Links</h2>
            <ul className="space-y-2">
              {importantLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.link} className="flex items-center text-gray-700 hover:text-primary transition">
                    <span className="mr-2">&#11162;</span>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div>
            <h2 className="text-xl font-semibold mb-4">Useful Links</h2>
            <ul className="space-y-2">
              {usefulLinks.map((link) => (
                <li key={link.title}>
                  <a href={link.link} className="flex items-center text-gray-700 hover:text-primary transition">
                    <span className="mr-2">&#11162;</span>
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-8 border-black dark:border-gray-300" />

        {/* Copyright */}
        <div className="text-center text-gray-600 text-sm mt-4">©2024 All rights reserved || Made with ❤️ by Divisi IT PMK 2024</div>
      </section>
    </footer>
  );
};

export default Footer;
