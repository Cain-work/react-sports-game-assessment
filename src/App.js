import React from 'react';
import './App.css';

import Game from './components/game/Game';


function App(props) {
  const knights = {
      name: "Columbus Knights",
      logoSrc: "./components/images/Knights.png"
  }
  const warriors = {
      name: "West Warriors",
      logoSrc: "./components/images/Warriors.jpg"
  }
  const golden = {
      name: "Golden Knihgts",
      logoSrc: "./components/images/Knights.png"
  }
  const silver = {
      name: "Silver Warriors",
      logoSrc: "./components/images/Warriors.jpg"
  }
  return (
      <div className="App">
          <Game
              venue="World Arena"
              homeTeam={knights}
              visitingTeam={warriors}
          />
          <Game venue="Gauntlet Arena"
              homeTeam={golden}
              visitingTeam={silver}
          />
      </div>
  )
}

export default App;
