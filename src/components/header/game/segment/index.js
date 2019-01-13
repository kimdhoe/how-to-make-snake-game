import React from 'react'

const Segment = ({ x, y, food }) => (
  <div
    css={[
      styles.container,
      {
        left: `${10 * x}%`,
        top: `${10 * y}%`,
        backgroundColor: food ? 'rgba(201, 42, 42, 0.3)' : 'rgba(92, 148, 13, 0.7)',
      },
    ]}
  />
)

const styles = {
  container: {
    width: '11.9%',
    height: '11.9%',
    position: 'absolute',
    border: '4px solid #f8f9fa',
    borderRadius: '50%',
  }
}

export default Segment
