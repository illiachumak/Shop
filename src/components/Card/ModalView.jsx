import '../../scss/ModalView.scss'
import addBtn from '../../assets/add-btn.png'
import React, {useState, useRef, useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { setCartProducts } from '../../redux/slices/productListSlice';

const ModalView = (props) => {
const dispatch = useDispatch();    
const product = useSelector(state => state.productList.productList[props.index]);

const [size, setSize] = useState(0);
const [taste, setTaste] = useState(0);
const [inputValue, setInputValue] = useState('');

const handleInputChange = (event) => {
    if(event.target.value < 0 ){
        event.target.value = ''
    }
    setInputValue(event.target.value);
  };


const closePopup = () => {
    props.closeFunc()
}

const addPizzaFunction = () => {
    
    if(inputValue === ''){
        alert("invalid inputs")
        return
    }

    const addToCartProduct = {
        img: product.img,
        name: product.name,
        quanity: inputValue,
        totalPrice: product.price*inputValue,
        size: product.weight[size],
        taste: product.taste[taste],
    }

    dispatch(setCartProducts(addToCartProduct))

    alert("Product added to cart");
    props.closeFunc()

}
    return(
        <div className='card-modal-view'>
        <div className="card-container-modal" >
          <img className='card-img' src={product.img} alt=''></img>
          <span className='pizza-name'>{props.text}</span>
          <div className='card-details'>
            <div className='card-details-first'>
                <span className={size === 0 ? "white-bg" : ""} onClick={() => setSize(0)}>{product.weight[0]}</span>
                <span className={size === 1 ? "white-bg" : ""} onClick={() => setSize(1)}>{product.weight[1]}</span>
            </div>
            <div className='card-details-first'>
                <span className={taste === 0 ? "white-bg" : ""} onClick={() => setTaste(0)}>{product.taste[0]}</span>
                <span className={taste === 1 ? "white-bg" : ""} onClick={() => setTaste(1)}>{product.taste[1]}</span>
            </div>
          </div>
          <label htmlFor="quantityInput" className='label-input'>Enter the quantity of the product:</label>
                <div className='modal-view-price'>
                    <input
                        type="number"
                        id="quantityInput"
                        name="quantityInput"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                    <div className='price-modal-view'>{inputValue === '' ? product.price : product.price*inputValue}$</div>
                </div>
          <div className='card-buttons'>
          <div className='add-btn' onClick={closePopup}> <span>Close</span></div>
            <div className='add-btn' onClick={addPizzaFunction}>
                
                <span>Add</span>
            </div>
          </div>
        </div>
        </div>
    );
}

export default ModalView;
