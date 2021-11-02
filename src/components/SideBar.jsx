import React from 'react';
import SideTab from './SideTab';

const SideBar = (props) => {
  return (
    <div className={props.showSide ? 'sidebar showsidebar' : 'sidebar'}>
      <div className="sidebar-title">فهرست</div>
      {props.mdList.map((mdItem, index) => (
        <SideTab
          title={mdItem.title}
          key={mdItem.title}
          clicked={props.clicked}
          index={index}
          selected={props.selected === index ? true : false}
        />
      ))}
    </div>
  );
};

export default SideBar;
