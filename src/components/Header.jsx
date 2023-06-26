
import '../scss/Header.scss';
import logoImg from '../assets/logo.png'
import cartImg from '../assets/cart.svg'
const Header = () => {




    return(
        <div className="header-container">
            <div className="logo-block">
                <img className="logo" alt='logo img' src={logoImg}></img>
                <div className="logo-text-container">
                    <span>REACT PIZZA</span>
                    <span>The best pizza you will ever have</span>
                </div>
            </div>

            <div className="cart">
                <div className="cart-price">555$</div>
                <div className="cart-btn">
                    <img className='cart-img' src={cartImg} alt='cart'></img>
                    <div>{"3"}</div>
                </div>
            </div>
        </div>
    );
}

export default Header;
