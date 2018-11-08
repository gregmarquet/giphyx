import React from 'react';
import GiphListItem from '../GiphListItem/GiphListItem';

const GiphList = (props) => {
  return (
    <div className="row">
      {props.giphs.map((giph) => {
        return (
          <GiphListItem key={giph.id} giph={giph} />
        )
      })}
    </div>
  );
};

export default GiphList;