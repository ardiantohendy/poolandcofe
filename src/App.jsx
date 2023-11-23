import "./App.css";
import { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Header from "./components/Header/Header";
import MainCard from "./components/Main/MainCard";
import TabButton from "./components/TabButton/TabButton";
import { DataForMenu } from "./Datas/Data";

function App() {
  useEffect(() => {
    Aos.init({ duration: 800 });
  }, []);

  const [selectedTopic, setSelectedTopic] = useState("pool");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

  return (
    <div className="App">
      <Header />
      <section className="main">
        <ul data-aos="flip-left">
          <TabButton isSelected={selectedTopic === "pool"} onSelect={() => handleSelect("pool")}>
            Pool
          </TabButton>
          <TabButton isSelected={selectedTopic === "cafe"} onSelect={() => handleSelect("cafe")}>
            Cafe
          </TabButton>
          <TabButton isSelected={selectedTopic === "live_music"} onSelect={() => handleSelect("live_music")}>
            Live Music
          </TabButton>
        </ul>
        <span data-aos="zoom-in"></span>
        <MainCard {...DataForMenu[selectedTopic]} />
      </section>
    </div>
  );
}

export default App;
