import '../scss/Navbar.scss';
import React, {useState} from 'react'
import SortPopUp from './SortPopUp'

const Navbar = () => {

    const [navBtn, setNavBtn] = useState(1);


    return(
        <div className="nav-container">
           <div className="sorting-first">
                <div className={navBtn === 1 ? "black-bg" : "white-bg"} onClick={() =>setNavBtn(1)}>All</div>
                <div className={navBtn === 2 ? "black-bg" : "white-bg"} onClick={() =>setNavBtn(2)}>Meat</div>
                <div className={navBtn === 3 ? "black-bg" : "white-bg"} onClick={() =>setNavBtn(3)}>Vegeterian</div>
                <div className={navBtn === 4 ? "black-bg" : "white-bg"} onClick={() =>setNavBtn(4)}>Spicy</div>
           </div>

           <div className="sorting-second">
                Sort by: <SortPopUp/>
           </div>
        </div>
    );
}

export default Navbar;
