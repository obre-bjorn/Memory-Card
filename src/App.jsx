import { useState } from 'react'

import './App.css'

function App() {


  return (
    <>
     <div className="l-container">
        <div className="b-game-card">
          <div
            className="b-game-card__cover"
            style={{
              backgroundImage: `url('https://pixabay.com/vectors/boxing-ring-wrestling-wrestler-149840/')`
            }}
          ></div>
        </div>
        <div className="b-game-card">
          <div
            className="b-game-card__cover"
            style={{
              backgroundImage: `url('https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_2.jpg')`
            }}
          ></div>
        </div>
        <div className="b-game-card">
          <div
            className="b-game-card__cover"
            style={{
              backgroundImage: `url('https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_3.jpg')`
            }}
          ></div>
        </div>
        <div className="b-game-card">
          <div
            className="b-game-card__cover"
            style={{
              backgroundImage: `url('https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_4.jpg')`
            }}
          ></div>
        </div>
      </div> <div className="l-container">
        <div className="b-game-card">
          <div
            className="b-game-card__cover"
            style={{
              backgroundImage: `url('https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_1.jpg')`
            }}
          ></div>
        </div>
        <div className="b-game-card">
          <div
            className="b-game-card__cover"
            style={{
              backgroundImage: `url('https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_2.jpg')`
            }}
          ></div>
        </div>
        <div className="b-game-card">
          <div
            className="b-game-card__cover"
            style={{
              backgroundImage: `url('https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_3.jpg')`
            }}
          ></div>
        </div>
        <div className="b-game-card">
          <div
            className="b-game-card__cover"
            style={{
              backgroundImage: `url('https://andrewhawkes.github.io/codepen-assets/steam-game-cards/game_4.jpg')`
            }}
          ></div>
        </div>
      </div>
    </>
  )
}

export default App
