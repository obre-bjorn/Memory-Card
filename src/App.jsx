import { useState, useEffect } from 'react'

import './App.css'
import Card from './components/Card'
import Header from './components/Header'
import Modal from './components/Modal'


// Using the Neko Anime API


function App() {

  const [score,setScore]  = useState(0)
  const [images,setImgs] = useState([])
  const [clickedImgs,setClickedImgs] = useState([])
  const [bestScore,setBestScore] = useState(0)
  

useEffect(() => {

  fetchImages()

},[])

function fetchImages(){


  fetch("https://api.nekosapi.com/v3/images/random?limit=10", {
    method: "GET",
  }).then(res => res.json())
  .then(data => {
    const imgsData = data.items.map( image => ({id: image.id, url: image.image_url}))
    setImgs(imgsData)
    console.log('Images State: ', images)
  })
}


function shuffler(arr){
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;

}
  
  
  
  function handleCardClick(){
    console.log('Card ', card)
   if(card.clicked != true){
    card.clicked = true
     setScore(prevScore => prevScore+1)
     setBestScore(prevBestScore => prevBestScore+1)
     const shuffledCards = shuffler(images)

     setImgs(shuffledCards)
     console.log("Score: ",score, " Best Score:  ",bestScore )
   }else{
    restartGame()
   }
  
  
  }
  

  function restartGame(){
    setScore(0)
  }


  return (
    <>
      <Modal />
      <Header score={score} bestScore={bestScore}/>

      <div className="l-container">
        {images.length > 0 ? 
          images.map(img => <Card key={img.id } url={img.url} handleClick={handleCardClick}/>) : 
            <h1 className="loading">Loading</h1>
        }          
      </div>
    </>
  )
}

export default App
