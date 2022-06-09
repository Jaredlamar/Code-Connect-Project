import React from 'react'

function SchoolModal({closeSchoolModal, selectedSchool, setSelectedSchools, selectedSchools}) {

  function handleSchoollistDelete() {
    fetch(`/schoollists/${selectedSchool.id}`, {
      method: "DELETE",
    })
      .then(() => {
        const updatedSchoollists = selectedSchools.filter((schoollist) => {
          if (schoollist.id !== selectedSchool?.id) {
            return schoollist;
          }
        });

        setSelectedSchools(updatedSchoollists);

        closeSchoolModal(false);
      })
      .catch((error) => console.log(error.message));
  }


  return (
    <div className='modalBackground'>
    <div className='modalContainer'>
        <div className='modalTitle'>
          <h2 className="post-H">{selectedSchool.school.name}</h2>
          </div>
         <div className='ModalBody'>
           <img className="selected-image" src={selectedSchool.school.logo}/>
           <div>
            <em className='selected'>Email Address: {selectedSchool.school.email}</em>
           </div>
           <div>
            
           </div>
           <div>
             <a ><a href={selectedSchool.school.link} target="_blank">Visit Website</a></a>
           </div>

           </div> 
        <div className='modalFooter'>
          <button onClick={()=> closeSchoolModal(false)} >Close</button> 
          <button onClick={handleSchoollistDelete}>Delete School</button>
        </div>
    </div>
</div>
)
}

export default SchoolModal