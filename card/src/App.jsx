import React from 'react'
import UserCard from './components/UserCard'
import './App.css'

const App = () => {
  return (
    <div id='card'>
      <UserCard name={"Rishi Goyal"} des={"Software Developer"}/>
      <UserCard name={"Akarsh Sharma"} des={"AI/ML Engineer"}/>
      <UserCard name = {"Harshit Bhatia"} des={"Technical Support"}/>
    </div>
  )
}

export default App