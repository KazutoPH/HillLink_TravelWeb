import React from 'react'

const Button = ({ type, title, icon, variant }) => {
  return (
    <button type={type}
    className={`flexCenter gap-3 rounded-full border ${variant}`}
    >
      {icon && <img src={icon} alt={title} width={24} height={24} />}
      <label className='bold-16 whitespace-nowrap'>
        {title}
      </label>
    </button>
  )
}

export default Button