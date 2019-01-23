import React from 'react'

const Left = ({ children }) => (
  <div
    css={{
      marginRight: '2em',
      width: '35%',
      '@media (max-width: 768px)': {
        display: 'none',
      }
    }}
  >
    {children}
  </div>
)

export default Left
