import React from "react";
import LeftChampSection from "./components/LeftChampSection";
import RightChampSection from "./components/RightChampSection";
import "../../styles/champion.css";
const ChampPage = () => {
  return (
    <div class="champ-page">
      <main class="champ-section">
        <LeftChampSection />
        <RightChampSection />
      </main>
    </div>
  );
};

export default ChampPage;
