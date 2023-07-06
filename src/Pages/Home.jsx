
import Navbar from '../components/Navbar';
import Card from '../components/Card';
import Skeleton from '../components/Card/Skeleton';
import {setProducts} from '../redux/slices/productListSlice'

import { useEffect, useState } from 'react';
import axios from 'axios';
import { useSelector, useDispatch  } from 'react-redux';


function Home() {
  const dispatch = useDispatch();

  const {categoryId, sort} = useSelector(state => state.filter)
  const sortType = sort.sortType

  const [pizzaArr, setPizzaArr] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    setIsLoaded(false)
    axios.get(`http://localhost:3001/pizzas?category=${categoryId}&sort=${sortType}`)
      .then(response => {
        dispatch(setProducts(response.data))
        setPizzaArr(response.data);
        setIsLoaded(true)
      })
      .catch(error => {
        console.error(error);
      });
  }, [categoryId, sortType]);

  return (
    <>
    <Navbar />
        <h1>All Pizza</h1>
        <div className="pizza-container">
          { isLoaded ?
            pizzaArr.map((pizza, i) => (
              <Card
                key={i}
                index={i}
                img={pizza.img}
                text={pizza.name}
                price={pizza.price}
              />
            )) : [...new Array(6)].map((_,i) => <Skeleton key={i}/>)}
        </div>
    </>
  );
}

export default Home;
