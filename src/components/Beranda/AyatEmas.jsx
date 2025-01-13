import React from "react";
import Slider from "react-slick";

const AyatEmasData = [
  {
    id: 1,
    name: "Mazmur 57:10-11 TB",
    text: "Aku mau bersyukur kepada-Mu di antara bangsa-bangsa, ya Tuhan, aku mau bermazmur bagi-Mu di antara suku-suku bangsa; sebab kasih setia-Mu besar sampai ke langit, dan kebenaran-Mu sampai ke awan-awan.",
    img: "https://picsum.photos/101/101",
  },
  {
    id: 1,
    name: "Matius 21:22 TB",
    text: "Dan apa saja yang kamu minta dalam doa dengan penuh kepercayaan, kamu akan menerimanya.”",
    img: "https://picsum.photos/102/102",
  },
  {
    id: 1,
    name: "Matius 11:28 TB",
    text: "Marilah kepada-Ku, semua yang letih lesu dan berbeban berat, Aku akan memberi kelegaan kepadamu.",
    img: "https://picsum.photos/103/103",
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    // slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
    responsive: [
      {
        breakpoint: 10000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center max-w-[600px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              Hari Ini
            </p>
            <h1 className="text-3xl font-bold">Ayat Emas Alkitab</h1>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[1000px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {AyatEmasData.map((data) => {
                return (
                  <div className="my-2">
                    <div
                      key={data.id}
                      className=" flex flex-col gap-4 shadow-lg py-8 px-6 mx-4 rounded-xl dark:bg-gray-800 bg-brownsoft2 relative"
                    >
                      <div>
                        <img
                          className="rounded-full w-20 h-20"
                          src={data.img}
                          alt=""
                        />
                      </div>
                      <div className="flex items-center gap-4">
                        <div>
                          <p className="text-gray-500 text-sm">{data.text}</p>
                          <h1 className="text-xl font-bold text-black/80 dark:text-light">
                            {data.name}
                          </h1>
                        </div>
                      </div>

                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                        ,,
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
