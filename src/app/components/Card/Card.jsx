import React from 'react';

import './index.css';

const Card = props => {
  const { topText, middleText, additionalText } = props;

  return <div className='card'>
    <span className='card_top'>{topText}</span>
    <span className='card_middle'>{middleText}</span>
    {additionalText && <span className='card_additional'>{additionalText}</span>}
  </div>;
};

export default Card;
