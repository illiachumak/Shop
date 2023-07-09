import '../../scss/Card.scss'
import React, {useState} from 'react'
import ModalView from './ModalView'
import ModalViewEdit from './ModalViewEdit'

const Card = (props) => {

const [isOpen, setIsOpen] = useState(false)    
const [editOpen, setEditOpen] = useState(false)
console.log(props.uniqueId)


const onClickEdit = () => {
    setEditOpen(true)
}
const closeFunc = () => {
    setIsOpen(false);
    setEditOpen(false);
  };
  
  const onClickAdd = () => {
    setIsOpen(true);
    
  };
  
  return (
    <>
      {editOpen && <ModalViewEdit index={props.index} uniqueId={props.uniqueId} closeFunc={closeFunc} />}
      {isOpen && <ModalView index={props.index} closeFunc={closeFunc} />}
        <div className='card-wrap'>
        <div className="card-container">
          <img className='card-img' src={props.img} alt=''></img>
          <span className='pizza-name'>{props.text}</span>
          
          <div className='card-buttons'>
            <span>{props.price}$</span>
            <div className='add-btn' onClick={onClickEdit}>
               
                <span>edit</span>
            </div>
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
