import Time from "./components/Time";
import Pizza from "./components/Pizza";
import pizzas from "./Response";
import { useState } from "react";
import "./App.css";

function App() {
  const [maxPrice, setMaxPrice] = useState(0);

  const pizzaList = pizzas.map((pizza) => {
    return (
      <Pizza
        name={pizza.name}
        price={pizza.price}
        ingredients={pizza.ingredients}
        photo={pizza.photo}
        hashtag={pizza.hashtag}
        color={pizza.color}
        emoji={pizza.emoji}
      />
    );
  });

  const handlePrice = (e) => {
    // console.log(e);
    setMaxPrice(e.target.value);
  };
  const filteredPizzaList = pizzas
    .filter((pizza) => pizza.price <= maxPrice) // Filter pizzas by price
    .map((pizza) => {
      return (
        <Pizza
          key={pizza.name} // Ensure each item has a unique key
          name={pizza.name}
          price={pizza.price}
          ingredients={pizza.ingredients}
          photo={pizza.photo}
          hashtag={pizza.hashtag}
          color={pizza.color}
          emoji={pizza.emoji}
        />
      );
    });
  return (
    <div className="App">
      <header className="App-header">
        <Time />
      </header>
      <div className="container_promos">
        <h1>What is your budget?</h1>
        <input onChange={(e) => handlePrice(e)} />
        {filteredPizzaList}
      </div>
      <div className="container_general">
        <h1>All our Pizzas</h1>
        {pizzaList}
      </div>
    </div>
  );
}

export default App;

//Use Effect / use state /use memo /Use ref
//Turn it into a Cocktail website and get your data using useEffect from this api: https://api-ninjas.com/api/cocktail
//After loading, you should have a filter using useState for the search term and filter both by ingredients or by name. Eg: bloody mary should be on the list both when you type "blood", "bloody", or "vodka", for example.
