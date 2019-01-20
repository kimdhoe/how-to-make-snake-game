import React from 'react'

import {
  Chapter,
  Paragraph,
  InterestingWord,
  BoringWord,
  Snippet,
} from '../shared'
import * as snippets from '../../../snippets'

const Chapter01 = ({ title, title1 }) => (
  <Chapter number={1} title={'뱀 게임 (Feeding Snake)'}>
    <Paragraph>
      우리가 만드려는 뱀 게임은 아주 유명한 고전입니다. 화면에 뱀과 먹이가 동시에 표시되고,
      뱀은 일정 시간 간격으로 한 칸씩 전진합니다. 플레이어는 방향키로 뱀의 이동방향을 변경할 수 있습니다.
      뱀이 먹이를 먹을 때마다 뱀의 길이가 늘어나고, 새로운 먹이가 나타납니다.
      뱀이 벽에 부딪치거나 자기 몸통을 물면 게임은 종료됩니다.
    </Paragraph>

    <Paragraph>
      만드려는 프로그램을 충분히 이해하는 것은 말할 필요도 없이 매우 중요한 일입니다.
      우리가 가장 먼저 할 일은 연필로 종이에 그림을 그려보면서 게임이 실행 중일 때 어떤 모습일지
      상상해보는 것입니다. 각기 다른 상태에서 실행 중인 프로그램을 시각화해보면 다음과 같습니다.
    </Paragraph>

    <div
      css={{
        display: 'flex',
        justifyContent: 'space-between',
      }}
    >
      <div css={{ width: '32%' }}>
        <Drawing
          food={{ x: 3, y: 3 }}
          snake={[ { x: 9, y: 9 } ]}
        />
      </div>
      <div css={{ width: '32%' }}>
        <Drawing
          food={{ x: 15, y: 7 }}
          snake={[
            { x: 12, y: 7 },
            { x: 11, y: 7 },
            { x: 10, y: 7 },
            { x: 10, y: 8 },
            { x: 10, y: 9 },
            { x: 10, y: 10 },
            { x: 10, y: 11 },
            { x: 10, y: 12 },
            { x: 9, y: 12 },
            { x: 8, y: 12 },
            { x: 7, y: 12 },
            { x: 6, y: 12 },
            { x: 5, y: 12 },
            { x: 5, y: 11 },
            { x: 5, y: 10 },
          ]}
        />
      </div>
      <div css={{ width: '32%' }}>
        <Drawing
          food={{ x: 3, y: 19 }}
          snake={[
            { x: 7, y: 19 },
            { x: 7, y: 18 },
            { x: 7, y: 17 },
            { x: 7, y: 16 },
            { x: 8, y: 16 },
            { x: 8, y: 15 },
            { x: 8, y: 14 },
            { x: 8, y: 13 },
            { x: 8, y: 12 },
            { x: 8, y: 11 },
            { x: 8, y: 10 },
            { x: 8, y: 10 },
            { x: 8, y: 9 },
            { x: 8, y: 8 },
            { x: 8, y: 7 },
            { x: 8, y: 6 },
            { x: 9, y: 6 },
            { x: 10, y: 6 },
            { x: 11, y: 6 },
            { x: 12, y: 6 },
            { x: 13, y: 6 },
            { x: 14, y: 6 },
          ]}
        />
      </div>
    </div>

    <Paragraph>
      첫번째 그림은 게임이 시작하는 순간입니다. 처음에 뱀은 머리만 있는 상태로 녹색 원 하나로
      표현되었고, 붉은 원으로 표현된 먹이가 있습니다. 두번째 그림은 몸통이 길어진 뱀이 먹이를 먹기
      직전의 상태입니다. 마지막 그림은 뱀이 벽에 부딪혀 게임이 종료되는 상태입니다.
    </Paragraph>

    <Paragraph>
      자, 이제 어떤 게임인지 알았으니 프로그램을 본격적으로 구현해 볼 차례입니다. 우리는 게임의
      일부분만, 그마저도 단순화된 버전으로 먼저 구현한 뒤 프로그램에 살을 붙이면서 수정해나갈 겁니다.
      게임의 모든 요소를 한 번에 구현하려고 하면 프로그램의 구석구석이 공사 중인 상태가 되어버리겠죠.
      우리는 단순한 버전부터 시작해서 프로그램이 실행되는 상태를 최대한 유지하면서 차츰차츰 완성도를
      높여나갈 겁니다.
    </Paragraph>
  </Chapter>
)

const Drawing = ({ snake, food }) => (
  <div
    css={{
      position: 'relative',
      paddingBottom: '100%',
      width: '100%',
      height: 0,
      border: '1px solid #ddd',
      backgroundColor: '#f1f3f5',
    }}
  >
    <Segment x={food.x} y={food.y} food />
    {snake.map((segment, i) => (
      <Segment
        key={i}
        x={segment.x}
        y={segment.y}
      />
    ))}
  </div>
)

const Segment = ({ x, y, food = false }) => (
  <div
    css={{
      position: 'absolute',
      left: `${x / 20 * 100}%`,
      top: `${y / 20 * 100}%`,
      width: '5%',
    }}
  >
    <div
      css={{
        width: '100%',
        height: 0,
        paddingBottom: '100%',
        borderRadius: '50%',
        backgroundColor: food ? '#faa2c1' : '#5c940d',
      }}
    />
  </div>
)

export default Chapter01
