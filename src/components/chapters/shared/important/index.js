import React from 'react'

const Important = ({ text, italic = false }) => (
  <strong
    css={{
      fontWeight: 600,
    }}
  >
    {text}
  </strong>
)

export default Important
