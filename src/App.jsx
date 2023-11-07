import "./App.css";
import { useState } from "react";
import Header from "./components/Header/Header";
import MainCard from "./components/Main/MainCard";
import TabButton from "./components/TabButton/TabButton";
import { DataForMenu } from "./Datas/Data";

function App() {
  const [selectedTopic, setSelectedTopic] = useState("pool");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
    console.log(selectedButton);
  }

  return (
    <div className="App">
      <Header />
      <section className="main">
        <ul>
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
        <span></span>
        <MainCard {...DataForMenu[selectedTopic]} />
      </section>
    </div>
  );
}

export default App;
