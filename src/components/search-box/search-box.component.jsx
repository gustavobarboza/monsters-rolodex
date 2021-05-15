import React from 'react'

import './search-box.styles.css'

export const SearchBox = ({handleChange, placeholder}) => {
  return (
    <div className="search-box">
      <input className="input" placeholder={placeholder}
        type="text" onChange={handleChange} />
    </div>
  )
}