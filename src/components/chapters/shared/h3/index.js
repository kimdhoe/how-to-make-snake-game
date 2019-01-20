import React from 'react'

const H3 = ({ text, number }) => (
  <h3
    css={{
      fontSize: '1.35em',
    }}
  >
    {number && (
      <span
        css={{
          paddingRight: '0.7em',
          color: '#adb5bd',
        }}
      >
        {number}
      </span>
    )}
    {text}
  </h3>
)

export default H3
