import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Menu.css";

function Menu(props) {
  const [meals, setMeals] = useState([]);
  const [number, setNumber] = useState();
  const getData = async () => {
    const Data = await axios.get(
      "https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals"
    );
    setMeals(Data.data);
    return Data.data;
  };
  useEffect(() => {
    getData();
  }, []);
  function onHandleChange(e) {
    const { name, value } = e.target;
    setNumber({
      [name]: value,
    });
  }
  function HandleSubmit(e) {
    e.prenventDefault();
  }
  const mealListElement = meals.slice(0, 4).map((meal) => {
    return (
      <div className="food-list" key={meal.id}>
        <div className="left-item">
          <img src={meal.image}></img>
          <span>
            <h2>{meal.name}</h2>
            <p>{meal.description}</p>
            <p>{meal.price}</p>
          </span>
        </div>
        <div className="right-item">
          <span>Amount</span>
          <form onSubmit={HandleSubmit}>
            <div classname="form-control">
              <label htmlfor="number" />
              <input
                type="number"
                name="number"
                onchange={onHandleChange}
                placeholder="0"
                value={number}
              />
            </div>
            <button onClick={() => props.HandleChangeCart()}>+Add</button>
          </form>
        </div>
      </div>
    );
  });
  return (
    <div className="Menu">
      <div className="mealList">{mealListElement}</div>
    </div>
  );
}

export default Menu;
