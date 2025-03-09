import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";

// *****  CHALLENGE 1 ***** //
// 1. Create an h1 header with your name and last name.
// 2. Create a paragraph with a random number from 1-9
const name = "Hugo";
const lastName = "Caro";
const number = Math.floor(Math.random() * 10);

// *****  CHALLENGE 2 ***** //
// Created by YOURNAME
// Copyright CURRENTYEAR
const currentDate = new Date();
const year = currentDate.getFullYear();

// *****  CHALLENGE 3 ***** //
// Display animal pictures, their name, and different colors
const red = { color: "red" };
const blue = { color: "blue" };
const green = { color: "green" };

// *****  CHALLENGE 4 ***** //
// Styled Hello World heading
const challenge4Style = {
  color: "red",
  fontSize: "20px",
  border: "1px solid black",
};

// *****  CHALLENGE 5 ***** //
// Display greeting message based on time
const currentTime = new Date().getHours();
let greeting = "";
let greetingColor = "";

if (currentTime >= 0 && currentTime < 12) {
  greeting = "Good morning";
  greetingColor = "red";
} else if (currentTime >= 12 && currentTime < 18) {
  greeting = "Good Afternoon";
  greetingColor = "green";
} else {
  greeting = "Good evening";
  greetingColor = "blue";
}

// ***** FINAL RENDER ***** //
ReactDOM.render(
  <div>
    {/* CHALLENGE 1 */}
    <h1>CHALLENGE 1: Hello World! I am {name + " " + lastName}</h1>
    <p>Random Number is: {number}</p>

    {/* CHALLENGE 2 */}
    <p>Created by {name}</p>
    <p>Copyright {year}</p>

    {/* CHALLENGE 3 */}
    <div>
      <img src="./assets/dog.png" alt="Dog" />
      <h2 style={red}>Dog</h2>
      <img src="./assets/cat.png" alt="Cat" />
      <h2 style={blue}>Cat</h2>
      <img src="./assets/rabbit.png" alt="Rabbit" />
      <h2 style={green}>Rabbit</h2>
    </div>

    {/* CHALLENGE 4 */}
    <h1 style={challenge4Style}>Hello World</h1>

    {/* CHALLENGE 5 */}
    <h1 style={{ color: greetingColor }}>{greeting}</h1>

    {/* COMPONENTS EXERCISE */}
    <App />
  </div>,
  document.getElementById("root")
);
