import React from "react";
import { StoreContext } from "../../../store";
import { useContext, useEffect, useState } from "react";
const AbilityVideoSection = (props) => {
  const store = useContext(StoreContext);
  const [spellDescription, setSpellDescription] = useState("");
  const [nameofSpell, setNameOfSpell] = useState("");
  const [videoKey, setVideoKey] = useState(0);
  const { selectedAbility } = props;

  useEffect(() => {
    if (!selectedAbility) return;

    const spell = getSpellData();
    const key = getVideoKeyFromData();
    console.log(selectedAbility);
    setVideoKey(key);
    setSpellDescription(spell.description);
    setNameOfSpell(spell.name);
  }, [selectedAbility]);

  const getSpellData = () => {
    const allSpells = [
      store.state.selectedChampion.passive,
      ...store.state.selectedChampion.spells,
    ];
    console.log("All Spells", allSpells);
    const abilitiesIndexes = {
      P: 0,
      Q: 1,
      W: 2,
      E: 3,
      R: 4,
    };
    console.log("selected Spell", selectedAbility);
    return {
      name: allSpells[abilitiesIndexes[selectedAbility]].name,
      description: allSpells[abilitiesIndexes[selectedAbility]].description,
    };
  };

  const getVideoKeyFromData = () => {
    let key = store.state.selectedChampion.key;
    console.log(key.length);
    switch (key.length) {
      case 3:
        key = `0${key}`;
        console.log(key);
        break;
      case 2:
        key = `00${key}`;
        console.log(key);
        break;
      case 1:
        key = `000${key}`;
        break;
      default:
        break;
    }
    console.log(key);
    return key;
  };

  return (
    <main class="ability-video-text-section">
      <div>
        <h3 class="ability-head">{nameofSpell}</h3>
        <p class="ability-text">{spellDescription}</p>
      </div>

      <div class="video-wrapper">
        <video
          class="ability-video"
          muted
          preload="metadata"
          loop="true"
          autoPlay="true"
          src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${videoKey}/ability_${videoKey}_${selectedAbility}1.webm`}
        >
          <source
            src={`https://d28xe8vt774jo5.cloudfront.net/champion-abilities/${videoKey}/ability_${videoKey}_${selectedAbility}1.webm`}
            type="video/webm"
          />
        </video>
      </div>
    </main>
  );
};

export default AbilityVideoSection;
