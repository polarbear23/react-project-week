import React, { useState } from "react";
import SplashIconsContainer from "./SplashIconsContainer";
import { Link } from "react-router-dom";
const RightChampSection = () => {
  const [selectedSkin, setSelectedSkin] = useState(0);
  return (
    <section class="right-champ-section">
      <header class="splash-header">
        <h2 class="skins-splash-title">Skins/Artwork</h2>
      </header>
      <SplashIconsContainer
        selectedSkin={selectedSkin}
        setSelectedSkin={setSelectedSkin}
      />

      <div className="right-arrow-container">
        <Link to="/tiles">
          <img
            class="right-arrow"
            src="/images/navIcons/chevron-right-solid.svg"
            alt="right arrow"
          />
        </Link>
      </div>
    </section>
  );
};

export default RightChampSection;
