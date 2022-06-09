import React from 'react'
import SelectedMapped from './SelectedMapped'

function SelectedSchools({selectedSchools, setSelectedSchools}) {
  return (
    <div>
      <SelectedMapped selectedSchools={selectedSchools} setSelectedSchools={setSelectedSchools}/>
    </div>
  )
}

export default SelectedSchools