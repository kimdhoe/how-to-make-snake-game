import React from 'react'

const StickyContainer = ({ children, margin }) => (
  <div
    css={{
      position: 'sticky',
      top: 50,
    }}
    style={{
      margin: margin || '4.5em 0 4em',
    }}
  >
    {children}
  </div>
)

export default StickyContainer
