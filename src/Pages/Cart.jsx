import '../scss/Cart.scss';
import xImg from '../assets/x.svg'
import { useSelector, useDispatch } from 'react-redux';
import { removeCartProduct, clearCartProducts } from '../redux/slices/productListSlice';
import axios from 'axios';

function Cart() {
  const dispatch = useDispatch();
  const { cartList, totalPrice } = useSelector((state) => state.productList);

  const onClickRemove = (name) => {
    dispatch(removeCartProduct(name));
  };

  const onClickCheckOut = async () => {
    const confirmCheckout = window.confirm('Do you want to checkout?');
    if (confirmCheckout) {
    
      const data = {
        cartList,
        totalPrice
      };
  
      try {
        
        const response = await axios.post('http://localhost:3001/checkout', data);
  
        
        alert('Number of your order is X');
      } catch (error) {
        
        console.error('Error during checkout:', error);
      }
      dispatch(clearCartProducts())



    }
  };

  return (
    <div className="wrapper">
      {cartList.length === 0 ? (
        <div className='cart-empty'>
          <h1>🙃</h1>
          <h3>
            Cart is empty
            <br />
            Add something and come back 😉
          </h3>
        </div>
      ) : (
        cartList.map((item, i) => {
          return (
            <div className='item' key={i}>
              <div className='item-left'>
                <img alt='' src={item.img}></img>
                <span className='product-name'>{item.name}</span>
                <span>{`${item.size}, ${item.taste}`}</span>
              </div>
              <div className='item-right'>
                <span>{item.quanity}х</span>
                <span>{item.totalPrice}</span>
                <img
                  alt=''
                  src={xImg}
                  className='close-btn'
                  onClick={() => onClickRemove(item.name)}
                ></img>
              </div>
            </div>
          );
        })
      )}
      {cartList.length === 0 ? ('') :(<div className='checkout'>
        <span className='totalPrice'>Total Price: {totalPrice}$</span>
        <div className='checkout-btn' onClick={onClickCheckOut}>
          Checkout
        </div>
      </div>)}
    </div>
  );
}

export default Cart;
