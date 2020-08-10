import React from 'react';
import './App.css';
import './components/teams/Teams';
import './components/game/Game';
import './components/scoreboard/Scoreboard';

function App() {
  return (
    <div className="App">
      <Team />
      <Game />
      <Scoreboard />

    </div>
  );
}

export default App;
