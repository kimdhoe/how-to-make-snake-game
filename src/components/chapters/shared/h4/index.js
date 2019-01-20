import React from 'react'

const H4 = ({ text, number }) => (
  <h3
    css={{
      fontSize: '1em',
    }}
  >
    {number && (
      <span
        css={{
          paddingRight: '0.6em',
          color: '#adb5bd',
        }}
      >
        {number}
      </span>
    )}
    {text}
  </h3>
)

export default H4
