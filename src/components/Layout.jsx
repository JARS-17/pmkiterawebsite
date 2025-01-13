// src/components/Layout.jsx
import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar.jsx";
import Hero from "./Hero/Hero.jsx";
import Footer from "./Footer/Footer.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const Layout = () => {
  const [orderPopup, setOrderPopup] = React.useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  React.useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <Navbar handleOrderPopup={handleOrderPopup} />
      <Hero handleOrderPopup={handleOrderPopup} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
