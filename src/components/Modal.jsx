import PropTypes from 'prop-types';


const Modal = ({handleClick}) => {
    return (
        <div className='modal'>
            <div className="menu-container">
                <h1>YOU WON!!!!</h1>
                <button onClick={handleClick}>Play Again</button>
            </div>
        </div>
    );
};


Modal.propTypes = {
    handleClick: PropTypes.func,

};


export default Modal;
