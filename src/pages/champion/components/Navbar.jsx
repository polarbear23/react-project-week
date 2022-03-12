import React from "react";
import { useContext } from "react";
import { StoreContext } from "../../../store";
const Navbar = () => {
  const store = useContext(StoreContext);
  return (
    <header>
      <nav>
        <ul class="nav-container">
          <li class="nav-item name-of-champ">
            {store.state.selectedChampion.id}
          </li>
          <li class="nav-item champions-nav">
            <a href="index.html">Champions</a>
          </li>
          <li class="nav-item tiles-nav">
            <a href="">Tiles</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
