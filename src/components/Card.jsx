import PropTypes from 'prop-types';


const Card = ({url,handleClick}) => {
    return (
        <div className="b-game-card" onClick={handleClick}>
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
    url: PropTypes.string,
    handleClick: PropTypes.func
};


export default Card;
