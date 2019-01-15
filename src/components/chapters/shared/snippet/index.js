import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import { base16AteliersulphurpoolLight } from 'react-syntax-highlighter/dist/styles/prism'

const Snippet = ({ code }) => (
  <div css={[ styles.snippet ]}>
    <SyntaxHighlighter
      language={'javascript'}
      style={base16AteliersulphurpoolLight}
    >
      {code}
    </SyntaxHighlighter>
  </div>
)

const styles = {
  container: {
    borderRadius: 15,
    overflow: 'hidden',
  },
}

export default Snippet
