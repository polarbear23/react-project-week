import React from "react";
import { useContext } from "react";
import { StoreContext } from "../../../store";
const ChampionIcon = (props) => {
  const store = useContext(StoreContext);
  const { champion, iconRefs, keyProp } = props;

  const handleClick = () => {
    store.dispatch({
      type: "updateSelectedChampion",
      payload: champion,
    });
  };
  return (
    <li
      id={champion.name}
      key={keyProp}
      ref={(element) => {
        iconRefs.current[keyProp] = element;
      }}
    >
      <img
        class={`icon ${
          store.state.selectedChampion === champion ? "active" : ""
        }`}
        src={`/images/champion/icons/${champion.id}.png`}
        alt={champion.name}
        onClick={handleClick}
      />
    </li>
  );
};

export default ChampionIcon;
