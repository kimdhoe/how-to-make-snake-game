import React from 'react'

const BoringWord = ({ text, serif = true }) => (
  <i
    css={{
      fontFamily: serif ? 'Georgia' : null,
      ':hover': {
        cursor: 'default',
        textDecoration: 'line-through',
      },
    }}
  >
    {text}
  </i>
)

export default BoringWord
