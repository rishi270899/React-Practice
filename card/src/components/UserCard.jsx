import React from 'react'
import rishiImg from '../assets/rishiPhoto.JPG'
import './Usercard.css'

const UserCard = ({name, des}) => {
  return (
    <div id='container'>
      <h1>This is {name}</h1>
      <img src={rishiImg} alt="rishi" />
      <p>This is {name} a {des}</p>
    </div>
  )
}

export default UserCard

