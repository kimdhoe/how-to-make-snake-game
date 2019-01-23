import React from 'react'

const Right = ({ children }) => (
  <div
    css={{
      width: '65%',
      '@media (max-width: 768px)': {
        width: '100%',
      }
    }}
  >
    {children}
  </div>
)

export default Right
