import React from "react";
import { StoreContext } from "../../../store";
import { useContext } from "react";
const SplashIcon = (props) => {
  const { skin, setSelectedSkin, selectedSkin } = props;
  const store = useContext(StoreContext);
  const handleClick = () => {
    setSelectedSkin(skin.num);
  };
  return (
    <img
      key={skin.num}
      class={`splash-button ${
        selectedSkin === skin.num ? "active-splash" : ""
      }`}
      src={`/images/champion/tiles/${store.state.selectedChampion.id}_${skin.num}.jpg`}
      alt="splash icon"
      onClick={handleClick}
    />
  );
};

export default SplashIcon;
