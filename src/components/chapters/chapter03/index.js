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
          <Code code={'Snake'}/> 컴포넌트는 입력 받은 <Code code={'snake'}/>의{' '}
          <Code code={'position'}/> 값을 이용해 무대 위의 해당 위치에 뱀을 표시하는 역할을 합니다.
          {' '}<Code code={'position.x'}/> 값으로 무대 왼쪽으로부터의 거리,{' '}
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
  </Chapter>
)

export default Chapter03
