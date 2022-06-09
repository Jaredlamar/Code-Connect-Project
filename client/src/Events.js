import React,{useState} from 'react'
import EventContainer from './EventContainer';
import Navbar from './Navbar';

function Events({setCurrentUser, currentUser}) {


  const [event, setEvent]=useState('')
  const [date, setDate]=useState(new Date(''))
  const [eventPost, setEventPost]=useState('')


  function handleEventPost(e) {
    e.preventDefault();
    const post ={
        event,
        date,
        user_id: currentUser.id,
    }
   fetch(`/posts`, {
       method: "POST",
       headers: {
           "Content-Type": "application/json",
           Accept: "application/json"
       },
       body: JSON.stringify(post)
   })
   .then( res => res.json())
   .then( res => setEventPost(res))

  }
  

  
 



  return (
    <div>
      <Navbar />
      <form>
        <i><h3>Event</h3></i>
            <input type="text" value={event} onChange={(e)=> setEvent(e.target.value)}></input>
        <i><h3>Date</h3></i>
            <input type="date" value={date} onChange={(e) => setDate(e.target.value)}></input>
          <div> 
            <button onClick={handleEventPost} type='submit'>Submit</button>   
         </div> 
       </form>
       <div>
         <h1 className='school-interest'>Message Board</h1>
       </div>
       <EventContainer currentUser={currentUser} handleEventPost={handleEventPost} />
    </div>
  )
}

export default Events