import React from 'react'

function BioForm() {
  return (
    <form className="edit-bio-form">
    <input type ="text"  id="" placeholder='Your Name'/>
    <input type="text" id='' placeholder='About You'/>
    <br/>
    <button type='button' className='cancel-button'>Cancel</button>
    <button type='button' > Save</button>
</form>
  )
}

export default BioForm