import React from "react";
import AbilityIconsSection from "./AbilityIconsSection";
import AbilityVideoSection from "./AbilityVideoSection";
import { useState } from "react";
const Abilities = () => {
  const [selectedAbility, setSelectedAbility] = useState("P");
  return (
    <section class="abilities">
      <AbilityIconsSection
        setSelectedAbility={setSelectedAbility}
        selectedAbility={selectedAbility}
      />
      <AbilityVideoSection selectedAbility={selectedAbility} />
    </section>
  );
};

export default Abilities;
