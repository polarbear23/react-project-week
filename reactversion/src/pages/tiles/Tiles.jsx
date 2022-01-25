import React, { useContext } from "react";
import { StoreContext } from "../../store";
import "../../styles/tiles.css";
const Tiles = () => {
  const store = useContext(StoreContext);
  return (
    <div className="tiles-container">
      <div
        className="tile-image"
        draggable="true"
        style={{
          backgroundImage: `url("/images/champion/loading/${store.state.selectedChampion.id}_0.jpg"`,
        }}
      >
        <div className="tile-info">
          <h3 className="tile-name">{store.state.selectedChampion.id}</h3>
          <div className="stats-container">
            <div className="stats-icons">
              <div className="stat-icon">
                <img
                  src="/images/statIcons/StatModsAdaptiveForceIcon.png"
                  alt="attack/adaptive force icon"
                  class="adaptive-force-icon"
                />
              </div>
              <div className="stat-icon">
                <img
                  src="/images/statIcons/StatModsAttackSpeedIcon.png"
                  alt="Attack Speed Icon"
                  class="attack-speed-icon"
                />
              </div>
              <div className="stat-icon">
                <img
                  src="/images/statIcons/StatModsHealthScalingIcon.png"
                  alt="health scale icon"
                  class="health-scale-icon"
                />
              </div>
              <div className="stat-icon">
                <img
                  src="/images/statIcons/StatModsArmorIcon.png"
                  alt="armor icon"
                  class="armor-icon"
                />
              </div>
              <div className="stat-icon">
                <img
                  src="/images/statIcons/StatModsMagicResIcon.png"
                  alt="magic resist icon"
                  class="magic-res-icon"
                />
              </div>
              <div className="stat-icon">
                <img
                  src="/images/statIcons/StatModsCDRScalingIcon.png"
                  alt="CDR Icon"
                  class="cdr-icon"
                />
              </div>
            </div>
            <div className="stats-text-container">
              <div className="stats-text">
                <span>{`Attack Damage: ${store.state.selectedChampion.stats.attackdamage}`}</span>
              </div>
              <div className="stats-text">
                <span>{`Attack Speed: ${store.state.selectedChampion.stats.attackspeed}`}</span>
              </div>
              <div className="stats-text">
                <span>{`Health: ${store.state.selectedChampion.stats.hp}`}</span>
              </div>
              <div className="stats-text">
                <span>{`Armor: ${store.state.selectedChampion.stats.armor}`}</span>
              </div>
              <div className="stats-text">
                <span>{`Magic Resist: ${store.state.selectedChampion.stats.spellblock}`}</span>
              </div>
              <div className="stats-text">
                <span>{`CDR: 0`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Tiles;
