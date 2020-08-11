import React, { Component } from 'react';
import './App.css';
import Game from './components/game/Game';
import knights1 from './components/images/Knights.png'
import warriors1 from './components/images/warriors.jpg'

function App(props) {
  const knights = {
      name: "Columbus Knights",
      logoSrc: knights1
  }
  const warriors = {
      name: "West Warriors",
      logoSrc: warriors1
  }
  const golden = {
      name: "Golden Knihgts",
      logoSrc: knights1
  }
  const silver = {
      name: "Silver Warriors",
      logoSrc: warriors1
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
