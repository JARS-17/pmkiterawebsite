import React from "react";
import VideoSource from "../../assets/pmkweb/ibadahpplk.mp4";
const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video className="absolute top-0 left-0 w-full h-full object-cover" autoPlay loop muted>
        <source src={VideoSource} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 hover:scale-105 duration-300" />
      <div className="relative z-10 flex flex-col items-center justify-end h-full pb-8">
        <div className="mb-4 bg-brownsoft2 dark:bg-gray-800 text-black dark:text-aliceblue rounded-2xl p-6 shadow-xl mx-auto flex justify-between items-center">
          <div className="flex flex-col">
            <p className="font-Poppins font-bold text-sm">Warta Jemaat</p>
            <h2 className="font-Poppins font-bold  text-2xl mt-2">Ibadah Mingguan</h2>
            <p className="text-sm mt-2">Setiap Jumat, Ibadah PMK dilaksanakan Pukul: 11.00-12.30 WIB. Berlokasi di RIMA (samping asrama TB 02), Institut Teknologi Sumatera. Join with us!! God bless you.</p>
          </div>
          <a href="https://wa.me/your-group-link" target="_blank" rel="noopener noreferrer">
            <button className="bg-aliceblue dark:bg-brownsoft2 text-black py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">JOIN</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
