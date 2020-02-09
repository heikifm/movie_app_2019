import React from 'react';
import PropTypes from "prop-types";

function Food({name, image, rating}) {
  return (
    <div>
      <h1>I like {name}</h1>
      <h2>{rating}/5.0</h2>
      <img src={image} alt={name}/>
    </div>
  );
}

Food.propTypes = {
   name: PropTypes.string.isRequired,
   image: PropTypes.string.isRequired,
   rating: PropTypes.number.isRequired
}

const foodILike = [
  {
    id:1,
    name: "Kitty",
    image: "https://www.felineliving.net/wp-content/uploads/2017/12/siamese-kitty-names-e1522099876180-150x146.jpeg",
    rating: 4.9
  },
  {
    id:2,
    name: "Puppy",
    image: "http://images5.fanpop.com/image/photos/31900000/cute-puppy-cute-puppies-31906327-120-116.jpg",
    rating: 5.0
  }
];

function renderFood(dish) {
  console.log(dish);
  return <Food key={dish.id} name={dish.name} image={dish.image} rating={dish.rating}/>;
}

function App() {
  return (
    <div>
      <h1>Hello!!!</h1>
      {foodILike.map(renderFood)}
    </div>
    
      
  );
}

export default App;


