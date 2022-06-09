import React from 'react'
import MappedSchool from './MappedSchool'

function SelectedMapped({selectedSchools, setSelectedSchools}) {
  console.log(selectedSchools)
    let selectedMapped = selectedSchools.map((selectedSchool) =>{
        return <MappedSchool selectedSchool={selectedSchool} setSelectedSchools={setSelectedSchools} selectedSchools={selectedSchools}/>

    })
  return (
    <div>
     {selectedMapped}
    </div>
  )
}

export default SelectedMapped