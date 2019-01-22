import React from 'react'

const StickyContainer = ({ children, margin }) => (
  <div
    css={{
      position: 'sticky',
      top: 50,
    }}
    style={{
      margin: margin || '75px 0 150px',
    }}
  >
    {children}
  </div>
)

export default StickyContainer
