import React from 'react';

import './GiphListItem.css';

const GiphListItem = (props) => {
  return (
    <div className='giph-item'>
      <img src={props.giph.images.fixed_height.url} />
    </div>

  );
};

export default GiphListItem;