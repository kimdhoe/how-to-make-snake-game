import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {
  base16AteliersulphurpoolLight,
} from 'react-syntax-highlighter/dist/styles/prism'

const Snippet = ({ children, hideFilename = false, changed = [], code, ...rest }) => (
  <div css={[ styles.container ]}>
    <SyntaxHighlighter
      style={base16AteliersulphurpoolLight}
      customStyle={{ margin: 0 }}
      language={'javascript'}
      showLineNumbers
      lineNumberContainerStyle={{
        minWidth: 40,
        fontFamily: `Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace`,
        fontSize: 14,
        lineHeight: 1.375,
        direction: 'ltr',
        textAlign: 'right',
        whiteSpace: 'pre',
        wordSpacing: 'normal',
        wordBreak: 'normal',
        tabSize: 4,
        hyphens: 'none',
        background: 'rgb(245, 247, 255)',
        color: '#adb5bd',
        float: 'left',
        paddingRight: 15,
      }}
      lineNumberStyle={number => {
        return {
          color:
            changed.length && number >= changed[0] && number <= changed[1]
              ? '#5c940d'
              : '#bbb',
        }
      }}
      {...rest}
    >
      {children || code}
    </SyntaxHighlighter>

    {!hideFilename && (
      <div css={[ styles.filename ]}>
        <span css={[ styles.filenameText ]}>
          src/App.js
        </span>
      </div>
    )}
  </div>
)

const styles = {
  container: {
    overflow: 'hidden',
  },
  filename: {
    paddingRight: '0.1em',
    textAlign: 'right',
  },
  filenameText: {
    letterSpacing: '0.04em',
    fontSize: '0.85em',
    color: '#868e96',
  }
}

export default Snippet
