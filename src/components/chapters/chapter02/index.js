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

const Chapter02 = ({ title, title1 }) => (
  <Chapter number={2} title={'데이터'}>
    <Paragraph>
      프로그램을 만들려면 프로그램에 존재하는 요소들의 데이터를 코드로 표현해야 합니다. 그러기 위해서
      게임 상에서 <Important text={'변하지 않는 정보'}/>
      <InterestingWord very text={'Constants'}/>와 <Important text={'변하는 정보'}/>
      <InterestingWord very text={'State'}/>를 찾아낸 후, 각각을 코드로 옮기도록 하겠습니다.
      위에서 그렸던 그림을 살펴보면 우리가 코드로 표현해야 할 것들이 크게 세 가지가 있습니다.
    </Paragraph>

    <ul>
      <li>무대 — 옅은 회색의 사각형</li>
      <li>뱀 — 검은 원 여러 개가 이어진 형태</li>
      <li>먹이 — 붉은 원</li>
    </ul>

    <Paragraph>
      나란히 놓인 그림 세 장에서 알 수 있듯이, 게임이 진행되는 동안 무대는 항상 그대로이고, 먹이의
      색과 크기, 뱀을 구성하는 원들의 색과 크기도 변하지 않습니다. 반면 뱀의 길이와 위치, 진행 방향은
      동일하지 않고, 먹이의 위치도 제각각입니다.
    </Paragraph>

    <div style={{ display: 'flex' }}>
      <Left>
        <StickyContainer margin={'5.5em 0 1.5em'}>
          <ConstantsFigure />
        </StickyContainer>
      </Left>

      <Right>
        <H3 number={'2.1'} text={'변하지 않는 것'} />

        <Paragraph>
          우선 변하지 않는 것들의 값을 <Important text={'상수'}/>
          <InterestingWord very text={'Constants'}/>로 정의합니다. 이 상수들을 정의하기 위해
          다음과 같은 무대의 성질을 임의로 정합니다.
        </Paragraph>

        <ul>
          <li>게임 무대는 정사각형이다.</li>
          <li>게임 무대의 가로/세로는 각각 스무칸 씩이다.</li>
        </ul>

        <Snippet
          startingLineNumber={3}
          changed={[ 3, 33 ]}
          code={`\
// ===========================
// Constants
// ===========================

// string
// 무대의 배경색
const SCENE_COLOR = '#f1f3f5'

// string
// 뱀의 색
const SNAKE_COLOR = '#5c940d'

// string
// 먹이의 색
const FOOD_COLOR = '#ff8787'

// number
// 무대의 가로/세로 길이 (단위: px)
//   * SCENE_SIZE = SCENE_COUNT x CELL_SIZE
//   * 500 = 20 * 25
const SCENE_SIZE = 500

// number
// 무대의 한 열에 들어가는 칸 수
//   * 20 = 500 / 25
const SCENE_COUNT = 20

// number
// 먹이와 뱀 몸통 한 칸의 가로/세로 길이 (단위: px)
//   * 25 = 500 / 20
const CELL_SIZE = 25

// number
// 뱀 이동 시간 간격 (단위: ms)
const INTERVAL = 500
`}
        />

        <Paragraph>
          길이와 관련된 값들은 게임 무대의 가로와 세로가 각각 스무 칸인 정사각형이어야 한다는 임의의
          결정을 전제로 정의되었습니다. 그래서 무대의 가로 길이와 세로 길이가 하나의 동일한 값으로
          표현되었고,{' '} <Code code={'CELL_SIZE'}/>는 <Code code={'SCENE_SIZE'}/>
          {' '}500을 20으로 나눈 값이 되었습니다.
        </Paragraph>
      </Right>
    </div>

    <div style={{ display: 'flex' }}>
      <Left>
        <StickyContainer margin={'5.5em 0 1.5em'}>
          <StateFigure />
        </StickyContainer>
      </Left>

      <Right>
        <H3 number={'2.2'} text={'변하는 것'} />

        <Paragraph>
          변화하는 데이터들은 게임의{' '}
          <Important text={'상태'}/><InterestingWord very text={'State'}/>가
          됩니다. 앞서 그림을 보면서 찾아낸 상태 데이터는 총 네 개가 있었습니다. 하지만 우리는 지금
          머리 하나만 움직여볼 것이기 때문에 뱀의 길이와 먹이의 위치는 제외하고, 뱀의 위치와 뱀의 진행
          방향 데이터만 생각하겠습니다.
        </Paragraph>
        <Paragraph>
          한 칸짜리 뱀만 존재하는 이 게임 세계의 상태를 아래처럼{' '}
          <DataType text={'World'}/>라는 형식의 객체로 표현할 수 있습니다.
        </Paragraph>

        <Snippet
          startingLineNumber={35}
          changed={[ 35, 77 ]}
          code={
            `\
// ===========================
// Data Definitions
// ===========================

// A World is an object:
//  {
//    snake: Snake,
//  }
//    * snake: 뱀의 상태 (위치, 방향)

// A Snake is an object:
//   {
//     position:  Position,
//     direction: Direction,
//   }
//     * position:  뱀의 위치
//     * direction: 뱀의 진행 방향

// A Position is an object:
//   {
//     x: number,
//     y: number,
//   }
//     * x: 가로 좌표. 왼쪽 끝에서 0으로 시작해서 오른쪽으로 갈수록 커진다.
//     * y: 세로 좌표. 위쪽 끝에서 0으로 시작해서 아래쪽으로 갈수록 커진다.

// A Direction is one of:
//   - 'up'
//   - 'down'
//   - 'left'
//   - 'right'

// Snake -> World
// Given a snake, produces a world.
const world = snake => ({ snake })

// Position * Direction -> Snake
// Given a position and a direction, produces a snake.
const snake = (position, direction) => ({ position, direction })

// number * number -> Position
// Given x and y coordinates, produces a position.
const position = (x, y) => ({ x, y })`
          }
        >
        </Snippet>

        <Paragraph>
          위의 코드에서는 주석을 통해 게임 상태를 표현하는 데이터 형식들을 정의하고 있습니다. (이
          튜토리얼에서는 주석도 프로그램의 일부로 보아주기 바랍니다.)
        </Paragraph>

        <H4
          number={'2.2.가'}
          text={(
            <span css={{ fontFamily: 'Georgia', fontStyle: 'italic' }}>
              World
            </span>
          )}
        />

        <Paragraph>
          먼저 게임의 전체 상태를 표현하는{' '}
          <DataType text={'World'}/>는 한 개의 필드를 가진 객체로 정의합니다. 이 데이터 형식 안에
          게임에 필요한 모든 상태 정보가 들어가야 합니다.
        </Paragraph>

        <ul>
          <li>
            <Code code={'snake'}/>: 뱀의 상태 (머리의 위치, 방향)
          </li>
        </ul>

        <Paragraph>
          다음으로 <DataType text={'World'}/>를 구성하는 데에 필요한 나머지 데이터 형식들을 정의합니다.
        </Paragraph>

        <H4
          number={'2.2.나'}
          text={(
            <span css={{ fontFamily: 'Georgia', fontStyle: 'italic' }}>
              Snake
            </span>
          )}
        />

        <Paragraph>
          뱀의 상태를 표현하는 <DataType text={'Snake'}/>는 각각 위치와 방향 정보를 나타내는 두 개의
          필드를 가진 객체로 정의합니다. 이 두 개의 정보가 있으면 우리는 무대에 뱀을 어떻게 배치할지 판단할
          수 있습니다.
        </Paragraph>

        <ul>
          <li>
            <Code code={'position'}/>: 뱀 머리의 위치
          </li>
          <li>
            <Code code={'direction'}/>: 뱀의 진행 방향
          </li>
        </ul>

        <H4
          number={'2.2.다'}
          text={(
            <span css={{ fontFamily: 'Georgia', fontStyle: 'italic' }}>
          Position
        </span>
          )}
        />

        <Paragraph>
          위치를 표현하는 <DataType text={'Position'}/>은 각각 해당 좌표를 나타내는{' '}
          <Code code={'x'}/>, <Code code={'y'}/> 필드를 가진 객체입니다.{' '} 우리는 게임
          무대에 놓일 뱀의 몸통을 단순한 좌표값으로 보고 있습니다.
        </Paragraph>

        <ul>
          <li>
            <Code code={'x'}/>: <InterestingWord text={'x'}/> 좌표
          </li>
          <li>
            <Code code={'y'}/>: <InterestingWord text={'y'}/> 좌표
          </li>
        </ul>

        <H4
          number={'2.2.라'}
          text={(
            <span css={{ fontFamily: 'Georgia', fontStyle: 'italic' }}>
              Direction
            </span>
          )}
        />

        <Paragraph>
          방향을 표현하는 <DataType text={'Direction'}/>은{' '}
          <Code code={"'up'"}/>, <Code code={"'down'"}/>,{' '}
          <Code code={"'left'"}/>,{' '}
          <Code code={"'right'"}/> 네 개 중 하나의 값을 갖습니다.
        </Paragraph>

        <H4
          number={'2.2.마'}
          text={(
            <>
              샘플{' '}
              <span css={{ fontFamily: 'Georgia', fontStyle: 'italic' }}>
                World
              </span>
            </>
          )}
        />

        <Paragraph>
          데이터 정의와 설명이 복잡하게 보였다면 코드로 <DataType text={'World'}/>의 예시값을
          한 번 만들어볼까요?
        </Paragraph>

        <Snippet
          hideFilename
          showLineNumbers={false}
          code={
            `\
// Snake
const exampleSnake = snake(position(5, 7), 'right')

// World
const exampleWorld = world(exampleSnake)
// ==> {
//       snake: {
//         position: {
//           x: 5,
//           y: 7,
//         },
//         direction: 'right',
//       },
//     }
`
          }
        />

        <Paragraph>
          우리가 시도 중인 초기 버전 게임에서, 어느 한 시점의 상태는 두 줄만으로 간단하게 표현이 됩니다. 뱀은
          왼쪽으로부터 여섯 번째, 위쪽으로부터 여덟 번째 칸에 위치해있고, 진행 방향은 오른쪽입니다. 이
          상태값으로 판단해보면 뱀의 다음 위치는 <Code code={'(6, 7)'}/>이 되겠죠?
        </Paragraph>

      </Right>
    </div>

    <H3 number={2.3} text={'뱀 그림'}/>

    <Paragraph>
      지금까지 상태 데이터들의 형식을 정의했습니다. 이제 렌더링, 즉 표현을 고민해 볼
      단계입니다. 우리는 이미 게임에 필요한 모든 데이터를 정의해놓았기 때문에 상태에서 표현으로 넘어가는
      과정을 최대한 단순하게 볼 필요가 있습니다. 여기서 해야 할 일은{' '}
      <InterestingWord very text={'World'}/>라는 상태 정보를 표현을 담당하는{' '}
      <InterestingWord text={'React'}/> 컴포넌트로 넘겨주는 것입니다.
    </Paragraph>

    <div style={{ display: 'flex' }}>
      <Left>
        <StickyContainer margin={'5.5em 0 1.5em'}>
          <EmptySceneFigure />
        </StickyContainer>
      </Left>

      <Right>
        <H4
          number={'2.3.가'}
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
          있다고 한 번 생각해볼까요? 이 컴포넌트에 변화하는 상태 데이터를 계속해서 넘겨주기만 하면
          데이터를 반영하도록 화면이 갱신될 겁니다. 희망사항을 반영해서 코드를 써 보면 다음과 같습니다.
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

    <H4
      number={'2.3.나'}
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

    <H3 number={'2.4'} text={'액션'} />

    <Paragraph>
      아직까지 뱀은 가만히 멈춰있습니다. 그 이유는 <DataType text={'World'}/>에 아무런 변동이
      없기 때문입니다. 이 게임에서 뱀은 일정 시간 간격으로 앞으로 한 칸씩 전진해야 하므로, 계속해서
      상태를 업데이트시켜 줄 필요가 있습니다. 아이디어는 간단합니다. 일정 시간 간격으로 뱀의 위치가
      업데이트된 새로운 <DataType text={'World'}/>를 만들어, 그걸로 기존{' '}
      <DataType text={'World'}/>를 교체하는 것입니다. 좀 전에 우리가 만든{' '}
      <Code code={'Scene'}/> 컴포넌트에게 새 <DataType text={'World'}/>만 넘겨주면
      화면을 갱신하는 일은 알아서 해 줄 겁니다. 마치 스톱 모션 애니메이션처럼 말이죠.
    </Paragraph>

    <Paragraph>
      일정 시간 간격이 지나 뱀이 앞으로 한 칸 움직여야 할 때, 기존 World 데이터를 바탕으로 뱀의
      위치가 업데이트된 새로운 <DataType text={'World'}/>를 만들 수 있습니다. 이걸 그대로{' '}
      <Code code={'nextWorld'}/>라는 함수로 표현해볼까요? (<Code code={'nextSnake'}/>는
      희망사항입니다.)
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
    return world(nextSnake(oldWorld.snake, action))
  }

  return oldWorld
}

