import React from 'react'
import Navbar from './Navbar'


function Main({currentUser, setCurrentUser}) {
  console.log(currentUser)


  
  return (
    <div className='main'>
      <Navbar />

      <div className='Neon-Container'>
        <h1 className='Neon-Text'>Welcome to Code Connect</h1>
        <h1 className='Neon-Text'>{currentUser?.username}</h1>z
      </div>
   
    </div>
  )
}

export default Main