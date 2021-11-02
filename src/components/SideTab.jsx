import React from 'react';

const SideTab = (props) => {
  console.log(props.selected);
  return (
    <div
      className={props.selected ? 'sidetab selected-tab' : 'sidetab'}
      onClick={() => props.clicked(props.index)}
    >
      {props.title}
    </div>
  );
};

export default SideTab;
