import React from 'react'

// -----------------------------------------------------------------------------
// Constants
// -----------------------------------------------------------------------------

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
const SNAKE_COLOR = '#5c940d'
const FOOD_COLOR = '#ffa8a8'

// -----------------------------------------------------------------------------
// Data Definitions
// -----------------------------------------------------------------------------

// A World is an object:
//   {
//      snake: Snake,
//      food:  Position,
//   }

// world :: Snake * Position -> World
const world = (snake, food) => ({ snake, food })

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

const initialSnake = snake([ position(3, 3) ], directions.right)
const initialWorld = world(initialSnake, position(15, 18))

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

// -----------------------------------------------------------------------------
// Functions
// -----------------------------------------------------------------------------

// nextWorld :: World * Action -> World
// Given a state and an action, produces a next state.
const nextWorld = (oldWorld = initialWorld, action) => {
  if (!action) return oldWorld

  switch (action) {
    case actions.tick: {
      // oldSnake :: Snake
      const oldSnake = oldWorld.snake
      // newHead :: Position
      const newHead = nextHead(oldSnake.positions[0], oldSnake.direction)

      if (isDead(newHead, oldSnake.positions)) {
        return oldWorld
      }

      // eatingFood :: boolean
      const eatingFood = isSamePosition(newHead, oldWorld.food)

      if (eatingFood) {
        const newPositions = [ newHead, ...oldSnake.positions ]

        return world(
          snake(newPositions, oldSnake.direction),
          nextFood(newPositions)
        )
      } else {
        return snake(
          [
            newHead,
            ...oldSnake.positions.slice(0, oldSnake.positions.length - 1)
          ],
          oldSnake.direction
        )
      }
    }
  }

  return world(
    nextSnake(oldWorld.snake, oldWorld.food, action),
    oldWorld.food,
  )

  return {
    snake: nextSnake(world.snake, world.food, action),
  }
}

// nextFood :: Position[] -> Position
const nextFood = positions => {

}

// nextSnake :: Snake * Position * Action -> Snake
// Given a state and an action, produces a next snake.
const nextSnake = (oldSnake, food, action) => {
  switch (action) {
    case actions.tick: {
      // newHead :: Position
      const newHead = nextHead(oldSnake.positions[0], oldSnake.direction)

      if (isDead(newHead, food, oldSnake.positions)) {
        return oldSnake
      }

      // eatingFood :: boolean
      const eatingFood = isSamePosition(newHead, food)

      if (eatingFood) {
        return snake(
          [ newHead, ...oldSnake.positions ],
          oldSnake.direction
        )
      } else {
        return snake(
          [
            newHead,
            ...oldSnake.positions.slice(0, oldSnake.positions.length - 1)
          ],
          oldSnake.direction
        )
      }
    }
    case actions.up:
      return oldSnake.direction === directions.down
        ? oldSnake
        : snake(oldSnake.positions, directions.up)
    case actions.right:
      return oldSnake.direction === directions.left
        ? oldSnake
        : snake(oldSnake.positions, directions.right)
    case actions.down:
      return oldSnake.direction === directions.up
        ? oldSnake
        : snake(oldSnake.positions, directions.down)
    case actions.left:
      return oldSnake.direction === directions.right
        ? oldSnake
        : snake(oldSnake.positions, directions.left)
    default:
      return oldSnake
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

  return position(x, y)
}

const isDead = (newHead, snakePositions) =>
  hitsWall(newHead) || isEatingSelf(newHead, snakePositions)

// isSamePosition :: Position * Position -> boolean
const isSamePosition = (position1, position2) =>
  position1.x === position2.x && position1.y === position2.y

const hitsWall = position =>
  position.x >= SCENE_SIZE ||
  position.y >= SCENE_SIZE ||
  position.x < 0 ||
  position.y < 0


// isEatingSelf :: Position * Position[] -> boolean
const isEatingSelf = (position, positions) =>
  positions.slice(0, positions.length - 1).some(
    p => isSamePosition(p, position)
  )

// -----------------------------------------------------------------------------
// View
// -----------------------------------------------------------------------------

class Game extends React.Component {
  state = nextWorld()

  componentDidMount () {
    // Install keyboard input listener.
    document.addEventListener('keydown', this.handleKey)

    // Install tick interval timer.
    setInterval(this.handleTick, 100)
  }

  // handleTick :: -> void
  handleTick = () => {
    this.setState(state => nextWorld(state, actions.tick))
  }

  // handleKey :: KeyboardEvent -> void
  handleKey = ({ key }) => {
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
      this.setState(state => nextWorld(state, action))
    }
  }

  // render :: -> ReactElement
  render () {
    return <Scene world={this.state} />
  }
}

// -----------------------------------------------------------------------------
// View
// -----------------------------------------------------------------------------

// Scene :: World -> ReactElement
const Scene = ({ world }) => (
  <div
    style={{
      position: 'relative',
      paddingBottom: '100%',
      width: '100%',
      height: 0,
      border: '1px solid #ced4da',
      backgroundColor: '#f1f3f5',
    }}
  >
    <FoodComponent position={world.food} />
    <SnakeComponent snake={world.snake} />
  </div>
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
      borderRadius: '50%',
    }}
    style={{
      left: `${x / SCENE_SIZE * 100}%`,
      top: `${y / SCENE_SIZE * 100}%`,
      width: `${CELL_SIZE}%`,
      height: `${CELL_SIZE}%`,
      backgroundColor: food ? FOOD_COLOR : SNAKE_COLOR,
    }}
  />
)

export default Game
