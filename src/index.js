import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";


const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];
  


const App = () => {
    return(
        <div className="container">
            <Header/>
            <Menu/>
            <Footer/>
        </div>
    )
}

const Header = () => {
    return (
        <header className="header">
            <h1>Fast React Pizza Co.</h1>
        </header>
    )
}

const Menu = () => {

    const pizzas = pizzaData;

    return (
        
        <main className="menu">
            <h2>Our Menu</h2>
            
            {pizzas.length>0 ? 
            <ul className="pizzas">
                {pizzas.map((pizza) => <Pizza pizzaObj = {pizza} key={pizza.name}/>)}
            </ul> : <p>We're closed</p>}
                
        </main>
        
    )
}

const Footer = () => {

    const hour = new Date().getHours();
    const openHour = 8;
    const closeHour = 22;
    const isOpen =  hour >= openHour && hour <= closeHour;

    return <footer className="footer">{isOpen ? 
        <Order closeHour = {closeHour}/> : <p>We're closed</p>
    }</footer>
}

const Order = (prop) => {
    return (<div className="order">
        <p>We're open until {prop.closeHour}:00. Come visit us or order online.</p>
        <button className="btn">Order</button>
    </div>)
}

const Pizza = (prop) => {
    return (
        <li className={`pizza ${prop.pizzaObj.soldOut ? 'sold-out' : ''}`}>
            <img src={prop.pizzaObj.photoName} alt={prop.pizzaObj.name}/>
            <div>
                <h3>{prop.pizzaObj.name}</h3>
                <p>{prop.pizzaObj.ingredients}</p>
                <span>{!prop.pizzaObj.soldOut ? prop.pizzaObj.price : "SOLD OUT"}</span>
            </div>
        </li>
    )
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        <App/>
    </React.StrictMode>);
