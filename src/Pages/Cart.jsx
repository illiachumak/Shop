import '../scss/Cart.scss';
import xImg from '../assets/x.svg'
import { useSelector, useDispatch} from 'react-redux';
import { removeCartProduct } from '../redux/slices/productListSlice';


function Cart() {
  
  const dispatch = useDispatch();

  const onClickRemove = (i) => {
    dispatch(removeCartProduct(i));
    
    
  };
  const { cartList } = useSelector((state) => state.productList);
  

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
            <img alt='' src={xImg} className='close-btn' onClick={() => onClickRemove(item.name)}></img>
            </div>
          </div>
          
        );
      })
    )}
    </div>
  );
}

export default Cart;
