import React from 'react'

import {
  Chapter,
  Paragraph,
  InterestingWord,
  BoringWord,
  H3,
  Code,
  Snippet,
} from '../shared'
import { Game } from '../../../components'
import * as snippets from '../../../snippets'

const Chapter00 = ({ title, title1 }) => (
  <div style={{ display: 'flex' }}>
    <div style={{ width: '35%', marginRight: '2em' }}>
      <div style={{ position: 'sticky', top: 50, margin: '75px 0 75px' }}>
        <Game />
      </div>
    </div>

    <div style={{ width: '65%' }}>
      <Chapter number={0} title={'들어가며'}>
        <Paragraph>
          <InterestingWord text={'JavaScript'} />를 익혔고, {' '}
          <InterestingWord text={'React'} /> 튜토리얼도 한번 따라해보았나요?
          아마 지금쯤 지루한 <BoringWord text={'Click Counter'} />, {' '}
          <BoringWord text={'FizzBuzz'} />, 혹은 {' '}
          <BoringWord text={'To-do List'} /> 말고 조금 더 흥미로운 다음 단계의
          프로그램을 만들어보고 싶다고 생각하고 있을지도 모르겠군요. {' '}
          비동기나 상태 관리 같은 중요한 키워드를 학습할 수 있고, 다른 무엇보다도 만드는
          과정이 나에게 깨달음을 줄 수 있는 그런 프로그램 말입니다.{' '}
          <InterestingWord text={title1} serif={false} very />{' '}
          <InterestingWord text={`${title}`} very />
          은 그런 생각을 하고 있지만,
          어디서부터 시작해서{' '}
          <InterestingWord serif={false} text={'어떻게 프로그램을 만들어나가야'}/>
          {' '}하는지 감을 잡지 못한 사람을 위한 튜토리얼입니다.
        </Paragraph>

        {/*<Snippet code={snippets.code01} />*/}

        <Paragraph>
          이 튜토리얼은 <InterestingWord text={'Web'} /> 기술을 다루고 있고 특히 화면을 그리기 위해서{' '}
          <InterestingWord text={'React'} />에 의존하긴 하지만 특정 기술이나 라이브러리의
          사용법을 알리려는 의도로 만들어진 것은 아닙니다. 세세한 부분에 너무 연연하기보단 작은 게임이나마
          프로그램의 시작부터 완성까지, 어떤 사고와 과정을 거쳐 만들어지는지 알아가길 바랍니다.
        </Paragraph>

        <Paragraph>
          시작하기에 앞서 미리 귀뜀하자면, 우리는 아래의 질문들을 던지면서 진행해나가게 됩니다.
        </Paragraph>

        <ul>
          <li css={{ fontStyle: 'italic' }}>
            뱀 게임은 무엇인가?
          </li>
          <li css={{ fontStyle: 'italic' }}>
            완성된 게임은 대략 어떤 모습인가?
          </li>
          <li css={{ fontStyle: 'italic' }}>
            게임을 표현하는 데에 필요한 데이터는 어떤 것들이고, 무슨 의미를 갖는가?
          </li>
          <li css={{ fontStyle: 'italic' }}>
            데이터를 어떻게 코드로 표현할 것인가?
          </li>
          <li css={{ fontStyle: 'italic' }}>
            어떻게 화면에 출력할 것인가?
          </li>
          <li css={{ fontStyle: 'italic' }}>
            게임 상에서 일어나는 변화를 어떻게 처리하고 반영할 것인가?
          </li>
        </ul>

        <H3 number={'0.1'} text={'프로젝트 설정'} />

        <Paragraph>
          이 튜토리얼은 복잡한 설정을 피하기 위해{' '}
          <a
            css={{ color: '#333', }}
            href=""
          >
            <InterestingWord very text={'create-react-app'}/>
          </a>을 사용합니다. 새로 생성한 프로젝트의 <Code code={'src/App.js'}/> 파일의 내용을
          지운 후, 아래와 같은 상태에서 시작하도록 하겠습니다.
        </Paragraph>

        <Snippet
          changed={[ 1, 9 ]}
          code={
            `\
import React from 'react'

class Game extends React.Component {
  render () {
    return null
  }
}

export default Game`
          }
        />
      </Chapter>
    </div>
  </div>
)

export default Chapter00
