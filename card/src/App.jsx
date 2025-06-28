import React from 'react'
import UserCard from './components/UserCard'
import './App.css'
import rishi from "./assets/rishiPhoto.JPG"
import akki from "./assets/akarsh_passport_pic.jpg"
const App = () => {
  return (
    <div id='card'>
      <UserCard name="Rishi Goyal" des="Software Developer" image={rishi}/>
      <UserCard name="Akarsh Sharma Developer" des="AI/ML Engineer" image={akki}/>
      <UserCard name = "Harshit Bhatia" des="Technical Support"/>
    </div>
  )
}

export default App