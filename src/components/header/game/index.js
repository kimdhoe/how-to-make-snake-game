import React from 'react'

import Segment from './segment'

const Game = () => (
  <div css={[ styles.container ]}>
    <Segment x={1} y={1} />
    <Segment x={2} y={1} />
    <Segment x={3} y={1} />
    <Segment x={4} y={1} />
    <Segment x={4} y={2} />
    <Segment x={4} y={3} />
    <Segment x={4} y={4} />
    <Segment x={4} y={5} />
    <Segment x={5} y={5} />
    <Segment x={6} y={5} />
    <Segment x={6} y={4} />
    <Segment x={7} y={4} />
    <Segment x={8} y={4} />
    <Segment x={8} y={5} />
    <Segment x={8} y={6} />
    <Segment x={8} y={7} />
    <Segment x={8} y={8} />
    <Segment x={7} y={8} />
    <Segment x={6} y={8} />
    <Segment x={5} y={8} />
    <Segment x={2} y={8} food />
  </div>
)

const styles = {
  container: {
    width: '100%',
    height: '100%',
  }
}

export default Game
