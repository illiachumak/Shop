import '../scss/SortPopUp.scss';
import React, { useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setSortType } from '../redux/slices/filterSlice';

const SortPopUp = () => {
  const sortList = ["popular", 'price', 'alphabetical'];
  const [popup, setPopup] = useState(false);

  const popupRef = useRef(null)
  useEffect( () => {
    const handleClickOutside = (e) => {
      if (!popupRef.current.contains(e.target)){
        setPopup(false);
      }
    }
    document.body.addEventListener('click', handleClickOutside)
    return () => {
      document.body.removeEventListener('click', handleClickOutside)
    }
  }, [])
  
  const selected = useSelector(state => state.filter.sort.name);
  const dispatch = useDispatch();

  const onClickSelectSort = (i) => {
    dispatch(setSortType(i));
    setPopup(!popup);
  };

  const popupOnClick = () => {
    setPopup(!popup);
  };

  const priceIcon = (i) => {
    if (i === 1) {
      return <span className="sort-icon up"></span>;
    }
  };

  return (
    <div className='sort-second-wrap' ref={popupRef} >
      <div className={`sort-popup ${popup ? 'opened' : 'closed'}`} >
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
      <div className='sort-second-wrap'>
      <span onClick={popupOnClick}>{sortList[selected]}</span>
    </div></div>
  );
};

export default SortPopUp;
