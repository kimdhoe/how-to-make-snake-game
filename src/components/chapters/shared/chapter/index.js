import React from 'react'

const Chapter = ({ title, children }) => (
  <div css={[ styles.container ]}>
    <h2 css={[ styles.sectionHeadingText ]}>
      {title}
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
    fontSize: '1.7rem',
  },
}

export default Chapter
