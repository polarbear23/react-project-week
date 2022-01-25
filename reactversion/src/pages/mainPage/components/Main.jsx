import React from "react";
import { useState, useEffect, useContext } from "react";
import ChampionInfo from "./ChampionInfo";
import { StoreContext } from "../../../store";
const Main = (props) => {
  const { submittedInput } = props;
  const store = useContext(StoreContext);
  const [selectedChampionExists, setSelectedChampionExists] = useState(false);

  useEffect(() => {
    if (!store.state.champions.includes(store.state.selectedChampion)) {
      setSelectedChampionExists(false);
      console.log("doesnt exist");
    } else {
      console.log("does exist");

      setSelectedChampionExists(true);
    }
  }, [submittedInput, store.state.selectedChampion, store.state.champions]);

  return (
    <main class="main-section">
      <div
        class="splash-container"
        style={
          (selectedChampionExists && {
            backgroundImage: `url("/images/champion/centered/${store.state.selectedChampion.id}_0.jpg")`,
          }) ||
          (!selectedChampionExists && {
            backgroundImage: `url("/images/658989.jpg")`,
          })
        }
      >
        <ChampionInfo selectedChampionExists={selectedChampionExists} />
      </div>
    </main>
  );
};

export default Main;
