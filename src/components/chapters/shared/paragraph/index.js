import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/styles/prism'

const Paragraph = ({ children }) => (
  <p css={[ styles.container ]}>
    {children}
  </p>
)

const styles = {
  container: {
  },
}

export default Paragraph
