import React from 'react'

import {
  Chapter,
  Paragraph,
  Important,
  InterestingWord,
  H3,
  H4,
  Code,
  Snippet,
  DataType,
  Left,
  Right,
  StickyContainer,
} from '../shared'
import * as snippets from '../../../snippets'
import MovingHeadFigure from '../../moving-head-figure'
import ControllableHeadFigure from '../../controllable-head-figure'

const Chapter04 = ({ title, title1 }) => (
  <Chapter number={4} title={'액션'}>
    <div style={{ display: 'flex' }}>
      <Left>
        <StickyContainer margin={'5.5em 0 1.5em'}>
          <MovingHeadFigure />
        </StickyContainer>
      </Left>

      <Right>
        <H3 number={'4.1'} text={'움직이는 뱀'} />

        <Paragraph>
          이제 우리는 뱀을 움직여보려고 합니다. 뱀이 지금까지 가만히 멈춰만 있었던 이유는{' '}
          <DataType text={'World'}/>에 아무런 변동이 없었기 때문입니다. 이 게임에서 뱀은 일정
          시간 간격으로 한 칸씩 전진해야 하므로, 계속해서 상태를 바꿔 줄 필요가 있습니다. 아이디어는
          간단합니다. 일정 시간 간격으로 뱀의 위치가 업데이트된 새로운{' '}
          <DataType text={'World'}/>를 만들어, 그걸로 기존{' '}
          <DataType text={'World'}/>를 교체하는 것입니다. 좀 전에 우리가 만든{' '}
          <Code code={'Scene'}/> 컴포넌트에게 새 <DataType text={'World'}/>를 넘겨주면
          화면을 갱신하는 일은 알아서 해 줄 겁니다. 마치 스톱 모션 애니메이션처럼 말이죠.
        </Paragraph>

        <Paragraph>
          일정 시간 간격이 지나 뱀이 앞으로 한 칸 움직여야 할 때, 기존{' '}
          <DataType text={'World'}/> 데이터를 바탕으로 뱀의 위치가 업데이트된 새로운{' '}
          <DataType text={'World'}/>를 만들 수 있습니다. 이 아이디어를{' '}
          <Code code={'nextWorld'}/>라는 함수로 표현해볼까요? 일단 새{' '}
          <DataType text={'World'}/>를 만드는 로직은 비워두고 언제나 기존{' '}
          <DataType text={'World'}/>와 똑같은 복사본을 만들어 반환하도록 합니다.
        </Paragraph>

        <Snippet
          hideFilename
          code={
            `\
// An Action is one of:
//   - 'tick'`
          }
        />

        <Snippet
          code={
            `\
// World * Action -> World
const nextWorld = (oldWorld, action) => {
  if (action === 'tick') {
    // World
    const newWorld = world(oldWorld.snake)

    return newWorld
  }

  return oldWorld
}`
          }
        />

        <Paragraph>
          우리는 게임의 상태인 <DataType text={'World'}/>를 어떤 식으로든 변경하려고 할 때마다
          매번 변경사항이 적용된 새로운{' '} <DataType text={'World'}/>를 만들 것입니다.
          이렇게 만들어진 새로운{' '} <DataType text={'World'}/>를 기존의{' '}
          <DataType text={'World'}/>와 바꿔치기하는 것으로 상태 변경의 한 사이클이 끝납니다.
          위의 {' '}<Code code={'nextWorld'}/>는 상태 변경이 필요한 매 순간마다 새 상태를
          만들어내기 위해 호출될 함수입니다. 말 그대로 모든 상태 변경은 이{' '}
          <Code code={'nextWorld'}/>를 거쳐갑니다.
        </Paragraph>

        <Paragraph>
          하지만 기존 <DataType text={'World'}/>의 정보만으로는 새로운{' '}
          <DataType text={'World'}/>를 만들어내기에 충분하지 않습니다.{' '}
          변경의 의도를 알아야 <DataType text={'World'}/>의 어떤 부분을 어떻게 바꿀 수 있을지 결정할
          수 있겠죠? 예를 들면 일정 시간 간격이 지났으니 뱀이 한 칸 앞으로 움직여야 한다던가 하는 식으로요.
        </Paragraph>

        <Paragraph>
          위의 <Code code={'nextWorld'}/> 함수 정의를 보면 기존 <DataType text={'World'}/>
          {' '}외에 <DataType text={'Action'}/>이라는 것을 같이 받도록 되어 있습니다.{' '}
          <DataType text={'Action'}/> 안에는 상태 변경에 대한 의도가 담겨 있어,
          이를 통해 기존의 상태에 어떤 변경사항을 적용해서 새 상태를 만들어내야 할지를 알 수 있습니다.
          뱀 게임 세계에는 <DataType text={'Action'}/>을 유발하는, 즉 상태를 업데이트시키는
          요인이 크게 두 가지가 있습니다.
        </Paragraph>

        <ul>
          <li>
            시간의 경과
          </li>
          <li>
            방향키 입력에 따른 진행 방향 변경
          </li>
        </ul>

        <Paragraph>
          위의 코드는 아직 다른 <DataType text={'Action'}/>은 무시하고{' '}
          <Code code={'tick'}/>에 대해서만 새로운 상태를 만들 준비를 하고 있습니다. 이{' '}
          <Code code={'tick'}/>은 뱀이 전진해야 할 시간을 알리는 것이므로 우리는 뱀이 한 칸
          전진한 새로운 <DataType text={'World'}/>를 만들어내야 합니다.
        </Paragraph>

        <Paragraph>
          이제 움직이는 뱀이 코 앞에 있습니다! <Code code={'nextWorld'}/> 함수 안에 뱀 위치가
          업데이트된 <DataType text={'World'}/>를 만드는 로직을 작성하고, 일정한 시간 간격으로
          {' '}<Code code={'tick'}/> 액션을 발생시키는 타이머를 설치하기만 하면 됩니다.
        </Paragraph>

        <Snippet
          code={
            `\
/// World * Action -> World
const nextWorld = (oldWorld, action) => {
  if (action === 'tick') {
    // Snake
    const oldSnake = oldWorld.snake
    // Position
    const newPosition = nextHead(oldSnake.position, oldSnake.direction)
    // World
    const newWorld = world(newSnake)

    return newWorld
  }

  return oldWorld
}

// Position * Direction -> Position
// Given a snake's head and a direction, produces a next head.
const nextHead = (posn, dir) => {
  // number
  let x = posn.x
  // number
  let y = posn.y

  if (dir === 'up') {
    y = y - 1
  } else if (dir === 'down') {
    y = y + 1
  } else if (dir === 'left') {
    x = x - 1
  } else if (dir === 'right') {
    x = x + 1
  }

  return position(x, y)
}
`
          }
        />

        <Paragraph>
          위 코드에서 뱀의 새로운 위치를 구하기 위해 <Code code={'nextHead'}/>라는 보조 함수를
          사용하고 있습니다. <Code code={'nextHead'}/>는 현재 진행 방향에 따라{' '}
          <Code code={'x'}/> 혹은 <Code code={'y'}/> 좌표값 중 하나의 값을 증가 혹은
          감소시켜 새로운 <DataType text={'Position'}/>을 만들고 있습니다. 이걸로{' '}
          <Code code={'nextWorld'}/>는 <Code code={'tick'}/>이 발생할 때마다 새로운
          <DataType text={'World'}/>를 만들어낼 준비가
          끝났습니다. 이제 일정 시간 간격으로 <Code code={'tick'}/>을 반복 발생시킬
          타이머만 있으면 움직이는 뱀을 볼 수 있습니다.
        </Paragraph>

        <Snippet
          code={
            `\
class Game extends React.Component {
  // World
  state = initialWorld

  // -> void
  componentDidMount () {
    setInterval(this.handleTick, INTERVAL)
  }

  // -> void
  handleTick = () => {
    this.setState(oldWorld => nextWorld(oldWorld, 'tick'))
  }

  // ...
}`
          }
        />

        <Paragraph>
          <Code code={'INTERVAL'}/> 밀리초 간격으로
          {' '}<Code code={'handleTick'}/> 메서드를 실행하는 타이머가 설치되었습니다.{' '}
          <Code code={'handleTick'}/> 메서드는 타이머에 의해 반복적으로 실행될 때마다
          매번 <Code code={'nextWorld'}/>를 이용해서 새 <DataType text={'World'}/>를
          만든 다음, 그것을 기존의 <DataType text={'World'}/>와 교체해주고 있습니다.

        </Paragraph>

        <Paragraph>
          뱀의 위치가 한 칸 옮겨진 이 새로운 <DataType text={'World'}/>가{' '}
          <Code code={'<Scene />'}/> 컴포넌트에 전달되고, 요주의 데이터인{' '}
          <DataType text={'Snake'}/>가 다시 <Code code={'<Snake />'}/>{' '}
          컴포넌트에 전달되면서 화면에 표시되는 뱀의 위치가 갱신되고 있습니다. 아직 방향을 바꿀 수 없어서
          금방 벽을 뚫고 사라져 버리긴 하지만 이제 뱀이 움직이고 있습니다!
        </Paragraph>
      </Right>
    </div>

    <div style={{ display: 'flex' }}>
      <Left>
        <StickyContainer margin={'5.5em 0 1.5em'}>
          <ControllableHeadFigure />
        </StickyContainer>
      </Left>

      <Right>
        <H3 number={'4.2'} text={'방향을 바꾸는 뱀'} />

        <Paragraph>
          위에서 <Code code={'nextHead'}/> 함수를 통해 뱀의 현재 진행 방향에 따라 다음 위치가
          결정되도록 했었죠. 이제 진행 방향을 바꾸는 <DataType text={'Action'}/>들을 처리해서
          플레이어가 뱀을 마음대로 조작할 수 있도록 할 차례입니다. 현재 정의되어 있는{' '}
          <Code code={'tick'}/> 외에 상/하/좌/우 네 방향에 대해 모두 별도로, 총 네 개의{' '}
          <DataType text={'Action'}/>을 추가합니다.
        </Paragraph>

        <Snippet
          code={
            `\
// An Action is one of:
//   - 'tick'
//   - 'up'
//   - 'down'
//   - 'left'
//   - 'right'`
          }
        />

        <Paragraph>
          상/하/좌/우를 나타내는 이 네 개의 값들은 문자 그대로 각각 해당 방향으로의 방향 전환을
          의미합니다. 이 추가된 <DataType text={'Action'}/>들 역시{' '}
          <Code code={'nextWorld'}/> 함수를 거쳐 뱀의 진행 방향이 업데이트된 새로운{' '}
          <DataType text={'World'}/>를 만들어내어야 합니다.
        </Paragraph>

        <Snippet
          code={
            `\
// World * Action -> World
const nextWorld = (oldWorld, action) => {
  if (action === 'tick') {
    // Snake
    const oldSnake = oldWorld.snake
    // Position
    const newPosition = nextHead(oldSnake.position, oldSnake.direction)
    // Snake
    const newSnake = snake(newPosition, oldSnake.direction)

    return world(newSnake)
  }

  if (action === 'up') {
    // Snake
    const newSnake = snake(oldSnake.position, 'up')

    return world(newSnake)
  }

  if (action === 'down') {
    // Snake
    const newSnake = snake(oldSnake.position, 'down')

    return world(newSnake)
  }

  if (action === 'left') {
    // Snake
    const newSnake = snake(oldSnake.position, 'left')

    return world(newSnake)
  }

  if (action === 'right') {
    // Snake
    const newSnake = snake(oldSnake.position, 'right')

    return world(newSnake)
  }

  return oldWorld
}`
          }
        />

        <Paragraph>
          방향 전환을 처리하는 위의 코드에 대해서는 별달리 설명할 부분이 없습니다. 단순히 인자{' '}
          <Code code={'action'}/>에 따라 방향이 변경된 <DataType text={'Snake'}/>를
          {' '}만들고, 그걸로 다시 <DataType text={'World'}/>를 만들어 반환하고 있습니다.
          지금은 이 정도로 해 놓고 나중에 후진 금지 같은 제약을 넣어보는 것도 괜찮겠죠?
        </Paragraph>

        <Paragraph>
          자, 이제 사용자의 방향키 입력만 처리해주면 뱀을 조작할 있습니다. 위에서 타이머가{' '}
          <Code code={'tick'}/>을 일정 주기로 발생시켰던 것과 아이디어는 별반 다르지 않습니다.
          그 때는 일정 주기로 <Code code={'tick'}/>을 <Code code={'nextWorld'}/>{' '}
          함수에 인자로 넘겨 새 <DataType text={'World'}/>를 만들었었죠. 이번에는 사용자가
          방향키를 누를 때마다 해당 <DataType text={'Action'}/>을{' '}
          <Code code={'nextWorld'}/> 함수에 인자로 넘겨 새{' '}
          <DataType text={'World'}/>를 만들 겁니다. 그런 다음{' '}
          <InterestingWord text={'React'}/>의 <Code code={'setState'}/>를 이용해
          기존의 <DataType text={'World'}/>를 대체해주는 걸로 방향 전환의 사이클이 끝이 납니다.
        </Paragraph>

        <Snippet
          code={
            `\
class Game extends React.Component {
  // World
  state = initialWorld

  // -> void
  componentDidMount () {
    document.addEventListener('keydown', this.handleKey)
    setInterval(this.handleTick, INTERVAL)
  }

  // KeyboardEvent -> void
  handleKey = e => {
    const { key } = e
    let action = null

    if (key === 'ArrowUp') {
      action = 'up'
    } else if (key === 'ArrowDown') {
      action = 'down'
    } else if (key === 'ArrowLeft') {
      action = 'left'
    } else if (key === 'ArrowRight') {
      action = 'right'
    }

    if (action) {
      this.setState(oldWorld => nextWorld(oldWorld, action))
    }
  }

  // ...
}`
          }
        />

      </Right>
    </div>
  </Chapter>
)

export default Chapter04
