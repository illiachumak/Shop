import '../scss/App.scss';
import Header from './Header';
import {Routes, Route} from 'react-router-dom';
import Home from './Pages/Home'
import Cart from './Pages/Cart';
import NotFound from './Pages/Nf';

function App() {
  

  return (
    <div className="background">
      <div className="container">
        <Header />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/cart' element={<Cart/>} />
          <Route path='*' element={<NotFound/>} />
        </Routes>
        
      </div>
    </div>
  );
}

export default App;
