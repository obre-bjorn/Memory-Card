import PropTypes from 'prop-types';


const Header = ({score,bestScore}) => {
    return (
      <header>
        <div className="logo">
            <h1>MEMORY GAME</h1>
        </div>
        <div className="scores">
            <h1>SCORE: {score}</h1>
            <h1>BEST SCORE: {bestScore}</h1>
        </div>

      </header>
    );
};


Header.propTypes = {
    score: PropTypes.number,
    bestScore:  PropTypes.number
};


export default Header;
