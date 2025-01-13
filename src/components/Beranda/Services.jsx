import React from "react";
import Img1 from "../../assets/pmkweb/poster1.jpg";
import Img2 from "../../assets/pmkweb/poster2.jpg";
import Img3 from "../../assets/pmkweb/poster3.jpg";


const ServicesData = [
  {
    id: 1,
    img: Img1,
    title: "PICC 2024",
    description: "Acara Natal untuk memperingati kelahiran Tuhan Yesus Kristus. Bergabunglah dalam perayaan penuh sukacita dan kebersamaan, dengan berbagai kegiatan yang menginspirasi",
    link: "https://www.instagram.com/picc.24_?igsh=MXh4NmhscWNvaWR3NA==",
  },
  {
    id: 2,
    img: Img2,
    title: "PIEC 2024",
    description: "Acara Paskah ini merayakan kematian dan kebangkitan Tuhan Yesus Kristus. Mari kita refleksikan makna pengorbanan dan harapan baru melalui kebangkitan-Nya.",
    link: "https://www.instagram.com/piec.24?igsh=Ynk2cTB1NTVkamtu",
  },
  {
    id: 3,
    img: Img3,
    title: "Dies Natalis PMK",
    description: "Perayaan ulang tahun berdirinya PMK ITERA, Ayo rayakan bersama dengan penuh syukur dan semangat! ",
    link: "#"
  },
];

const Services = ({ handleOrderPopup }) => {
  return (
    <>
      <span id="services"></span>
      <div className="py-10">
        <div className="container p-4 mb-10 rounded-2xl bg-brownsoft2 dark:bg-gray-900 dark:text-aliceblue">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <h1 className="text-3xl font-bold text-blacksoft dark:text-aliceblue">Kegiatan PMK ITERA</h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20 md:gap-5 place-items-center">
            {ServicesData.map((service) => (
              <div data-aos="zoom-in" className="rounded-2xl bg-white dark:bg-gray-800 hover:bg-gray-600 dark:hover:bg-brownsoft2 hover:text-white relative shadow-xl duration-high group max-w-[300px]">
                <div className="h-[100px] mb-4">
                  <img
                    src={service.img}
                    alt=""
                    className="max-w-[100px] block mx-auto transform -translate-y-14
                  group-hover:scale-105  duration-300 shadow-md"
                  />
                </div>
                <div className="p-4 text-center">
                  <div className="w-full flex items-center justify-center gap-1"></div>
                  <h1 className="text-xl font-bold">{service.title}</h1>
                  <p className="text-gray-500 group-hover:text-white duration-high text-sm line-clamp-2">{service.description}</p>
                  <button className="bg-brownsoft2 hover:scale-105 duration-300 text-black py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary" onClick={handleOrderPopup}>
                    {" "}
                    <a href={service.link}>click here </a>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
