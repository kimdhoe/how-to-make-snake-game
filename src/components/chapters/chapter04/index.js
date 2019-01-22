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

export default Chapter04
