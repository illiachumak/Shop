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
  const {editingProduct:edited, deletion:deleted} = useSelector((state) => (state.productList));

  const { categoryId, sort } = useSelector((state) => state.filter);
  const sortType = sort.sortType;

  const [shopArr, setShopArr] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(false);
    axios
      .get(`http://localhost:3001/product?category=${categoryId}&sort=${sortType}`)
      .then((response) => {
        dispatch(setProducts(response.data));
        console.log(response.data)
        setShopArr(response.data);
        setIsLoaded(true);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [categoryId, sortType, edited, deleted]);

  

  return (
    <>
      <Navbar />
      <Link to='/addProduct'><div className='addProduct-btn'>Add Product</div></Link>
      <h1>All Products</h1>
      <div className="add-product-popup">
        
        
      </div>
      <div className="shop-container">
        {isLoaded ? (
          shopArr.map((product, i) => (
            <Card key={i} index={i} img={product.img} text={product.name} price={product.price} uniqueId={product.uniqueId} weight={product.weight} taste={product.taste}/>
          ))
        ) : (
          [...new Array(6)].map((_, i) => <Skeleton key={i} />)
        )}
      </div>
    </>
  );
}

export default Home;
