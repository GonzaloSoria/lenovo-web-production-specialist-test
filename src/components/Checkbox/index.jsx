import React from 'react'
import './checkbox.css'

export const Checkbox = ({label, id}) => {
  return (
    <>
      <label htmlFor={id} className='label-checkbox'>
      <input 
          type="checkbox" 
          name={id}
          id={id}
          className='aside-filter-checkbox'
      />{label}</label>
    </>
  )
}
