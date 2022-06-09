import React from 'react'

function EventModal({closeEventModal, postedEvent}) {
  return (
    <div className='modalBackground'>
    <div className='modalContainer'>
        <div className='modalTitle'>

          </div>
         <div className='ModalBody'>
           <img className="selected-images" src={postedEvent.image}/>

           </div> 
        <div className='modalFooter'>
          <button onClick={()=> closeEventModal(false)} >Close</button> 
        </div>
    </div>
</div>
)
}

export default EventModal