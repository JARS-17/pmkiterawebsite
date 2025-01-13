import React from "react";
import Book1 from "../assets/pmkweb/1beranda.jpg";
import Book2 from "../assets/pmkweb/2profil.jpg";
import Book3 from "../assets/pmkweb/3pengurus.jpg";
import Pengurus1 from "../assets/pengurus2024/Kesekjenan.jpg";
import Pengurus2 from "../assets/pengurus2024/PMKInternal.jpg";
import Pengurus3 from "../assets/pengurus2024/PMKEksternal.jpg";
import Pengurus4 from "../assets/pengurus2024/PMKAcara.jpg";
import Pengurus5 from "../assets/pengurus2024/PMKPelakhu.jpg";
//import pengurus6 from "../assets/pengurus2024/PMKcmit.jpg";
import Pengurus7 from "../assets/pengurus2024/PMKTalenta.jpg";
import Pengurus8 from "../assets/pengurus2024/PMKOperasional.jpg";
import Pengurus9 from "../assets/pengurus2024/PMKKewirausahaan.jpg";

const pembinaData = [
  {
    id: 1,
    img: Book1,
    title: "Pembina 1",
  },
  {
    id: 2,
    img: Book2,
    title: "Pembina 2",
  },
];

const pengurusIntiData = [
  {
    id: 3,
    img: Pengurus1,
    title: "Kesekjenan",
  },
  {
    id: 4,
    img: Pengurus2,
    title: "Departemen Internal",
  },
  {
    id: 5,
    img: Pengurus3,
    title: "Departemen Eksternal",
  },
  {
    id: 6,
    img: Pengurus4,
    title: "Departemen Acara",
  },
  {
    id: 7,
    img: Pengurus5,
    title: "Departemen Pelakhu  ",
  },
  {
    id: 8,
    img: Book1,
    title: "Departemen CMIT",
  },
  {
    id: 9,
    img: Pengurus7,
    title: "Departemen Talenta",
  },
  {
    id: 10,
    img: Pengurus8,
    title: "Departemen Operasional",
  },
  {
    id: 11,
    img: Pengurus9,
    title: "Departemen Kewirausahaan",
  },
];

const Pengurus = () => {
  return (
    <div className="p-4 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl font-bold mb-4 text-center text-black dark:text-aliceblue">Pengurus PMK ITERA</h1>
      <p className="text-center text-black dark:text-aliceblue mb-6">Temui tim pengurus kami yang berdedikasi dalam menjalankan berbagai program dan kegiatan kerohanian.</p>

      {/* Pembina Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-black dark:text-aliceblue text-center mb-2">PEMBINA</h2>
        <div className="border-b-2 border-brownsoft2 mb-4 w-1/2 mx-auto" />
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
          <div className="flex justify-center space-x-8">
            {pembinaData.map((pembina) => (
              <div key={pembina.id} className="text-center rounded-lg">
                <img src={pembina.img} alt={pembina.title} className="w-40 h-32 rounded-lg mb-2 transition-transform duration-300 transform hover:scale-105" data-aos="zoom-in" />
                <p className="text-black dark:text-aliceblue">{pembina.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Badan Pengurus Harian Section */}
      <h2 className="text-xl font-semibold text-black dark:text-aliceblue text-center mb-2">Badan Pengurus Harian Periode 2024</h2>
      <div className="border-b-2 border-brownsoft2 mb-4 w-1/2 mx-auto" />
      <div className="mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4">
          <div className="grid grid-cols-1 gap-4 justify-items-center mb-4">
            {" "}
            {pengurusIntiData.slice(0, 1).map(
              (
                pengurus
              ) => (
                <div key={pengurus.id} className="text-center rounded-lg">
                  <img src={pengurus.img} alt={pengurus.title} className="w-40 h-32 rounded-lg mb-2 transition-transform duration-300 transform hover:scale-105" data-aos="zoom-in" />
                  <p className="text-black dark:text-aliceblue">{pengurus.title}</p>
                </div>
              )
            )}
          </div>
          <div className="grid grid-cols-2 gap-4 justify-items-center">
            {" "}
            {/* Dua gambar per baris untuk sisa gambar */}
            {pengurusIntiData.slice(1).map((pengurus) => (
              <div key={pengurus.id} className="text-center rounded-lg">
                <img src={pengurus.img} alt={pengurus.title} className="w-40 h-32 rounded-lg mb-2 transition-transform duration-300 transform hover:scale-105" data-aos="zoom-in" />
                <p className="text-black text-center dark:text-aliceblue">{pengurus.title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pengurus;
