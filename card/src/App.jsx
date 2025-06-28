import React, {useState} from 'react'
import UserCard from './components/UserCard'
import './App.css'
import Card from './components/Card'
import Button from './components/Button'
// import rishi from "./assets/rishiPhoto.JPG"
// import akki from "./assets/akarsh_passport_pic.jpg"
const App = () => {
  const [count, setCount] = useState(0)

  const increment = () => {
    setCount(count + 1);
  }

  return (
    <div id='card'>

      <Button increment={increment} text="click me">
         <h1>{count}</h1>
      </Button>
      {/* <Card name= "Mca Student">
        <h1>This is Rishi Goyal</h1>
        <p>Rishi Goyal is a Software Engineer and speciality in full stack web development</p>
      </Card> */}
      {/* <UserCard name="Rishi Goyal" des="Software Developer" image={rishi}/>
      <UserCard name="Akarsh Sharma Developer" des="AI/ML Engineer" image={akki}/>
      <UserCard name = "Harshit Bhatia" des="Technical Support"/> */}
    </div>
  )
}

export default App