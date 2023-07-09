import '../../scss/Card.scss'
import React, {useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { setDeletion } from '../../redux/slices/productListSlice';

import ModalView from './ModalView'
import ModalViewEdit from './ModalViewEdit'
import addBtn from '../../assets/add-btn.png'
import editBtn from '../../assets/edit-btn.png'
import deleteBtn from '../../assets/delete-btn.png'
import axios from 'axios'

const Card = (props) => {

const [isOpen, setIsOpen] = useState(false)    
const [editOpen, setEditOpen] = useState(false)
const dispatch = useDispatch();


const onClickDelete = () => {
  const deleteConfirm = window.confirm('Do you want to delete the product?');
  if (deleteConfirm) {
    dispatch(setDeletion())
    const uniqueId = props.uniqueId;
    axios.delete('http://localhost:3001/product', { data: { uniqueId } })
      .then(response => {
        console.log('Product deleted successfully');
        
      })
      .catch(error => {
        console.error('Failed to delete product:', error);
        
      });
  }
}



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
           
               
            
            <div>
            <img className='btn-delete' alt='' src={deleteBtn} onClick={onClickDelete}></img>
            <img className='btn-edit' alt='' src={editBtn} onClick={onClickEdit}></img>
                <img className='btn-add' alt='' src={addBtn}  onClick={onClickAdd}></img>

            </div>
          </div>
        </div>
        </div>
        </>
    );
}

export default Card;
