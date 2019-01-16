import React from 'react'

// -----------------------------------------------------------------------------
// Constants
// -----------------------------------------------------------------------------

// SCENE_SIZE :: number
// Size of the scene. Describes how many segments fit into a row or a column.
// e.g. 20: Up to twenty segments can fit into one row/column.
const SCENE_SIZE = 20
// SEGMENT_SIZE :: number
// A percentage value that tells how much space a segment occupies in a row/col.
// That is:
//   SEGMENT_SIZE * SCENE_SIZE = 100
// e.g. 5: 5%
const SEGMENT_SIZE = 100 / SCENE_SIZE
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

const initialState = {
  direction: directions.right,
  snake: snake([ segment(3, 3) ]),
}

// An Action is one of:
//   - TickAction
//   - GoUpAction
//   - GoRightAction
//   - GoDownAction
//   - GoLeftAction

// A TickAction is an object:
//   {
//     type: 'TICK',
//     direction: Direction
//   }

// A GoUpAction is an object:
//   { type: 'GO_UP' }

// A GoRightAction is an object:
//   { type: 'GO_RIGHT' }

// A GoDownAction is an object:
//   { type: 'GO_DOWN' }

// A GoLeftAction is an object:
//   { type: 'GO_LEFT' }

// An ActionType is one of:
//   - 'TICK'
//   - 'GO_UP'
//   - 'GO_RIGHT'
//   - 'GO_DOWN'
//   - 'GO_LEFT'
const actionTypes = {
  tick: 'TICK',
  up: 'GO_UP',
  right: 'GO_RIGHT',
  down: 'GO_DOWN',
  left: 'GO_LEFT',
}

// tick :: Direction -> TickAction
// Given a direction, produces a tick action.
const tick = direction => ({
  type: actionTypes.tick,
  direction,
})

// goUp :: -> GoUpAction
const goUp = () => ({ type: actionTypes.up })

// goRight :: -> GoRightAction
const goRight = () => ({ type: actionTypes.right })

// goDown :: -> GoDownAction
const goDown = () => ({ type: actionTypes.down })

// goLeft :: -> GoLeftAction
const goLeft = () => ({ type: actionTypes.left })

// -----------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------

// nextState :: State * Action -> State
// Given a state and an action, produces a next state.
const nextState = (state = initialState, action) => {
  if (!action) return state

  return {
    direction: nextDirection(state.direction, action),
    snake: nextSnake(state.snake, action),
  }
}

// nextDirection :: Direction * Action -> Direction
// Given a state and an action, produces a next direction.
const nextDirection = (direction, action) => {
  switch (action.type) {
    case actionTypes.up:
      return directions.up
    case actionTypes.right:
      return directions.right
    case actionTypes.down:
      return directions.down
    case actionTypes.left:
      return directions.left
    default:
      return direction
  }
}

// nextSnake :: Snake * Action -> Snake
// Given a state and an action, produces a next snake.
const nextSnake = (currentSnake, action) => {
  switch (action.type) {
    case actionTypes.tick: {
      const newHead = nextHead(currentSnake[0], action.direction)
      const tail = currentSnake.slice(0, currentSnake.length - 1)

      return snake([ newHead, ...tail ])
    }
    default:
      return currentSnake
  }
}

const nextHead = (currentHead, direction) => {
  let x = currentHead.x
  let y = currentHead.y

  if (direction === directions.up) {
    y = y - 1
  } else if (direction === directions.right) {
    x = x + 1
  } else if (direction === directions.down) {
    y = y + 1
  } else if (direction === directions.left) {
    x = x - 1
  }

  return segment(x, y)
}

// -----------------------------------------------------------------------------
// View
// -----------------------------------------------------------------------------

class Game extends React.Component {
  state = nextState()

  componentDidMount () {
    // Install keyboard input listener.
    document.addEventListener('keyup', this.handleKey)

    // Install tick interval timer.
    setInterval(this.handleTick, 1000)
  }

  // handleTick :: -> void
  handleTick = () => {
    this.setState(state => nextState(state, tick(state.direction)))
  }

  // handleKey :: KeyboardEvent -> void
  handleKey = ({ key }) => {
    let action = null

    if (key === 'ArrowUp' || key === 'k') {
      action = goUp()
    } else if (key === 'ArrowRight' || key === 'l') {
      action = goRight()
    } else if (key === 'ArrowDown' || key === 'j') {
      action = goDown()
    } else if (key === 'ArrowLeft' || key === 'h') {
      action = goLeft()
    }

    if (action) {
      this.setState(state => nextState(state, action))
    }
  }

  render () {
    return (
      <div css={[ styles.container ]}>
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
      width: `${SEGMENT_SIZE}%`,
      height: `${SEGMENT_SIZE}%`,
      borderRadius: '50%',
      backgroundColor: SNAKE_COLOR,
    }}
  />
)

const styles = {
  container: {
    position: 'relative',
    overflow: 'hidden',
    width: '100%',
    height: 0,
    paddingBottom: '100%',
    backgroundColor: '#f1f3f5',
  },
}

export default Game
