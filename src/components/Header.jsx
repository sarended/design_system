import React from 'react';

const Header = (props) => {
  return (
    <div className="header">
      <div className="toggle-sidebar" onClick={props.toggleSide}>
        {props.showSide ? (
          <img className="menu-icon" src="/times-solid.svg" alt="خروج" />
        ) : (
          <img className="menu-icon" src="/bars-solid.svg" alt="منو" />
        )}
      </div>
      <a href="http://localhost:3000/">سند هویت دیداری اسنپ گاراژ</a>
    </div>
  );
};

export default Header;
