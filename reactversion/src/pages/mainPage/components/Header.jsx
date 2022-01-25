import React from "react";
import ChampionIcon from "./ChampionIcon";
import { StoreContext } from "../../../store";
import { useState, useRef, useContext } from "react";
const Header = (props) => {
  const { searchInput, setSearchInput, setSubmittedInput } = props;

  const store = useContext(StoreContext);

  const [hideSearchBar, setHideSearchBar] = useState(true);
  let searchEl;
  const handleMouseEnter = () => {
    setHideSearchBar(false);
  };
  const handleMouseLeave = () => {
    if (document.activeElement === searchEl) return;
    setHideSearchBar(true);
  };
  const handleClick = () => {
    searchEl.focus();
    setHideSearchBar(false);
  };
  const handleFocus = () => {
    if (hideSearchBar === false) return;
    setHideSearchBar(false);
  };
  const handleFocusOut = () => {
    if (hideSearchBar === true) return;
    console.log("hi");
    setHideSearchBar(true);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("search input entered", searchInput);
    setSubmittedInput(searchInput);
    const championsFilteredBySelected = store.state.champions.filter(
      (champion) => {
        if (champion.id.toUpperCase() === searchInput.toUpperCase()) {
          store.dispatch({
            type: "updateSelectedChampion",
            payload: champion,
          });
          return champion;
        }
        return false;
      }
    );
    if (championsFilteredBySelected.length < 1) {
      store.dispatch({
        type: "updateSelectedChampion",
        payload: {},
      });
    }
    iconRefs.current = iconRefs.current.filter(
      (refs) => refs.id.toUpperCase() === searchInput.toUpperCase()
    );
    console.log("refs", iconRefs.current);
    iconRefs.current[0].scrollIntoView();
    event.target.reset();
  };
  const handleOnChange = (event) => {
    event.preventDefault();
    //console.log(event.target.value);
    setSearchInput(event.target.value);
  };

  const iconRefs = useRef([]);

  return (
    <header>
      <form
        class={`search-container ${hideSearchBar ? "" : "slideright"}`}
        onSubmit={handleSubmit}
      >
        <input
          type="text"
          placeholder="Search"
          onFocus={handleFocus}
          onBlur={handleFocusOut}
          onChange={handleOnChange}
          ref={(input) => {
            searchEl = input;
          }}
        />
      </form>
      <div
        class="search-icon"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleClick}
      >
        <img
          class="search-icon-image"
          src="images/navIcons/search-solid.svg"
          alt="Search Icon"
        />
      </div>
      <ul class="icons-container">
        {store.state.champions &&
          store.state.champions.map((champion, index) => (
            <ChampionIcon
              keyProp={index}
              champion={champion}
              iconRefs={iconRefs}
            />
          ))}
      </ul>
    </header>
  );
};

export default Header;
