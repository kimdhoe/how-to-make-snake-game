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
              <span css={{ fontFamily: 'Georgia', fontStyle: 'italic' }}>
                World
              </span>
              {' '}예시
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
  </Chapter>
)

export default Chapter02
