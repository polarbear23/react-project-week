import React from "react";
import Header from "./components/Header";
import Main from "./components/Main";
import "../../styles/championspage.css";
import { useState } from "react";
const ChampionsPage = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [submittedInput, setSubmittedInput] = useState("");
  return (
    <div class="champions-page">
      <Header
        setSearchInput={setSearchInput}
        setSubmittedInput={setSubmittedInput}
        searchInput={searchInput}
      ></Header>
      <Main submittedInput={submittedInput} searchInput={searchInput}></Main>
    </div>
  );
};

export default ChampionsPage;
