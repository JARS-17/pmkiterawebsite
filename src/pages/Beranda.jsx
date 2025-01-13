import React from "react";
import Services from "../components/Beranda/Services.jsx";
import Banner from "../components/Beranda/Banner.jsx";
import AppStore from "../components/Beranda/AppStore.jsx";
//import Books from "../components/Books.jsx";
import AyatEmas from "../components/Beranda/AyatEmas.jsx";

const Beranda = () => {
  return (
    <div>
      {/* Main Content */}
      <div className="p-4 max-w-4xl mx-auto">
        {/* Section for Dashboard */}
        <section>
          <Banner />
          <Services />
          <AppStore />
          <AyatEmas />
        </section>
      </div>
    </div>
  );
};

export default Beranda;
