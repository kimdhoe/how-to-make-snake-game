import React from 'react'

const ARR = []
for (let i = 0; i < 20; i++) {
  ARR.push(i)
}

const ConstantsFigure = () => (
  <div>
    <p css={[ styles.coordinate ]}>
      (0, 0) <span css={[ styles.type ]}>Snake</span>
    </p>
    <div
      css={{
        position: 'relative',
        paddingBottom: '100%',
        width: '100%',
        height: 0,
        border: '1px solid #ced4da',
        borderRight: 0,
        borderBottom: 0,
        backgroundColor: '#f1f3f5',
      }}
    >
      <div
        css={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          overflow: 'hidden',
          display: 'flex',
        }}
      >
        {ARR.map(i => (
          <div
            key={i}
            css={{
              width: '5%',
              height: '100%',
              borderRight: '1px solid #ccc',
            }}
          />
        ))}
      </div>
      <div
        css={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          left: 0,
          overflow: 'hidden',
        }}
      >
        {ARR.map(i => (
          <div
            key={i}
            css={{
              width: '100%',
              height: '5%',
              borderBottom: '1px solid #ccc',
              display: 'flex',
              alignItems: 'center',
            }}
          />
        ))}
      </div>
      <Segment x={0} y={0} />
      <Segment x={19} y={19} food />
    </div>
    <p css={[ styles.coordinate ]} style={{ textAlign: 'right' }}>
      <span css={[ styles.type ]}>Food</span> (19, 19)
    </p>
    <div
      css={{
        marginTop: 3,
        height: 11,
        border: '1px solid #aaa',
        borderTop: 0,
        borderBottomLeftRadius: 11,
        borderBottomRightRadius: 11,
      }}
    />
    <div
      css={{
        margin: 0,
        width: '50%',
        height: 11,
        borderRight: '1px solid #aaa',
      }}
    />
    <p
      css={{
        margin: 0,
        textAlign: 'center',
        fontFamily: 'Georgia',
        fontSize: '0.9em',
        color: '#555',
      }}
    >
      w = h = 500px
    </p>
  </div>
)

const Segment = ({ x, y, food }) => (
  <div
    style={{
      position: 'absolute',
      top: `${x * 5}%`,
      left: `${y * 5}%`,
      width: '5%',
      height: '5%',
      backgroundColor: food ? '#ff8787' : '#5c940d',
    }}
  />
)

const styles = {
  coordinate: {
    margin: 0,
    fontSize: '0.9em',
    fontFamily: 'Georgia',
    color: '#555',
  },
  type: {
    fontStyle: 'italic',
  },
}

export default ConstantsFigure
