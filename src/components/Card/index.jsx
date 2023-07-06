import '../../scss/Card.scss'
import addBtn from '../../assets/add-btn.png'
import pizzaImg from '../../assets/pizza_1.png'
import React, {useState} from 'react'
import ModalView from './ModalView'

const Card = (props) => {

const [isOpen, setIsOpen] = useState(false)    

const closeFunc = () => {
    setIsOpen(false);
  };
  
  const onClickAdd = () => {
    setIsOpen(true);
  };
  
  return (
    <>
      {isOpen && <ModalView index={props.index} closeFunc={closeFunc} />}
        <div className='card-wrap'>
        <div className="card-container">
          <img className='card-img' src={props.img} alt=''></img>
          <span className='pizza-name'>{props.text}</span>
          
          <div className='card-buttons'>
            <span>{props.price}$</span>
            <div className='add-btn' onClick={onClickAdd}>
               
                <span>Add</span>
            </div>
          </div>
        </div>
        </div>
        </>
    );
}

export default Card;
