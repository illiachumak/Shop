import '../../scss/Card.scss'
import addBtn from '../../assets/add-btn.png'
import pizzaImg from '../../assets/pizza_1.png'
import React, {useState} from 'react'

const Card = (props) => {

const [radioBtn1, setRadioBtn1] = useState(false);
const [radioBtn2, setRadioBtn2] = useState(2);

const radioBtn1Func = () => {
    setRadioBtn1(!radioBtn1)
}


    return(
        <div className='card-wrap'>
        <div className="card-container">
          <img className='card-img' src={pizzaImg} alt=''></img>
          <span className='pizza-name'>{props.text}</span>
          <div className='card-details'>
            <div className='card-details-first'>
                <span className={!radioBtn1 ? "white-bg" : ""} onClick={radioBtn1Func}>thin</span>
                <span className={radioBtn1 ? "white-bg" : ""} onClick={radioBtn1Func}>thick</span>
            </div>
            <div className='card-details-second'>
                <span 
                onClick={() => {
                    setRadioBtn2(1)
                }}
                className={radioBtn2 === 1 ? "white-bg" : ""}>25cm</span>
                <span onClick={() => {
                    setRadioBtn2(2)
                }}
                className={radioBtn2 === 2 ? "white-bg" : ""}>30cm</span>
                <span onClick={() => {
                    setRadioBtn2(3)
                }}
                className={radioBtn2 === 3 ? "white-bg" : ""}>40cm</span>
            </div>

          </div>
          <div className='card-buttons'>
            <span>{props.price}$</span>
            <div className='add-btn'>
                <img src={addBtn} alt=''></img>
                <span>Add</span>
            </div>
          </div>
        </div>
        </div>
    );
}

export default Card;
