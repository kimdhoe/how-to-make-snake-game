import React from 'react'
import random from 'lodash.random'

// =============================================================================
// Constants
// =============================================================================

// SCENE_SIZE :: number
// Size of the scene. Describes how many segments fit into a row or a column.
// e.g. 20: Up to twenty segments can fit into one row/column.
const SCENE_SIZE = 20

// CELL_SIZE :: number
// A percentage value that tells how much space a segment occupies in a row/col.
// That is:
//   CELL_SIZE * SCENE_SIZE = 100
// e.g. 5: 5%
const CELL_SIZE = 100 / SCENE_SIZE

// SCENE_COLOR ::string
const SCENE_COLOR = '#f1f3f5'

// SNAKE_COLOR ::string
const SNAKE_COLOR = '#5c940d'

// FOOD_COLOR ::string
const FOOD_COLOR = '#ffa8a8'

// =============================================================================
// Data Definitions
// =============================================================================

// A World is an object:
//   {
//      snake:  Snake,
//      food:   Position,
//      status: Status
//   }

// world :: Snake * Position -> World
const world = (snake, food, status) => ({ snake, food, status })

// A Status is one of:
//   - 0: waiting for player
//   - 1: in play
//   - 2: game over

// A Snake is an object:
//   {
//     positions: Position[],
//     direction: Direction,
//   }

// snake :: Position[] * Direction -> Snake
const snake = (positions, direction) => ({ positions, direction })

// A Position is an object:
//   {
//     x: number,
//     y: number,
//   }

// position :: number * number -> Position
const position = (x, y) => ({ x, y })

// A Direction is one of:
//   - 'stop'
//   - 'up'
//   - 'right'
//   - 'down'
//   - 'left'
const directions = {
  stop: 'stop',
  up: 'up',
  right: 'right',
  down: 'down',
  left: 'left',
}

const initialSnake = snake([ position(3, 3) ], directions.right)
const initialWorld = world(initialSnake, position(15, 18), 0)

// An Action is one of:
//   - 'tick'
//   - 'up'
//   - 'down'
//   - 'left'
//   - 'right'
const actions = {
  tick: 'tick',
  up: 'up',
  down: 'down',
  left: 'left',
  right: 'right',
}

// =============================================================================
// Functions
// =============================================================================

// nextWorld :: World * Action -> World
// Given a state and an action, produces a next state.
const nextWorld = (oldWorld = initialWorld, action) => {
  if (!action) return oldWorld

  switch (action) {
    case actions.tick: {
      if (oldWorld.status === 2) {
        return oldWorld
      }

      // oldSnake :: Snake
      const oldSnake = oldWorld.snake
      // oldPositions :: Position[]
      const oldPositions = oldSnake.positions
      // newHead :: Position
      const newHead = nextHead(oldPositions[0], oldSnake.direction)

      // newPositions :: Positions[]
      const newPositions =
        [ newHead, ...oldPositions.slice(0, oldPositions.length - 1) ]
      // newSnake :: Snake
      const newSnake = snake(newPositions, oldSnake.direction)

      if (isDead(newSnake)) {
        return initialWorld
      }

      // newFood :: Position
      const newFood = oldWorld.food

      return world(newSnake, newFood, 1)
    }

    case actions.up: {
      if (oldWorld.snake.direction === directions.down) {
        return oldWorld
      }

      return world(
        snake(oldWorld.snake.positions, directions.up),
        oldWorld.food,
        oldWorld.status
      )
    }

    case actions.down: {
      if (oldWorld.snake.direction === directions.up) {
        return oldWorld
      }

      return world(
        snake(oldWorld.snake.positions, directions.down),
        oldWorld.food,
        oldWorld.status
      )
    }

    case actions.left: {
      if (oldWorld.snake.direction === directions.right) {
        return oldWorld
      }

      return world(
        snake(oldWorld.snake.positions, directions.left),
        oldWorld.food,
        oldWorld.status
      )
    }

    case actions.right: {
      if (oldWorld.snake.direction === directions.left) {
        return oldWorld
      }

      return world(
        snake(oldWorld.snake.positions, directions.right),
        oldWorld.food,
        oldWorld.status
      )
    }

    default:
      return oldWorld
  }
}

