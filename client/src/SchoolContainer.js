import React, {useState, useEffect} from 'react'
import Schools from './Schools'

function SchoolContainer({currentUser}) {
const [schools,setSchools]=useState([])

useEffect( () => {
    fetch(`/schools`)
    .then( res => res.json())
    .then( data => setSchools(data))

},[])
  return (
    <div>
        <Schools schools={schools} currentUser={currentUser} />
    </div>
  )
}

export default SchoolContainer