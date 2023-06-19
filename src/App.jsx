import { useEffect, useState } from 'react'
import './index.css'

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

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  
  return (
    <>
      <div className='container'>
        <Header/>
        <Menu />
        <Steps/>
        <Counter />
        <Footer />
      </div>
    </>
  )
}

function Header(){
  return (
    <>
    <header className='header'>
      <h1>Fast React Pizza</h1>
      </header>
    </>
  )
}
 
function Menu(){
  const pizzas = pizzaData
  const numPizzas = pizzas.length

  return (
    <>
      <main className='menu'>
        <h2>Our Menu</h2>
        {numPizzas > 0 ? (
          <>
          <p>Authetic Italian Cusisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious.</p>
         <ul className='pizzas'>
        {pizzas.map((pizza, index)  => (
        <Pizza key={index} name={pizza.name} ingredients={pizza.ingredients} photoName={pizza.photoName} 
        price={pizza.price} soldOut={pizza.soldOut}
        />
          ))}
          </ul>
          </> ) : (
            <p>We're still working on our menu. Please come back later</p>
          ) }

      </main>
    </>
  )
}

function Footer(){
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour
  


  return (
  <footer className="footer">
    { isOpen ? (
        <div className="order">
          <p>We're open until {closeHour}:00. Come visit us or order online</p>
          <button className='btn'>Order</button>
        </div>
      ) : (
        <p>We're happy to welcome you between {openHour}:00 and {closeHour}:00</p>
      )
    }
  </footer>
  )
}

function Pizza(props){
  return (
    <>
    <li className={`pizza ${props.soldOut ? "sold-out" : ""}`}>
      <img src="pizza/focaccia.jpg" alt={props.name} />
     <div>
      <h1>{props.name}</h1>
      <p>{props.ingredients}</p>
      <h2>&#8358;{props.price}</h2>
      </div>
      <p style={{color: "red"}}>{props.soldOut && <h1 cl>Sold Out</h1>}</p>
    </li>
    </>
  )
}

function Steps(){
  const [step, setStep] = useState(1)
  const [isOpen, setIsOpen] = useState(true)

  function handlePrevious(){
    if (step > 1) setStep(step - 1)
  }
  function handleNext(){
    if (step < 3) setStep(step + 1)
  }

  return (
    <>
        <button className="close" onClick={() => setIsOpen(!isOpen)}>{!isOpen ? "Open" : "Close"}</button>
    { isOpen && (
      <div className='steps'>
      <div className='numbers'>
        <div className={`${step >= 1 ? "active" : ""}`}>1</div>
        <div className={`${step >= 2 ? "active" : ""}`}>2</div>
        <div className={`${step >= 3 ? "active" : ""}`}>3</div>
      </div>
      
      <p className='message'>Step {step}: {messages[step - 1]}</p>

      <div className='buttons'>
        <button style={{backgroundColor: "#7950f2", color: "#fff"}} onClick={handlePrevious}>Previous</button>
        <button style={{backgroundColor: "#7950f2", color: "#fff"}} onClick={handleNext}>Next</button>
      </div>
    </div>
    )
}
    </>
  )
}

function Counter(){
  const currentDate = new Date();
  const [steps, setSteps] = useState(0)
  const [count, setCount] = useState(0)
  currentDate.setDate(currentDate.getDate() + count);
  function handlePrevious(){
    setSteps(steps - 1)
  }
  function handleNext(){
    setSteps(steps + 1)
  }
  function countPrevious(){
    setCount(count - steps)
  }
  function countNext(){
    setCount(count + steps)
  }


  return (
  <div>
    <h1>Timer Counter</h1>
    <div className="buttons">
      <button onClick={handlePrevious}>-</button>
      <h1>Step: {steps}</h1>
      <button onClick={handleNext}>+</button>
    </div>
    <div className="buttons">
      <button onClick={countPrevious}>-</button>
      <h1>Count: {count}</h1>
      <button onClick={countNext}>+</button>
    </div>

    <span>
    <h1>{count === 0 ? "Today is " : count > 0 ? `${count} days from today is ` : 
    `${Math.abs(count)} days ago was `
    }</h1>
    <h1>{currentDate.toDateString()}</h1>
    </span>
    </div>
  )
}





// function App() {
//   const [count, setCount] = useState(0)
//   const [advice, setAdvice] = useState("")

//   async function getAdvice(){
//     const res = await fetch("https://api.adviceslip.com/advice")
//     const data = await res.json()
//     setAdvice(data.slip.advice)
//     setCount((c)=> c + 1)
//   }

//   useEffect(function () {
//     getAdvice()
//   }, [])

//   return (
//     <>
//       <div>
//         <h1>{advice}</h1>
//         <button onClick={getAdvice}>Get Advice</button>
//         <Message count={count} />
//       </div>
//     </>
//   )
// }

// function Message(props){

//   return (
//     <p>You have read <strong>{props.count}</strong> pieces of advice</p>
//   )
// }

export default App
