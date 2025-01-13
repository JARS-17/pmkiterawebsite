import React, { useState } from "react";
import Logo from "../../assets/pmkweb/logo.png";
import DarkMode from "./DarkMode";
import { FaBars, FaTimes } from "react-icons/fa";
import { FaInstagram, FaSpotify, FaTiktok, FaYoutube } from "react-icons/fa"; 

const Menu = [
  {
    id: 1,
    name: "Beranda",
    link: "/",
  },
  {
    id: 2,
    name: "Profil",
    link: "/profil",
  },
  {
    id: 3,
    name: "Pengurus",
    link: "/pengurus",
  },
  {
    id: 4,
    name: "Renungan",
    link: "/renungan",
  },
  {
    id: 5,
    name: "Persembahan",
    link: "/persembahan",
  },
  {
    id: 6,
    name: "Dokumentasi",
    link: "/dokumentasi",
  },
];

const Navbar = ({ handleOrderPopup }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div className="shadow-md bg-brownsoft2 dark:bg-gray-900 dark:text-white duration-200 h-16 flex items-center">
        <div className="container mx-auto flex justify-between items-center h-full">
          <div>
            <a href="/" className="font-bold text-2xl sm:text-3xl flex gap-2">
              <img src={Logo} alt="Logo" className="h-11 w-11" />
            </a>
          </div>
          <div className="flex justify-between items-center gap-4">
            <div>
              <DarkMode />
            </div>
            <button onClick={toggleMenu} className="bg-aliceblue dark:bg-brownsoft2 hover:scale-105 duration-200 font-bold text-blacksoft py-1 px-4 rounded-full flex items-center gap-3">
              MENU
              <FaBars className="text-xl text-blacksoft drop-shadow-sm cursor-pointer" />
            </button>
          </div>
        </div>
      </div>

      {/* Hamburger Menu Popup */}
      {isMenuOpen && (
        <div className={`fixed inset-0 z-50 flex items-center justify-end bg-black bg-opacity-50 transition-opacity duration-300`}>
          <div className="bg-brownsoft2 dark:bg-gray-800 rounded-2xl p-8 shadow-lg w-80 transition-transform transform duration-300">
            <ul className="flex flex-col space-y-2">
              {Menu.map((menu) => (
                <li key={menu.id}>
                  <a href={menu.link} className="block py-2 px-4 text-lg font-Poppins text-black dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 rounded transition-colors duration-200" onClick={() => setIsMenuOpen(false)}>
                    {menu.name}
                  </a>
                </li>
              ))}
            </ul>
            {/* Social Media Links */}
            <div className="flex justify-center mt-4 space-x-4">
              <a href="https://www.instagram.com/pmk_itera?igsh=eGE2NG85dzl3N2wy" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-2xl text-black dark:text-white transition-transform duration-200 hover:scale-110" />
              </a>
              <a href="https://www.tiktok.com/@pmk_itera" target="_blank" rel="noopener noreferrer">
                <FaTiktok className="text-xl text-black dark:text-white transition-transform duration-200 hover:scale-110" />
              </a>
              <a href="https://open.spotify.com/show/5WrunB1fSvuB8V9PEfgOEF?si=67e8bb7a744c4730" target="_blank" rel="noopener noreferrer">
                <FaSpotify className="text-2xl text-black dark:text-white transition-transform duration-200 hover:scale-110" />
              </a>
              <a href="https://www.youtube.com/@pmkitera6371" target="_blank" rel="noopener noreferrer">
                <FaYoutube className="text-2xl text-black dark:text-white transition-transform duration-200 hover:scale-110" />
              </a>
            </div>
            <button className="mt-4 bg-aliceblue dark:bg-brownsoft2 font-Poppins font-bold text-black py-2 px-4 rounded-2xl transition-colors duration-200 hover:bg-gray-200 flex items-center justify-center" onClick={toggleMenu}>
              <FaTimes className="mr-2" />
              TUTUP
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
