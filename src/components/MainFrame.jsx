import React from 'react';
// import SideBar from './SideBar';
import MarkDown from './MarkDown';
import Footer from './Footer';
import Header from './Header';

const MainFrame = (props) => {
  return (
    <div className="mainframe">
      <Header showSide={props.showSide} toggleSide={props.toggleSide} />
      <MarkDown md={props.mdList[props.selected]} />
      <Footer />
    </div>
  );
};

export default MainFrame;
