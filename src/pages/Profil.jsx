import React from "react";

const Profil = () => {
  return (
    <div className="p-8 bg-gray-100 dark:bg-gray-900">
      <h1 className="text-2xl font-bold text-center mb-6 text-black dark:text-aliceblue">TENTANG PMK ITERA</h1>
      <p className="text-lg mb-4 text-black dark:text-aliceblue">Halaman ini memuat tentang latar belakang, asas, visi, dan misi organisasi.</p>

      <div data-aos="slide-up" className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6 hover:bg-gray-200 relative shadow-xl duration-high">
        <h2 className="text-xl font-bold mb-4 text-black dark:text-aliceblue">LATAR BELAKANG PEMBENTUKAN PERSEKUTUAN MAHASISWA KRISTEN</h2>
        <p className="text-base mb-4 text-black dark:text-aliceblue">
          Institut Teknologi Sumatera (ITERA), sebuah institusi pendidikan negeri yang terletak di Jati Agung, Lampung Selatan, didirikan pada tahun 2014. Sebagai perguruan tinggi teknik ketiga yang diresmikan oleh pemerintah setelah
          Institut Teknologi Bandung dan Institut Teknologi Sepuluh November, ITERA berupaya memenuhi kebutuhan dan tuntutan masyarakat, khususnya di Pulau Sumatera, untuk ketersediaan pendidikan teknik yang berkualitas.
        </p>
        <p className="text-base mb-4 text-black dark:text-aliceblue">
          Sejak awal pendiriannya, ITERA telah menarik perhatian tidak hanya dari calon mahasiswa sekitar Provinsi Lampung dan Sumatera bagian selatan, tetapi juga dari berbagai wilayah seperti Sumatera Utara, Jawa Barat, dan daerah luar
          pulau Jawa dan Sumatera. Hal ini telah menghasilkan demografi mahasiswa yang beragam dalam hal suku, agama, ras, dan golongan.
        </p>
        <p className="text-base mb-4 text-black dark:text-aliceblue">
          Melihat kebutuhan tersebut, ITERA merasa perlu untuk mendirikan unit kegiatan mahasiswa (UKM) berbasis agama yang dapat mengakomodir kegiatan kerohanian mahasiswa. Di samping karena pertimbangan kerohanian, UKM dianggap penting
          untuk pengembangan kemampuan non-akademis. Sejak awal, mahasiswa dan bagian kemahasiswaan ITERA telah bekerja sama mendirikan UKM bernama Komunitas Mahasiswa Kristen Katolik (KMKK), yang dikhususkan untuk kegiatan rohani bagi
          mahasiswa beragama Kristen Protestan dan Katolik. Namun, seiring waktu dan peningkatan jumlah anggota, timbul kebutuhan untuk membentuk UKM terpisah bagi mahasiswa beragama Kristen Protestan.
        </p>
        <p className="text-base mb-4 text-black dark:text-aliceblue">
          Maka, pada tanggal 14 Februari 2020, PMK ITERA resmi didirikan. UKM ini menjadi komunitas yang mengakomodir seluruh mahasiswa aktif Kristen Protestan di ITERA. PMK ITERA berfungsi untuk memfasilitasi kebutuhan spiritual mahasiswa
          Kristen Protestan dalam menjalankan ibadah, memperkuat ikatan antar umat beragama, dan menjadi 'keluarga' dalam menumbuhkan nilai-nilai Kristen yang diajarkan oleh Tuhan Yesus Kristus. “Ora et labora” atau “berdoa dan bekerja”.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6 hover:bg-gray-200 relative duration-high">
        <h2 className="text-xl font-bold mb-4 text-black dark:text-aliceblue">Asas</h2>
        <p className="text-base mb-4 text-black dark:text-aliceblue">PMK ITERA berasaskan Alkitab sebagai Firman Tuhan.</p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6 hover:bg-gray-200 relative duration-high">
        <h2 className="text-xl font-bold mb-4 text-black dark:text-aliceblue">Visi</h2>
        <p className="text-base mb-4 text-black dark:text-aliceblue">
          Visi PMK ITERA adalah menjadikan mahasiswa ITERA garam dan terang dunia, rajin melakukan kegiatan-kegiatan positif, dan dapat berkembang dalam hal spiritual, intelektual, serta kedewasaan dalam iman seperti Yesus Kristus.
        </p>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-6 hover:bg-gray-200 relative duration-high">
        <h2 className="text-xl font-bold mb-4 text-black dark:text-aliceblue">Misi</h2>
        <p className="text-base mb-4 text-black dark:text-aliceblue">PMK ITERA hadir untuk melaksanakan misi pembekalan, pelatihan, pengutusan PMK, dan dalam memasuki kehidupan masyarakat dan profesi.</p>
      </div>
    </div>
  );
};

export default Profil;
