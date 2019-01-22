import React from 'react'

const EmptySceneFigure = () => (
  <div>
    <div
      css={{
        position: 'relative',
        paddingBottom: '100%',
        width: '100%',
        height: 0,
        border: '1px solid #ced4da',
        backgroundColor: '#f1f3f5',
      }}
    />
    <p
      css={{
        margin: '0.3em 0 0',
        textAlign: 'center',
        fontSize: '0.9em',
      }}
    >
      빈 무대
    </p>
  </div>
)

export default EmptySceneFigure