// Snake * Action -> Snake
// (wish list)
const nextSnake = (snake, action) => snake`
      }
    />

    <Paragraph>
      우리는 게임의 상태, <DataType text={'World'}/>를 어떤 식으로든 변경하려고 할 때마다 매번
      변경사항이 적용된 새로운{' '} <DataType text={'World'}/>를 만들 것입니다. 이렇게
      만들어진 새로운{' '} <DataType text={'World'}/>를 기존의
      <DataType text={'World'}/>와 바꿔치기하는 것으로 상태 변경의 한 사이클이 끝납니다. 위의
      {' '}<Code code={'nextWorld'}/>는 상태 변경이 필요한 매 순간마다 새 상태를 만들어내기 위해
      호출될 함수입니다.
    </Paragraph>

    <Paragraph>
      하지만 기존 <DataType text={'World'}/>의 정보만으로는 새로운{' '}
      <DataType text={'World'}/>를 만들어내기에 충분하지 않습니다.{' '}
      변경의 의도를 알아야 <DataType text={'World'}/>의 어떤 부분을 어떻게 바꿀 수 있을지 결정할
      수 있겠죠? 예를 들면 일정 시간 간격이 지났으니 뱀이 한 칸 앞으로 움직여야 한다던가 하는 식으로요.
    </Paragraph>

    <Paragraph>
      위의 <Code code={'nextWorld'}/> 함수 정의를 보면 기존 <DataType text={'World'}/>
      {' '}외에 <Code code={'action'}/>이라는 인자를 같이 받도록 되어 있는데, 이 값은 상태
      변경에 대한 의도를 담고 있습니다. 액션을 통해 우리는 기존의 상태에 어떤 변경사항을 적용해서 새
      상태를 만들어내야 할지를 결정할 수 있습니다. 뱀 게임 세계에는 상태를 업데이트시키는 요인이 크게
      두 가지가 있습니다.
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
      여기서는 <Code code={'tick'}/>이라는 액션에 대해서만 새로운 상태를 만들어 반환하고 있는데,
      이 액션의 의도는 일정 시간의 경과에 따라 뱀의 위치가 업데이트된 새로운 상태를 만들어내는 것입니다.
      {' '}<Code code={'tick'}/> 액션이 발생할 때마다 뱀의 상태를 업데이트해 줄 수 있도록{' '}
      <Code code={'nextSnake'}/> 함수를 완성해 볼까요? 뱀의 위치와 방향을 다루는 게 이 게임의
      핵심인 만큼 이 함수의 역할이 큽니다.
    </Paragraph>

    <Snippet
      code={
        `\
// Snake * Action -> Snake
const nextSnake = (snake, action) => {
  if (action === 'tick') {
    return snake(
      position(

      ),
      snake.direction,
    )
  }

  return snake
}`
      }
    />
  </Chapter>
)

export default Chapter02
