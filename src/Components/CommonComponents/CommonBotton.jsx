import React from 'react'

const CommonBotton = ({ children, text, onClick, type = 'button', className,  }) => {
  return (
    <div>
      <button
        type={type}
        onClick={onClick}
        className={className}
        style={{padding:10,color:'blue',marginBottom:10}}
      >
        {text || children}
      </button>
    </div>
  )
}

export default CommonBotton
