import React from 'react'

const Chapter = ({ title, children }) => (
  <div css={[ styles.container ]}>
    <h2 css={[ styles.sectionHeadingText ]}>
      Preface
    </h2>
    {children}
  </div>
)

const styles = {
  container: {
    marginBottom: '4rem',
  },
  sectionHeadingText: {
    margin: 0,
  },
}

export default Chapter
