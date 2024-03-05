import { useEffect } from 'react';

import PropTypes from 'prop-types';

const Card = ({id,url,handleClick}) => {


//   useEffect(()=> {

//     const card = document.querySelector(`#${id}`)

//     console.log('Card Loaded',card)


  
  
  
//   // Cleaner function for event listener


// },[])


    return (
        <div id={id} className="b-game-card" onClick={handleClick} >
          <div
            className="b-game-card__cover"
            style={{
              backgroundImage: `url(${url})`
            }}
          ></div>
        </div>
    );
};


Card.propTypes = {
    id: PropTypes.number,
    url: PropTypes.string,
    handleClick: PropTypes.func
};


export default Card;
