import React from "react";
import "./Time.css";

function Time() {
  const signTime = () => {
    const currentHour = new Date().getHours();
    if (currentHour < 12) {
      return { text: "Good Morning to Charlie Pizzeria", class: "morning" };
    } else if (currentHour < 18) {
      return { text: "Good Afternoon to Charlie Pizzeria", class: "arvo" };
    } else {
      return { text: "Good Evening Charlie Pizzeria", class: "evening" };
    }
  };
  const thing = signTime();
  return <p className={thing.class}>{thing.text}</p>;
}
export default Time;
