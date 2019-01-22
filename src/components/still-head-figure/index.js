import React from 'react'

const StillHeadFigure = () => (
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
    >
      <div
        style={{
          position: 'absolute',
          width: '5%',
          height: '5%',
          left: `${5 * 5}%`,
          top: `${7 * 5}%`,
          borderRadius: '50%',
          backgroundColor: '#5c940d',
        }}
      />
    </div>
    <p
      css={{
        margin: '0.3em 0 0',
        textAlign: 'center',
        fontSize: '0.9em',
      }}
    >
      멈춰있는 뱀
    </p>
  </div>
)

export default StillHeadFigure
