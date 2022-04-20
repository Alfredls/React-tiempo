import React from 'react'
import {AiFillWarning} from 'react-icons/ai'

export const Error = ({mensaje}) => {
  return (
    <p className='msgError'><AiFillWarning className='msgIcon' /> <span>{mensaje}</span></p>
  )
}
