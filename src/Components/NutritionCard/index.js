import React from 'react';
import PropTypes from 'prop-types';

import './styles.scss';


const NutritionCard = ({imgUrl, value, type, unit} ) => {

    return (
        <div className='card'>
            <img className='card__img' src={imgUrl} alt="" />
            <div className='wrapper'>
                <p className='card__value'>{value}{unit}</p>
                <p className='card__type'>{type}</p>
            </div>
        </div>
    )
}

export default NutritionCard;

NutritionCard.propTypes = {
    imgUrl: PropTypes.string.isRequired,
    value: PropTypes.number.isRequired,
    type: PropTypes.string.isRequired,
    unit: PropTypes.string.isRequired
}

NutritionCard.defaultProps = {
    imgUrl: "../assets/images/calories-icon.png",
    value: 0,
    type: "type",
    unit: "Kcal"
}