import '../scss/SortPopUp.scss';
import React, { useState } from 'react';

const SortPopUp = () => {
  const sortList = ["popular", 'price', 'price'];
  const [selected, setSelected] = useState(0);
  const [popup, setPopup] = useState(false);

  const onClickSelectSort = (i) => {
    setSelected(i);
    setPopup(!popup);
  };

  const popupOnClick = () => {
    setPopup(!popup);
  };

  const priceIcon = (i) => {
    if (i === 1) {
      return <span className="sort-icon up"></span>;
    } else if (i === 2) {
      return <span className="sort-icon down"></span>;
    }
  };

  return (
    <>
      <div className={`sort-popup ${popup ? 'opened' : 'closed'}`}>
        <ul>
          {sortList.map((sortItem, i) => (
            <li
              key={i}
              onClick={() => onClickSelectSort(i)}
              className={selected === i ? 'active' : ''}
            >
              {sortItem}
              {priceIcon(i)}
            </li>
          ))}
        </ul>
      </div>
      <span onClick={popupOnClick}>{sortList[selected]}</span>
    </>
  );
};

export default SortPopUp;