
import '../scss/Header.scss';
import logoImg from '../assets/logo.png'
import cartImg from '../assets/cart.svg'
import { Link } from 'react-router-dom';

const Header = () => {




    return(
        <div className="header-container">
            <div className="logo-block">
                <Link to='/'>
                <img className="logo" alt='logo img' src={logoImg}></img></Link>
                <div className="logo-text-container">
                <Link to='/'><span>REACT PIZZA</span></Link>
                    <span className='pizza-text'>The best pizza you will ever have</span>
                </div>
            </div>

            <Link to='/cart' className="cart">
                <div className="cart-price">555$</div>
                <div className="cart-btn">
                    <img className='cart-img' src={cartImg} alt='cart'></img>
                    <div>{"3"}</div>
                </div>
            </Link>
        </div>
    );
}

export default Header;
