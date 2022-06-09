import React, {useEffect, useState} from 'react'
import Navbar from './Navbar'
import Schoollist from './Schoollist'
import SelectedSchools from './SelectedSchools'



function Schools({schools,currentUser}) {
    const [selectedSchools,setSelectedSchools]=useState([])
   

    useEffect( () => {
        console.log(currentUser)
        fetch(`/schoollists?user_id=${currentUser.id}`)
        .then( res => res.json())
        .then( data => setSelectedSchools(data))
    
    },[])

    const onNewSchoolList = (newSchoolList)=>{
      setSelectedSchools([...selectedSchools, newSchoolList])
    }

    let mappedschools = schools.map((school)=>{
        return < Schoollist currentUser={currentUser} key={school.id} schools={school} onNewSchoolList={onNewSchoolList} />
    })
  return (
    <div>
    <Navbar />
    <div className='flex-container'>
        <div className='flex-child magenta'>
            {mappedschools}
        </div>
        <div className='flex-child green'>
            <h2 className='school-interest' >Favorited Bootcamps</h2>
            <SelectedSchools selectedSchools={selectedSchools} setSelectedSchools={setSelectedSchools}/>
        </div>
    </div>
</div>
)
}

export default Schools

