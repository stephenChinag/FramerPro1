import React, { Fragment } from 'react'

const Gallery=() =>{
  return (
    <Fragment>
    <input type='file' name='photo' id='addPhotoInput' />
    <label htmlFor= 'addPhotoInput'>
    <i className='add-photo-button fas fa-plus-square'></i>
    </label> 
    </Fragment>
  )
}

export default Gallery