import React, {useState} from 'react'

function Schoollist({schools, currentUser, key, onNewSchoolList}) {
    
   const [schoolList, setSchoolList] = useState([])

    const handleSchoolList = (event) =>{
        event.preventDefault();
        setSchoolList(schools)
           fetch(`/schoollists`, {
               method: "POST",
               headers: {
                   "Content-Type": "application/json",
                   Accept: "application/json"
               },
               body: JSON.stringify({
                   school_id: schools.id,
                   user_id: currentUser.id
               })
           })
           .then( res => res.json())
           .then( res => {
               onNewSchoolList(res)
           })
         
    }

  return (
    <div className='row'>
          <h2 onClick={(e)=>handleSchoolList(e)} className='school-name'>{schools.name}</h2>
          <div className='row_posters'>
            <img  className='row_poster' src={schools.logo} alt={schools.name}/>
        </div>
      </div>
      
    
  )
}

export default Schoollist