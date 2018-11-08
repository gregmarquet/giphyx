import React from 'react';

const GiphListItem = (props) => {
  return (
    <div className='giph-item col'>
      <img src={props.giph.images.fixed_height.url} />
    </div>

  );
};

export default GiphListItem;