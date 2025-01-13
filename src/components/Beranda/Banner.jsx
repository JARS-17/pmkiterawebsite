import React from "react";
import BooksStack from "../../assets/pmkweb/3pengurus.jpg";
import Vector from "../../assets/vector3.png";
import { GrGroup } from "react-icons/gr";
import { BiSupport } from "react-icons/bi";
import { AiOutlineFileProtect } from "react-icons/ai";
import { FaRegNewspaper } from "react-icons/fa";

const Banner = () => {
  const bgImage = {
    backgroundImage: `url(${Vector})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%",
    width: "100%",
  };

  return (
    <>
      <div className="container bg-brownsoft2 rounded-2xl dark:bg-gray-800 dark:text-aliceblue">
        <div className="min-h-[500px] flex justify-center items-center backdrop-blur-xl py-12 sm:py-0 ">
          <div data-aos="slide-up" className="container">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              {/* Image section */}
              <div>
                <img src={BooksStack} alt="biryani img" className="max-w-[300px] h-[250px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover" />
              </div>
              {/* text content section */}
              <div className="flex flex-col justify-center gap-6 sm:pt-0">
                <h1 className="text-3xl sm:text-4xl font-bold">Shalom PMK FRIENDS✨</h1>
                <p className="text-sm text-justify text-gray-600 dark:text-gray-300 tracking-wide leading-5">
                  PMK ITERA adalah sebuah wadah pengembangan kerohanian dan spiritual bagi mahasiswa Kristen Institut Teknologi Sumatera. Bergabunglah dalam Ibadah persekutuan kami.
                </p>
                <div className="flex flex-col gap-4">
                  <div className="flex items-center gap-4">
                    <GrGroup className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400" />
                    <p>Persekutuan</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <BiSupport className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400" />
                    <p>Dukungan Doa</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <AiOutlineFileProtect className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400" />
                    <p>Peminjaman RIMA</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <FaRegNewspaper className="text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400" />
                    <p>Renungan Harian</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
