import PropTypes from 'prop-types';


const Card = ({url,handleClick}) => {
    return (
        <div className="b-game-card">
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
    url: PropTypes.string
};


export default Card;
