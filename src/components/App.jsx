
import '../scss/App.scss';
import Header from './Header'
import Navbar from './Navbar'
import Card from './Card'

const pizzaArr = [{img: "url",
                   text: "Cheeseburger Pizza",
                   price: 15.99,},
                  {img: "url",
                   text: "Cheese Pizza",
                   price: 15.99,},
                  {img: "url",
                   text: "Asian Shrimp Pizza",
                   price: 15.99,},
                  {img: "url",
                   text: "Cheese Chicken Pizza",
                   price: 15.99,},
                  {img: "url",
                   text: "Cheeseburger Pizza",
                   price: 15.99,},
                  {img: "url",
                   text: "Cheese Pizza",
                   price: 15.99,},
                  {img: "url",
                   text: "Asian Shrimp Pizza",
                   price: 15.99,},
                  {img: "url",
                   text: "Cheese Chicken Pizza",
                   price: 15.99,},
                  ]

function App() {
  return (
   <div className="background">
    <div className="container">
      <Header />
      <Navbar/>
      <h1>All Pizza </h1>
      <div className="pizza-container">
      {pizzaArr.map((pizza) => {
        return <Card
            img={pizza.img}
            text={pizza.text}
            price={pizza.price}
        />;
})}

      </div>

    </div>
   </div>
  );
}

export default App;
