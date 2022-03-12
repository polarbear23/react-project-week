import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { StoreContext } from "../../../store";
const ChampionInfo = (props) => {
  const { selectedChampionExists } = props;
  const store = useContext(StoreContext);
  if (!store.state.selectedChampion) return null;
  const { id, blurb } = store.state.selectedChampion;
  let { title } = store.state.selectedChampion;
  const capitaliseFirstLetter = (string) => {
    if (typeof string !== "string") return;
    return string[0].toUpperCase() + string.slice(1);
  };
  title = capitaliseFirstLetter(title);

  return (
    store.state.selectedChampion && (
      <section class="champ-info" key={selectedChampionExists ? id : ""}>
        <h1 class="champ-name">{selectedChampionExists ? id : ""}</h1>
        <h2 class="champ-title">
          {selectedChampionExists
            ? title
            : "Where do you think you are going?!!!"}
        </h2>
        <p class="champ-blurb">
          {selectedChampionExists
            ? blurb
            : "The champion you searched for does not exist! Now you are in trouble!"}
        </p>

        <div class="arrow-container">
          <Link to={`ChampPage/${id}`}>
            <img
              class="champ-more-info-arrow"
              src="../images/navIcons/chevron-right-solid.svg"
              alt="right arrow"
            />
          </Link>
        </div>
      </section>
    )
  );
};

export default ChampionInfo;
