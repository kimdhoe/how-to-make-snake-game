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
import ConstantsFigure from '../../constants-figure'
import StateFigure from '../../state-figure'
import EmptySceneFigure from '../../empty-scene-figure'
import StillHeadFigure from '../../still-head-figure'
import MovingHeadFigure from '../../moving-head-figure'

const Chapter03 = ({ title, title1 }) => (
  <Chapter number={3} title={'렌더링'}>
    <Paragraph>
      지금까지 상태 데이터들의 형식을 정의했습니다. 이제 렌더링, 즉 표현을 고민해 볼
      단계입니다. 우리는 이미 게임에 필요한 모든 데이터를 정의해놓았기 때문에 상태에서 표현으로 넘어가는
      과정을 최대한 단순하게 볼 필요가 있습니다. 짧게 요약하자면, 여기서 해야 할 일은{' '}
      게임의 상태 정보인 <InterestingWord very text={'World'}/>를 표현을 담당하는{' '}
      <InterestingWord text={'React'}/> 컴포넌트에게 전달해주는 것입니다.
    </Paragraph>

    <div style={{ display: 'flex' }}>
      <Left>
        <StickyContainer margin={'5.5em 0 1.5em'}>
          <EmptySceneFigure />
        </StickyContainer>
      </Left>

      <Right>
        <H3
          number={'3.1'}
          text={(
            <span
              css={{
                fontFamily: `Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace`,
              }}
            >
              {'<Scene />'}
            </span>
          )}
        />

        <Paragraph>
          아직 렌더링 관련 코드는 하나도 쓰지 않았지만, 조금 앞서나가서 <DataType text={'World'}/>
          {' '}데이터를 넘겨주면 화면에 게임 무대를 표시하는 <Code code={'Scene'}/> 컴포넌트가 이미
          만들어져 있다고 한 번 생각해볼까요? 만약 그렇다면 그 컴포넌트에 변화하는 상태 데이터를
          계속해서 넘겨주기만 하면 데이터를 반영하도록 화면이 갱신될 겁니다. 희망사항을 반영해서 코드를
          써 보면 다음과 같습니다.
        </Paragraph>

        <Snippet
          hideFilename
          startingLineNumber={79}
          code={
            `\
// Snake
// 뱀의 최초 상태
const initialSnake = snake(position(10, 10)), 'right')

// World
// 게임 세계의 최초 상태
const initialWorld = world(initialSnake)

class Game extends React.Component {
  // World
  state = initialWorld

  // -> ReactElement
  render () {
    return (
      <Scene world={this.state} />
    )
  }
}

// World -> ReactElement
const Scene = world => (
  <div>
  </div>
)`
          }
        />

        <Paragraph>
          우선 뱀의 위치는 화면 중앙이고 진행 방향은 오른쪽인 <Code code={'initialWorld'}/>를 만든
          다음, <Code code={'Game'}/> 컴포넌트의 <InterestingWord text={'state'}/>로
          배정했습니다. 이 <InterestingWord text={'state'}/>가 바뀔 때마다 아래 쪽{' '}
          <Code code={'render'}/> 함수 안의 <Code code={'Scene'}/> 컴포넌트가 상태값을 반영해
          화면을 갱신하게 됩니다. 아직{' '} <Code code={'Scene'}/> 컴포넌트는 작성하지 않았기
          때문에 오류가 나지 않도록 허수아비만 세워놓은 상태지만 입력받은 <Code code={'world'}/> 안의
          데이터를 화면에 표시하는 역할을 하게 될 겁니다. 이제 무대의 배경부터 표시해 볼까요?
        </Paragraph>

        <Snippet
          code={
            `\
// World -> ReactElement
const Scene = world => (
  <div
    style={{
      position: 'relative',
      width: SCENE_SIZE,
      height: SCENE_SIZE,
      backgroundColor: SCENE_COLOR,
    }}
  >
  </div>
)`
          }
        />

        <Paragraph>
          화면에 출력된 네모난 회색 박스가 게임의 무대입니다. 이제 무대를 채워볼 시간입니다.
        </Paragraph>
      </Right>
    </div>

    <div style={{ display: 'flex' }}>
      <Left>
        <StickyContainer margin={'5.5em 0 1.5em'}>
          <StillHeadFigure />
        </StickyContainer>
      </Left>

      <Right>
        <H3
          number={'3.2'}
          text={(
            <span
              css={{
                fontFamily: `Consolas, Menlo, Monaco, "Andale Mono WT", "Andale Mono", "Lucida Console", "Lucida Sans Typewriter", "DejaVu Sans Mono", "Bitstream Vera Sans Mono", "Liberation Mono", "Nimbus Mono L", "Courier New", Courier, monospace`,
              }}
            >
              {'<Snake />'}
            </span>
          )}
        />

        <Paragraph>
          뱀을 표시하는 것도 방금 무대를 표시했던 것과 크게 다르지 않습니다. 상태값에 영향을 받지 않는
          무대는 상수만으로 그릴 수 있었던 반면, 뱀은 상태값이 필요하다는 차이점이 있긴 하지만요. 이번에도
          무대를 그릴 때 했던 것처럼, 있었으면 하는 <Code code={'Snake'}/> 컴포넌트를 먼저 한 번
          상상해보겠습니다.
        </Paragraph>

        <Snippet
          code={
            `\
// World -> ReactElement
const Scene = world => (
  <div
    style={{
      position: 'relative',
      width: SCENE_SIZE,
      height: SCENE_SIZE,
      backgroundColor: SCENE_COLOR,
    }}
  >
    <Snake snake={world.snake} />
  </div>
)

// Snake -> ReactElement
const Snake = snake => <div></div>`
          }
        />

        <Paragraph>
          희망사항을 코드로 구현해봅시다.{' '}
          <Code code={'Snake'}/> 컴포넌트는 입력 받은 <Code code={'snake'}/>의
          <Code code={'position'}/> 값을 이용해 무대 위의 해당 위치에 뱀을 표시하는 역할을 합니다.
          {' '}<Code code={'position.x'}/> 값으로 무대 왼쪽으로부터 거리,{' '}
          <Code code={'position.y'}/> 값으로 무대 위쪽으로부터의 거리를 계산할 수 있습니다.
        </Paragraph>

        <Snippet
          code={
            `\
// Snake -> ReactElement
const Snake = snake => (
  <div
    style={{
      position: 'absolute',
      left: snake.position.x * CELL_SIZE,
      top: snake.position.y * CELL_SIZE,
      width: CELL_SIZE,
      height: CELL_SIZE,
      borderRadius: CELL_SIZE / 2,
      backgroundColor: SNAKE_COLOR,
    }}
  >
  </div>
)`
          }
        />
      </Right>
    </div>

    <div style={{ display: 'flex' }}>
      <Left>
        <StickyContainer margin={'5.5em 0 1.5em'}>
          <MovingHeadFigure />
        </StickyContainer>
      </Left>

      <Right>
        <H3 number={'2.4'} text={'움직이는 뱀'} />

        <Paragraph>
          이제 우리는 뱀을 움직여보려고 합니다. 뱀이 아직 가만히 멈춰있는 이유는{' '}
          <DataType text={'World'}/>에 아무런 변동이 없기 때문입니다. 이 게임에서 뱀은 일정
          시간 간격으로 앞으로 한 칸씩 전진해야 하므로, 계속해서 상태를 업데이트시켜 줄 필요가
          있습니다. 아이디어는 간단합니다. 일정 시간 간격으로 뱀의 위치가 업데이트된 새로운{' '}
          <DataType text={'World'}/>를 만들어, 그걸로 기존{' '}
          <DataType text={'World'}/>를 교체하는 것입니다. 좀 전에 우리가 만든{' '}
          <Code code={'Scene'}/> 컴포넌트에게 새 <DataType text={'World'}/>를 넘겨주면
          화면을 갱신하는 일은 알아서 해 줄 겁니다. 마치 스톱 모션 애니메이션처럼 말이죠.
        </Paragraph>

        <Paragraph>
          일정 시간 간격이 지나 뱀이 앞으로 한 칸 움직여야 할 때, 기존 World 데이터를 바탕으로 뱀의
          위치가 업데이트된 새로운 <DataType text={'World'}/>를 만들 수 있습니다. 이
          아이디어를 <Code code={'nextWorld'}/>라는 함수로 표현해볼까요? 일단 새{' '}
          <DataType text={'World'}/>를 만드는 로직은 비워두고 언제나 기존{' '}
          <DataType text={'World'}/>와 똑같은 복사본을 그대로 반환하도록 합니다.
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
          위의 코드는 아직 다른 <DataType text={'Action'}/>은 무시하고
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
`
          }
        />

        <Snippet
          code={
            `\
/// World * Action -> World
const nextWorld = (oldWorld, action) => {
  if (action === 'tick') {
    const oldSnake = oldWorld.snake
    const newPosition = nextHead(oldSnake.position, oldSnake.direction)
    const newWorld = world(newSnake)

    return newWorld
  }

  return oldWorld
}

// Position * Direction -> Position
// Given a snake's head and a direction, produces a next head.
const nextHead = (posn, dir) => {
  let x = posn.x
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
      </Right>
    </div>
  </Chapter>
)

export default Chapter03
