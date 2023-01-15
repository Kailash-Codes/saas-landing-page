import React from 'react'
import CheckBox from './CheckBox'

const CheckBoxContainer = () => {
  return (
    <div className='flex gap-5 justify-center sm:justify-start mt-10'>
        <CheckBox text="Free Register" />
        <CheckBox text="Great Service" />
    </div>
  )
}

export default CheckBoxContainer