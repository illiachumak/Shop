
import Navbar from '../Navbar';
import Card from '../Card';
import Skeleton from '../Card/Skeleton';

import { useEffect, useState } from 'react';
import axios from 'axios';

function Home() {
  const [pizzaArr, setPizzaArr] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false)
  useEffect(() => {
    axios.get('http://localhost:3001/pizzas')
      .then(response => {
        setPizzaArr(response.data);
        setIsLoaded(true)
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <>
    <Navbar />
        <h1>All Pizza</h1>
        <div className="pizza-container">
          { isLoaded ?
            pizzaArr.map((pizza, i) => (
              <Card
                key={i}
                img={pizza.img}
                text={pizza.text}
                price={pizza.price}
              />
            )) : [...new Array(6)].map((_,i) => <Skeleton key={i}/>)}
        </div>
    </>
  );
}

export default Home;
