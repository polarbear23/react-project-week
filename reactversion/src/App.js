import './styles/App.css';
import { useEffect, useReducer } from 'react';
import ChampionsPage from './pages/mainPage/ChampionsPage';
import { initialState, rootReducer, StoreContext } from './store';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ChampPage from './pages/champion/ChampPage';
import Tiles from './pages/tiles/Tiles';
function App() {
  const [state, dispatch] = useReducer(rootReducer, initialState);
  useEffect(() => {
    //fetch data
    fetch("http://localhost:3030/data")
      .then(resp => resp.json())
      .then(data => {
        dispatch({
          type: "initChampions",
          payload: data
        });
        console.log(data);
      })
      .catch(err => { console.error(err) })

  }, []);

  return (
    <Router>
      <div className="App">
        <StoreContext.Provider value={{ state: state, dispatch: dispatch }}>
          <Routes>
            <Route exact path="/" element={<ChampionsPage />} />
            <Route path="ChampPage/:id/" element={<ChampPage />} />
            <Route path="tiles" element={<Tiles />} />
          </Routes>
        </StoreContext.Provider>
      </div>
    </Router>
  );
}

export default App;
