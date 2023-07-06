import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import axios from 'axios';

import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Skeleton from '../components/Card/Skeleton';


import { setProducts } from '../redux/slices/productListSlice';

function Home() {
  const dispatch = useDispatch();
  const { categoryId, sort } = useSelector((state) => state.filter);
  const sortType = sort.sortType;

  const [pizzaArr, setPizzaArr] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(false);
    axios
      .get(`http://localhost:3001/pizzas?category=${categoryId}&sort=${sortType}`)
      .then((response) => {
        dispatch(setProducts(response.data));
        setPizzaArr(response.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId, sortType]);

  

  return (
    <>
      <Navbar />
      <Link to='/addProduct'><div className='addProduct-btn'>Add Product</div></Link>
      <h1>All Products</h1>
      <div className="add-product-popup">
        
        
      </div>
      <div className="pizza-container">
        {isLoaded ? (
          pizzaArr.map((pizza, i) => (
            <Card key={i} index={i} img={pizza.img} text={pizza.name} price={pizza.price} />
          ))
        ) : (
          [...new Array(6)].map((_, i) => <Skeleton key={i} />)
        )}
      </div>
    </>
  );
}

export default Home;
