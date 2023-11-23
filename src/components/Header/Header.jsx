import React, { useEffect } from "react";
import "../Header/Header.css";
import TabButton from "../TabButton/TabButton";
import Aos from "aos";
import "aos/dist/aos.css";

function Header() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <header>
      <h1 data-aos="flip-right">
        .club. <span></span>
      </h1>
      <h2>Pool & Cafe</h2>
      <ul data-aos="fade-up">
        <TabButton>Reservation</TabButton>
        <TabButton>Waiting List</TabButton>
      </ul>
    </header>
  );
}

export default Header;
