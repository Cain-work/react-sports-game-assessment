import React from 'react';


function Team(props) {
    let shotPercentageDiv
  
    if (props.stats.shots) {
      const shotPercentage = Math.round((props.stats.score / props.stats.shots) * 100)
      shotPercentageDiv = (
        <div>
          <strong>Shooting %: {shotPercentage}</strong>
        </div>
      )
    }
  
    return (
      <div className="Team">
        <h2>{props.name}</h2>
  
        <div className="identity">
          <img src={props.logo} alt={props.name} />
        </div>
  
        <div>
          <strong>Shots:</strong> {props.stats.shots}
        </div>
  
        <div>
          <strong>Score:</strong> {props.stats.score}
        </div>
  
        {shotPercentageDiv}
  
        <button onClick={props.shotHandler}>Shoot!</button>
      </div>
    )
  }
  
  function teamApp(props) {
    const knights = {
        name: "Columbus Knights",
        logoSrc: "./images/Knights.png"
    }
    const warriors = {
        name: "West Warriors",
        logoSrc: "./images/Warriors.jpg"
    }
    const golden = {
        name: "Golden Knihgts",
        logoSrc: "./images/Knights.png"
    }
    const silver = {
        name: "Silver Warriors",
        logoSrc: "./images/Warriors.jpg"
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
  export default Team;
