import React from "react";

const AbilityIcon = (props) => {
  const { spell, index, selectedAbility, handleClick } = props;
  const abilityLetter =
    index === 0
      ? "Q"
      : index === 1
      ? "W"
      : index === 2
      ? "E"
      : index === 3
      ? "R"
      : "";
  return (
    <div
      key={abilityLetter}
      id={abilityLetter}
      onClick={handleClick}
      class={`text-ability-icon-container ability-icon-div ${
        selectedAbility === abilityLetter ? "active" : ""
      }`}
    >
      <img
        class="ability not-clickable"
        src={`/images/champion/spell/${spell.image.full}`}
        alt={abilityLetter}
      />
      <div class="text-ability-container not-clickable ">
        <span class="ability-key-text not-clickable">{abilityLetter}</span>
      </div>
    </div>
  );
};

export default AbilityIcon;
