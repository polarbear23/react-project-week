import React from "react";
import { StoreContext } from "../../../store";
import { useContext } from "react";
import AbilityIcon from "./AbilityIcon";
import PassiveIcon from "./PassiveIcon";
const AbilityIconsSection = (props) => {
  const store = useContext(StoreContext);
  const { setSelectedAbility, selectedAbility } = props;
  const handleClick = (event) => {
    console.log("id", event.target);
    setSelectedAbility(event.target.id);
  };
  return (
    <header>
      <h2 class="abilities-title">Spells</h2>
      <div class="ability-icons-container">
        <PassiveIcon
          handleClick={handleClick}
          selectedAbility={selectedAbility}
        />
        {store.state.selectedChampion.spells.map((spell, index) => (
          <AbilityIcon
            spell={spell}
            index={index}
            handleClick={handleClick}
            selectedAbility={selectedAbility}
          />
        ))}
      </div>
    </header>
  );
};

export default AbilityIconsSection;
