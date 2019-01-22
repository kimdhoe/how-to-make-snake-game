import React from 'react'
import styled from '@emotion/styled'

const ARR = []
for (let i = 0; i < 20; i++) {
  ARR.push(i)
}

const styles = {
  sampleLabel: {
    position: 'absolute',
    right: 0,
    bottom: '-10%',
    display: 'none',
    fontFamily: 'Georgia',
    fontWeight: 600,
    fontStyle: 'italic',
  },
  sample: {
    position: 'relative',
    paddingBottom: '70%',
    width: '70%',
    height: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  },
  sampleWorld1: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    borderRadius: '50%',
    backgroundColor: '#f1f3f5',
    ':hover': {
      backgroundColor: '#e9ecef',
    },
  },
  sampleSnake1: {
    position: 'absolute',
    top: '20%',
    right: '20%',
    bottom: '20%',
    left: '20%',
    borderRadius: '50%',
    backgroundColor: '#82c91e',
  },
  samplePosition1: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -100%)',
  },
  sampleDirection1: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%)',
  },
  container: {
  },
  sampleWorld: {
    position: 'relative',
    paddingBottom: '70%',
    width: '70%',
    height: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '50%',
    backgroundColor: '#f1f3f5',
    textAlign: 'center',
  },
  sampleWorldWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  sampleSnake: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '60%',
    height: '60%',
    borderRadius: '50%',
    backgroundColor: '#82c91e',
  },
  samplePosition: {
    margin: 0,
    fontSize: '0.9em',
    fontFamily: 'monospace',
  },
  sampleDirection: {
    margin: 0,
    fontSize: '1.3em',
  },
  type: {
    fontFamily: 'Georgia',
    textDecoration: 'underline',
  },
  title: {
    fontWeight: 600,
    fontStyle: 'italic',
    textDecoration: 'none',
  },
  symbol: {
    paddingLeft: '0.5em',
    paddingRight: '0.5em',
  },
  literal: {
    fontFamily: 'monospace',
    textDecoration: 'none',
  },
}

const Pipe = () => (
  <span
    css={[
      styles.symbol,
      {
        paddingLeft: '1em',
        paddingRight: '1em',
        fontSize: '0.9em',
        color: '#aaa',
      },
    ]}
  >
    |
  </span>
)

const Arrow = () => (
  <span css={[ styles.symbol ]}>
    ⇐
  </span>
)

const Times = () => (
  <span css={[ styles.symbol ]}>
    ⨉
  </span>
)

const StateFigure = () => (
  <div css={[ styles.container ]}>
    <p>
      <span css={[ styles.type, styles.title ]}>
        World
      </span>
      <Arrow />
      <span css={[ styles.type ]}>
        Snake
      </span>
    </p>

    <p>
      <span css={[ styles.type, styles.title ]}>
        Snake
      </span>
      <Arrow />
      <span css={[ styles.type ]}>
        Position
      </span>
      <Times />
      <span css={[ styles.type ]}>
        Direction
      </span>
    </p>

    <p>
      <span css={[ styles.type, styles.title ]}>
        Position
      </span>
      <Arrow />
      <span css={[ styles.type ]}>
        number
      </span>
      <Times />
      <span css={[ styles.type ]}>
        number
      </span>
    </p>

    <p>
      <span css={[ styles.type, styles.title ]}>
        Direction
      </span>
      <Arrow />
      <span css={[ styles.type, styles.literal ]}>
        ↑
      </span>
      <Pipe />
      <span css={[ styles.type, styles.literal ]}>
        →
      </span>
      <Pipe />
      <span css={[ styles.type, styles.literal ]}>
        ↓
      </span>
      <Pipe />
      <span css={[ styles.type, styles.literal ]}>
        ←
      </span>
    </p>

    <div css={[ styles.sample ]}>
      <SampleWorld />
      <SampleSnake />
      <SamplePosition>
        (5, 7)
      </SamplePosition>
      <SampleDirection>
        →
      </SampleDirection>

      <p
        css={[
          styles.sampleLabel,
          {
            [`${SampleWorld}:hover ~ &`]: {
              display: 'block',
            }
          }
        ]}
      >
        World
      </p>
      <p
        css={[
          styles.sampleLabel,
          {
            [`${SampleSnake}:hover ~ &`]: {
              display: 'block',
            }
          }
        ]}
      >
        Snake
      </p>
      <p
        css={[
          styles.sampleLabel,
          {
            [`${SamplePosition}:hover ~ &`]: {
              display: 'block',
            },
          },
        ]}
      >
        Position
      </p>
      <p
        css={[
          styles.sampleLabel,
          {
            [`${SampleDirection}:hover ~ &`]: {
              display: 'block',
            },
          },
        ]}
      >
        Direction
      </p>
    </div>
  </div>
)

const SampleWorld = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  border-radius: 50%;
  background-color: #f1f3f5;
`
const SampleSnake = styled.div`
  position: absolute;
  top: 20%;
  right: 20%;
  bottom: 20%;
  left: 20%;
  border-radius: 50%;
  background-color: #82c91e;
`
const SamplePosition = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;
  width: 35%;
  font-size: 0.9em;
  font-family: monospace;
  cursor: default;
  transform: translate(-50%, -100%);
`
const SampleDirection = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  margin: 0;
  width: 35%;
  cursor: default;
  transform: translateX(-50%);
`

export default StateFigure
