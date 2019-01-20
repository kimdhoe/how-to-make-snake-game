import React from 'react'

const Code = ({ code }) => (
  <code
    css={{
      padding: '0.07em 0.2em',
      fontFamily: `Consolas, Menlo, Monaco, 'Andale Mono WT', 'Andale Mono',
       'Lucida Console', 'Lucida Sans Typewriter', 'DejaVu Sans Mono',
       'Bitstream Vera Sans Mono', 'Liberation Mono', 'Nimbus Mono L',
        'Courier New', Courier, monospace`,
      border: '1px solid #dee2e6',
      borderRadius: 3,
      backgroundColor: 'rgb(245, 247, 255)',
    }}
  >
    {code}
  </code>
)

export default Code
