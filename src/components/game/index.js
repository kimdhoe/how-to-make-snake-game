import React from 'react'

// -----------------------------------------------------------------------------
// Constants
// -----------------------------------------------------------------------------

const SCENE_SIZE = 20
const SNAKE_COLOR = '#5c940d'
const FOOD_COLOR = '#e67700'

// -----------------------------------------------------------------------------
// Data Definitions
// -----------------------------------------------------------------------------

// A State is an object:
//   {
//      snake: Snake,
//      direction: Direction,
//   }

// A Snake is an array of Segments.
const snake = segments => segments

// A Segment is an object:
//   {
//     x: number,
//     y: number,
//   }
const segment = (x, y) => ({ x, y })

// A Direction is one of:
//   - 'STOP'
//   - 'UP'
//   - 'RIGHT'
//   - 'DOWN'
//   - 'LEFT'
const directions = {
  stop: 'STOP',
  up: 'UP',
  right: 'RIGHT',
  down: 'DOWN',
  left: 'LEFT',
}

// An Action is one of:
//   - 'TICK'
//   - 'GO_UP'
//   - 'GO_RIGHT'
//   - 'GO_DOWN'
//   - 'GO_LEFT'
const actions = {
  tick: 'TICK',
  goUp: 'GO_UP',
  goRight: 'GO_RIGHT',
  goDown: 'GO_DOWN',
  goLeft: 'GO_LEFT',
}

// -----------------------------------------------------------------------------
// Render
// -----------------------------------------------------------------------------

class Game extends React.Component {
  state = {
    snake: [
      { x: 3, y: 3 },
    ],
    direction: directions.right,
  }

  componentDidMount () {
    setInterval(() => {
      const newState = nextState(this.state, actions.tick)
      this.setState(newState)
    }, 500)
  }

  render () {
    return (
      <div
        css={[ styles.container ]}
      >
        <Snake segments={this.state.snake} />
      </div>
    )
  }
}

const Snake = ({ segments }) => (
  <>
    {segments.map((segment, i) => (
      <Segment key={i} x={segment.x} y={segment.y} />
    ))}
  </>
)

const Segment = ({ x, y }) => (
  <div
    css={{
      position: 'absolute',
      left: `${x / SCENE_SIZE * 100}%`,
      top: `${y / SCENE_SIZE * 100}%`,
      width: `${100 / SCENE_SIZE}%`,
      height: `${100 / SCENE_SIZE}%`,
      borderRadius: '50%',
      backgroundColor: SNAKE_COLOR,
    }}
  />
)

const styles = {
  container: {
    position: 'relative',
    width: '100%',
    height: 0,
    paddingBottom: '100%',
    backgroundColor: '#f1f3f5',
  },
}

// -----------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------

// nextState :: State * Action -> State
// Given a state and an action, produces a new state.
const nextState = (state, action) => {
  if (action === actions.tick) {
    console.log(actions.tick)
    const currentHead = state.snake[0]
    let x = currentHead.x
    let y = currentHead.y

    if (state.direction === directions.up) {
      console.log(1)
      y = y - 1
    } else if (state.direction === directions.right) {
      console.log(2)
      x = x + 1
    } else if (state.direction === directions.down) {
      console.log(3)
      y = y + 1
    } else if (state.direction === directions.left) {
      console.log(4)
      x = x - 1
    }

    const newSnake = snake([
      segment(x, y),
      ...state.snake.slice(0, state.snake.length - 1),
    ])

    console.log(newSnake)

    return {
      ...state,
      newSnake,
    }
  }

  return state
}

export default Game