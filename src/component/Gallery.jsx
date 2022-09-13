import React, { Fragment } from 'react'
import pixel1 from '../asset/BackedRose.jpg'
import pixel2 from '../asset/HoldOn.jpg'
import pixel3 from '../asset/HoldOnWeGoHome.jpg'
import pixel4 from '../asset/MusicMakeMeLikeJordan.jpg'
import pixel5 from '../asset/OldAreWise.jpg'


const Gallery=() =>{
  return (
    <Fragment>
    <input type='file' name='photo' id='addPhotoInput'/>
    <label htmlFor= 'addPhotoInput'>
    <i className='add-photo-button fas fa-plus-square'></i>
    </label> 
    <section className='gallery'>
    <div className='item'>
        <img src={pixel1} className='item-image '  alt=''/>
        <button className='delete-button'>delete</button>
    </div>
    <div className='item'>
        <img src={pixel2} className='item-image' alt=''/>
        <button className='delete-button'>delete</button>
    </div>
    <div className='item'>
        <img src={pixel3} className='item-image' alt=''/>
        <button className='delete-button'>delete</button>
    </div>
    <div className='item'>
        <img src={pixel4} className='item-image' alt=''/>
        <button className='delete-button'>delete</button>
    </div>
    <div className='item'>
        <img src={pixel5} className='item-image' alt=''/>
        <button className='delete-button'>delete</button>
    </div>
    </section>
    </Fragment>
  )
}

export default Gallery