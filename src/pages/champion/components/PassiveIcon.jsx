import React from "react";
import { StoreContext } from "../../../store";
import { useContext } from "react";
const PassiveIcon = (props) => {
  const store = useContext(StoreContext);
  const { handleClick, selectedAbility } = props;
  return (
    <div
      id="P"
      class={`text-ability-icon-container ability-icon-div ${
        selectedAbility === "passive" ? "active" : ""
      }`}
      onClick={handleClick}
    >
      <img
        class="passive not-clickable"
        src={`/images/champion/passive/${store.state.selectedChampion.passive.image.full}`}
        alt="Passive"
      />
      <div class="text-ability-container not-clickable ">
        <span class="ability-key-text not-clickable">P</span>
      </div>
    </div>
  );
};

export default PassiveIcon;
