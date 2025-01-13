import React from "react";

const Persembahan = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-8">
      <h1 className="text-2xl font-bold text-center text-black dark:text-aliceblue mb-6">PERSEMBAHAN</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-xl w-full text-center">
        <p className="text-lg text-black dark:text-aliceblue mb-2">Kolose 3:17 (TB)</p>
        <div className="border-b-2 border-brownsoft mb-4 w-1/2 mx-auto" />
        <p className="text-lg text-black dark:text-aliceblue mb-4">
          “Dan segala sesuatu yang kamu perbuat dengan
          <br />
          perkataan atau dengan perbuatan,
          <br />
          lakukanlah semuanya itu dalam nama Tuhan Yesus
          <br />
          dan dengan ucapan syukur kepada Allah, Bapa, oleh Dia.”
        </p>
        <a href="https://your-link-here.com" target="_blank" rel="noopener noreferrer">
          <button className="bg-brownsoft2 text-black dark:text-aliceblue py-2 px-4 rounded-lg hover:bg-gray-600 dark:hover:bg-gray-600 transition duration-300">KLIK DISINI</button>
        </a>
        <p className="text-lg font-bold text-black dark:text-aliceblue mt-4">TUHAN YESUS MEMBERKATI 🙏✨</p>
      </div>
    </div>
  );
};

export default Persembahan;
