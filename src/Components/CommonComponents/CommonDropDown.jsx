import React from 'react'

const CommonDropDown = ({ options = [], value, onChange, className,  }) => {
  return (
    <div>
      <select
        value={value}
        onChange={onChange}
        className={className}
       
      >
        {<option value="" disabled>{placeholder}</option>}
        {options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  )
}

export default CommonDropDown
