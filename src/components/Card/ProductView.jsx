import React, { useState} from 'react';
import ModalViewEdit from './ModalViewEdit';
import '../../scss/ProductView.scss';
import { useDispatch} from 'react-redux';
import axios from 'axios'
import { setDeletion } from '../../redux/slices/productListSlice';

const ProductView = (props) => {
  const [editOpen, setEditOpen] = useState(false);

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
    props.onClickEditInside()
  };

  const closeFunc = () => {
    setEditOpen(false);
  };

  const closePopup = () => {
    props.closeFunc();
  };

  return (
    <div className="card-modal-view" onClick={closePopup}>
      {editOpen && <ModalViewEdit index={props.index} uniqueId={props.uniqueId} closeFunc={closeFunc} />}
      <div className="popup" onClick={e => e.stopPropagation()}>
        <span className="close-btn" onClick={closePopup}>
          &times;
        </span>
        <h2>Product Details</h2>
        <div className="img">
          <img src={props.product.img} alt="Product" />
        </div>
        <p>Price: {props.product.price}$</p>
        <p>Name: {props.product.text}</p>
        <p>Taste: {`${props.product.taste[0]}, ${props.product.taste[1]}`}</p>
        <p>Weight: {`${props.product.weight[0]}, ${props.product.weight[1]}`}</p>
        <div className="buttons">
          <button onClick={onClickDelete}>delete</button>
          <button onClick={onClickEdit}>edit</button>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
