import React from 'react'
// import rishiImg from '../assets/rishiPhoto.JPG'
import './Usercard.css'

const UserCard = ({name, des, image}) => {
  return (
    <div id='container'>
      <h1>This is {name}</h1>
      <img src={image} alt={name} />
      <p>This is {name} a {des}</p>
    </div>
  )
}

export default UserCard

