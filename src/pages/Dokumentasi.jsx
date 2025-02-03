import React from "react";

const Dokumentasi = () => {
  return (
    <div className="flex flex-col items-center justify-center bg-gray-100 dark:bg-gray-900 p-8">
      <h1 className="text-2xl font-bold text-center text-black dark:text-aliceblue mb-6">DOKUMENTASI</h1>
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-xl p-6 max-w-xl w-full">
        {/* section-1 */}
        <p className="text-xl font-semibold text-black dark:text-aliceblue text-center mb-1">Dokumentasi Kegiatan PMK 2024</p>
        <div className="border-b-2 border-brownsoft2 mb-4 w-1/2 mx-auto" />
        <ul className="list-disc list-inside text-black dark:text-aliceblue text-lg">
          <li>
            <a href="https://drive.google.com/your-link-here" target="_blank" rel="noopener noreferrer" className="hover:text-brownsoft2 transition duration-300">
              PICC 2024
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/your-link-here" target="_blank" rel="noopener noreferrer" className="hover:text-brownsoft2 transition duration-300">
              PIEC 2024
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/drive/folders/1-4PAoQZpAGmHfYkzVxpCc4_Pr3Z-UHCj?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:text-brownsoft2 transition duration-300">
              DIES NATALIS PMK 2024
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/drive/folders/1-Q7FBikp02kXU5LN9Ii4R0vT1AdEUpwT?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:text-brownsoft2 transition duration-300">
              FIRST GATHERING PMK 2024
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/drive/folders/178_x0e1k0Mqz63QuAHdxqyNH9DD1xBLO?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:text-brownsoft2 transition duration-300">
              UPGRADING PMK 2024
            </a>
          </li>
          <li>
            <a href="https://drive.google.com/drive/folders/16vgHd42Sx2iwghJ6qhkSV80zuOjWQOcy?usp=drive_link" target="_blank" rel="noopener noreferrer" className="hover:text-brownsoft2 transition duration-300">
              IBADAH MINGGUAN PMK 2024
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Dokumentasi;
