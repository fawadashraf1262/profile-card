import React from 'react'
import Image from './assets/avatar.png'
import './Avatar.css'

const Avatar = () => {
  return (
    <div className='avatar'>
        <img src={Image} width={430}   alt="man" />
    </div>
  )
}

export default Avatar