// nextHead :: Position * Direction -> Position
// Given a snake's head and a direction, produces a next head.
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

  return position(x, y)
}

// isDead :: Snake -> boolean
// Is a given snake dead?
// A snake dies:
//   - if it hits a wall.
//   - if it eats itself.
const isDead = aSnake =>
  isHittingWall(aSnake) || isEatingSelf(aSnake)

// isHittingWall :: Snake -> Bool
// Has a given snake hit a wall?
const isHittingWall = aSnake => {
  const head = aSnake.positions[0]

  return (
    head.x >= SCENE_SIZE + 20 ||
    head.y >= SCENE_SIZE + 20 ||
    head.x < 0 - 20 ||
    head.y < 0 - 20
  )
}

// isEatingSelf :: Snake -> Bool
// Has a given snake eaten itself?
const isEatingSelf = aSnake =>
  aSnake.positions.slice(1).some(
    posn => isSamePosition(posn, aSnake.positions[0])
  )

// isSamePosition :: Position * Position -> boolean
// Are two given positions actually a same position?
const isSamePosition = (posn1, posn2) =>
  posn1.x === posn2.x && posn1.y === posn2.y

// =============================================================================
// Main
// =============================================================================

class MovingHeadFigure extends React.Component {
  // intervalID :: number
  intervalID = 0

  // state :: World
  state = nextWorld()

  // componentWillUnmount :: -> void
  componentWillUnmount () {
    this.uninstallTimer()
  }

  // componentDidUpdate :: object * World -> void
  componentDidUpdate (prevProps, prevState) {
    if (prevState.status !== 2 && this.state.status === 2) {
      this.uninstallKeyHandler()
      this.uninstallTimer()
    } else if (prevState.status !== 1 && this.state.status === 1) {
      this.installKeyHandler()
      this.installTimer()
    } else if (prevState.status !== 0 && this.state.status === 0) {
      this.uninstallKeyHandler()
      this.uninstallTimer()
    }
  }

  // installTimer :: -> void
  installTimer () {
    this.uninstallTimer()
    this.intervalID = setInterval(this.handleTick, 90)
  }

  // uninstallTimer :: -> void
  uninstallTimer () {
    if (this.intervalID) {
      clearInterval(this.intervalID)
    }
  }

  // installKeyHandler :: -> void
  installKeyHandler () {
    this.uninstallKeyHandler()
    document.addEventListener('keydown', this.handleKey)
  }

  // uninstallKeyHandler :: -> void
  uninstallKeyHandler () {
    document.removeEventListener('keydown', this.handleKey)
  }

  // handleTick :: -> void
  handleTick = () => {
    this.setState(state => nextWorld(state, actions.tick))
  }

  // handleKey :: KeyboardEvent -> void
  handleKey = e => {
    e.preventDefault()
    const { key } = e
    let action = null

    if (key === 'ArrowUp' || key === 'k') {
      action = actions.up
    } else if (key === 'ArrowRight' || key === 'l') {
      action = actions.right
    } else if (key === 'ArrowDown' || key === 'j') {
      action = actions.down
    } else if (key === 'ArrowLeft' || key === 'h') {
      action = actions.left
    }

    if (action) {
      this.setState(oldWorld => nextWorld(oldWorld, action))
    }
  }

  // handlePlayClick :: -> void
  handlePlayClick = () => {
    this.setState(world(initialWorld.snake, initialWorld.food, 1))
  }

  // handleContinueClick :: -> void
  handleContinueClick = () => {
    this.uninstallKeyHandler()
    this.uninstallTimer()
    this.setState(initialWorld)
  }

  // render :: -> ReactElement
  render () {
    return (
      <>
        <Scene
          world={this.state}
          onClickPlay={this.handlePlayClick}
          onClickContinue={this.handleContinueClick}
        />
        <div css={{ marginTop: '1em', textAlign: 'center' }}>
          <button
            css={{
              padding: '0.6em 0.9em',
              outline: 'none',
              border: '1px solid #ccc',
              borderRadius: 5,
              letterSpacing: '0.1em',
              fontSize: '0.8em',
              backgroundColor: 'transparent',
              cursor: 'pointer',
              ':hover': {
                borderColor: '#aaa',
              },
            }}
            onClick={this.handleContinueClick}
          >
            RESET
          </button>
          <p
            css={{
              margin: '0.3em 0 0',
              textAlign: 'center',
              fontSize: '0.9em',
            }}
          >
            움직이는 뱀
          </p>
        </div>
      </>
    )
  }
}

