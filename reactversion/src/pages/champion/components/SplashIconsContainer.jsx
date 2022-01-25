import React from "react";
import { StoreContext } from "../../../store";
import SplashIcon from "./SplashIcon";
import { useContext } from "react";
const SplashIconsContainer = (props) => {
  const { selectedSkin, setSelectedSkin } = props;
  const store = useContext(StoreContext);
  return (
    <main>
      <section class="splash-image-container">
        <section class="splash-icons">
          {store.state.selectedChampion.skins.map((skin) => {
            return (
              <SplashIcon
                skin={skin}
                selectedSkin={selectedSkin}
                setSelectedSkin={setSelectedSkin}
              />
            );
          })}
        </section>
        <img
          class="splash"
          src={`/images/champion/splash/${store.state.selectedChampion.id}_${selectedSkin}.jpg`}
          alt="splash art"
        />
      </section>
    </main>
  );
};

export default SplashIconsContainer;
