import React from 'react';
import GiphListItem from '../GiphListItem/GiphListItem';

import './GiphList.css';

const GiphList = (props) => {
  return (
    <div className="list-container">
      {props.giphs.map((giph) => {
        return (
          <GiphListItem key={giph.id} giph={giph} />
        )
      })}
    </div>
  );
};

export default GiphList;