import React from 'react'

const Chapter = ({ number, title, children }) => (
  <div css={[ styles.container ]}>
    <h2 css={[ styles.sectionHeadingText ]}>
      <span css={[ styles.number ]}>
        {String(number).padStart(2, '0')}
      </span>
      <span css={[ styles.title ]}>
        {title}
      </span>
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
  number: {
    verticalAlign: 'middle',
    paddingRight: '0.35em',
    fontSize: '1.7em',
    color: '#dee2e6',
  },
  title: {
    verticalAlign: 'middle',
  },
}

export default Chapter
