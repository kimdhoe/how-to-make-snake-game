import React from 'react'

const InterestingWord = ({ text, very = false, serif = true }) => (
  <i
    css={{
      fontFamily: serif ? 'Georgia' : null,
      fontWeight: very ? 600 : 400,
    }}
  >
    {text}
  </i>
)

export default InterestingWord
