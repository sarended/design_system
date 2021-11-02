import React, { useState } from 'react';
import Modal from './Modal';
import SideBar from './SideBar';
import MainFrame from './MainFrame';
import { mdList } from '../MarkDown';

const App = () => {
  const [selected, setSelected] = useState(0);
  const [side, setSide] = useState(false);
  const [showModal, setShowModal] = useState(true);

  const clicked = (i) => {
    setSelected(i);
  };

  const modalClick = () => {
    setShowModal(false);
  };

  // useEffect(() => {}, [mdList]);

  return (
    <div className="body-container">
      {showModal ? <Modal modalClick={modalClick} /> : null}
      <SideBar
        mdList={mdList}
        selected={selected}
        clicked={clicked}
        showSide={side}
      />
      <MainFrame
        mdList={mdList}
        selected={selected}
        showSide={side}
        toggleSide={() => setSide(!side)}
      />
    </div>
  );
};

export default App;
