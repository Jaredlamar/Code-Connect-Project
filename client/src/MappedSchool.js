import React, {useState} from 'react'
import SchoolModal from './SchoolModal'

function MappedSchool({selectedSchool, setSelectedSchools, selectedSchools}) {

  const [schoolModal, setSchoolModal]=useState(false)

  return (
    <div className='row'>
          <h2 className='book-title'></h2>
          <div className='row_posters'>
            <img onClick={()=> {setSchoolModal(true)}} className='row_poster' src={selectedSchool.school.logo} />
            <div className='mapped-bttn'>
            </div>
        </div>
        { schoolModal && <SchoolModal closeSchoolModal={setSchoolModal} selectedSchool={selectedSchool} setSelectedSchools={setSelectedSchools} selectedSchools={selectedSchools}/>}
      </div>
  )
}

export default MappedSchool
