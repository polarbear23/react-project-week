import React from "react";
import Abilities from "./Abilities";
import { useContext } from "react";
import { StoreContext } from "../../../store";
import { Link } from "react-router-dom";
const LeftChampSection = () => {
  const store = useContext(StoreContext);
  return (
    store.state.selectedChampion && (
      <section
        class="left-champ-section"
        style={{
          backgroundImage: `url("/images/champion/centered/${store.state.selectedChampion.id}_0.jpg"`,
        }}
      >
        <section class="lore">
          <h1 class="title">{store.state.selectedChampion.id}</h1>
          <p class="lore-text">{store.state.selectedChampion.lore}</p>
        </section>
        <Abilities />
        <div className="left-arrow-container">
          <Link to="/">
            <img
              class="left-arrow"
              src="/images/navIcons/chevron-right-solid.svg"
              alt="left arrow"
            />
          </Link>
        </div>
      </section>
    )
  );
};

export default LeftChampSection;
