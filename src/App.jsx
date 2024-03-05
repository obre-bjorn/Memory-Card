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

// Card loading event listener
// useEffect(()=> {


//   const card
  
  
  
//   // Cleaner function for event listener

//   return () =>{



//   } 
// },[])

function fetchImages(){


  fetch("https://api.nekosapi.com/v3/images/random?limit=6", {
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
  
  
  
  function handleCardClick(id){
    
    
   if(!clickedImgs.includes(id) ){
    console.log(clickedImgs)
    setClickedImgs([...clickedImgs,id])
     setScore(prevScore => prevScore+1)

     if(score >= bestScore){

       setBestScore(prevBestScore => prevBestScore+1)

     }

    //  Shuffle images and set images
     const shuffledCards = shuffler(images)
     setImgs(shuffledCards)
     console.log("Score: ",score, " Best Score:  ",bestScore )


   }else{
    resetGame()

   }
  
  
  }

  function restartGame(){

    fetchImages()
    setClickedImgs([])
    setScore(0)

  }
  

  function resetGame(){
    setClickedImgs([])
    setScore(0)
  }

  function checkGame(){


    return score === images.length && images.length!==0

  }
  

  return (
    <>
      {
        checkGame() && <Modal handleClick={restartGame}/>
      }
    
      {/* <Modal /> */}
      <Header score={score} bestScore={bestScore}/>

      <div className="l-container">
        {images.length > 0 ? 
          images.map(img => <Card key={img.id } id={img.id} url={img.url} handleClick={()=>{handleCardClick(img.id)}}/>) : 
            <h1 className="loading"> ⏳ Getting pictures ...</h1>
        }          
      </div>
    </>
  )
}

export default App
