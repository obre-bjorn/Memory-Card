import { useState, useEffect } from 'react'

import './App.css'
import Card from './components/Card'


// Using the Neko Anime API

const card = {
 clicked: false,
}


function App() {

  const [score,setScore]  = useState(0)
  const [images,setImgs] = useState([])
  const [bestScore,setBestScore] = useState(0)
  

useEffect(() => {

  fetchImages()

},[])

function fetchImages(){


  fetch("https://api.nekosapi.com/v3/images/random?limit=10", {
    method: "GET",
  }).then(res => res.json())
  .then(data => {
    const imgsData = data.items.map( image => ({id: image.id, url: image.image_url,  clicked: false}))
    setImgs(imgsData)
    console.log('Images State: ', images)
  })
}
  
  
  
  function handleCardClick(){
    console.log('Card ', card)
   if(card.clicked != true){
    card.clicked = true
     setScore(prevScore => prevScore+1)
     setBestScore(prevBestScore => prevBestScore+1)
     console.log("Score: ",score, " Best Score:  ",bestScore )
   }else{
     console.log('GameOver: ', bestScore)
   }
  
  
  }
  



  return (
    <>
      <h1>{bestScore}</h1>
      <button onClick={handleCardClick}>Play</button>

      <div className="l-container">
      {images.length > 0 ? images.map(img => <Card key={img.id } url={img.url}/>) : <h1>Loading</h1>}
          {/* <div className="b-game-card">
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
          <Card/> */}
        </div>
    </>
  )
}

export default App