// =============================================================================
// View
// =============================================================================

// Scene :: World * function * function -> ReactElement
const Scene = ({ world, onClickPlay, onClickContinue }) => (
  <div
    css={{
      position: 'relative',
      paddingBottom: '100%',
      width: '100%',
      height: 0,
      border: '1px solid #ced4da',
      backgroundColor: SCENE_COLOR,
    }}
  >
    <SnakeComponent snake={world.snake} />
    <Guidance
      status={world.status}
      onClickPlay={onClickPlay}
      onClickContinue={onClickContinue}
    />
  </div>
)

// Guidance :: number * function * function -> ReactElement
const Guidance = ({ status, onClickPlay, onClickContinue }) => (
  <div
    css={{
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      letterSpacing: '0.1em',
    }}
  >
    {status === 0 && <WaitingForPlayer onClick={onClickPlay} />}
    {status === 2 && <GameOver onClick={onClickContinue} />}
  </div>
)

// WaitingForPlayer :: function -> ReactElement
const WaitingForPlayer = ({ onClick }) => (
  <>
    <button
      css={{
        margin: 0,
        padding: 0,
        outline: 'none',
        border: 'none',
        width: '100%',
        height: '100%',
        letterSpacing: '0.1em',
        fontSize: '0.8em',
        backgroundColor: 'transparent',
        cursor: 'pointer',
        ':hover': {
          borderColor: '#aaa',
        },
      }}
      onClick={onClick}
    >
      <span
        css={{
          padding: '0.6em 0.9em',
          border: '1px solid #ccc',
          borderRadius: 5,
          backgroundColor: 'white',
          'button:hover &': {
            border: '1px solid #aaa'
          },
        }}
      >
        START
      </span>
    </button>
  </>
)

// GameOver :: function -> ReactElement
const GameOver = ({ onClick }) => (
  <button
    css={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      margin: 0,
      padding: 0,
      outline: 'none',
      border: 'none',
      width: '100%',
      height: '100%',
      letterSpacing: '0.1em',
      fontSize: '0.8em',
      cursor: 'pointer',
      backgroundColor: 'transparent',
      ':hover': {
        borderColor: '#aaa',
      },
    }}
    onClick={onClick}
  >
    <p
      css={{
        margin: '0 0 0.5em 0',
        fontSize: '1.5em',
        fontFamily: 'Georgia',
        fontStyle: 'italic',
      }}
    >
      Game Over
    </p>
    <span
      css={{
        padding: '0.6em 0.9em',
        border: '1px solid #ccc',
        borderRadius: 5,
        backgroundColor: 'white',
        'button:hover &': {
          border: '1px solid #aaa'
        },
      }}
    >
      INSERT COIN TO CONTINUE
    </span>
  </button>
)

// SnakeComponent :: Snake -> ReactElement
const SnakeComponent = ({ snake }) => (
  <>
    {snake.positions.map((position, i) => (
      <PositionComponent
        key={i}
        x={position.x}
        y={position.y}
      />
    ))}
  </>
)

// PositionComponent :: Position -> ReactElement
const FoodComponent = ({ position }) => (
  <PositionComponent
    food
    x={position.x}
    y={position.y}
  />
)

// PositionComponent :: number * number * boolean -> ReactElement
const PositionComponent = ({ x, y, food = false }) => (
  <div
    css={{
      position: 'absolute',
      left: `${x / SCENE_SIZE * 100}%`,
      top: `${y / SCENE_SIZE * 100}%`,
      marginLeft: -1,
      marginTop: -1,
      width: `${CELL_SIZE + 1}%`,
      height: `${CELL_SIZE + 1}%`,
      border: `2px solid ${SCENE_COLOR}`,
      borderRadius: '50%',
    }}
    style={{
      backgroundColor: food ? FOOD_COLOR : SNAKE_COLOR,
    }}
  />
)

export default MovingHeadFigure
