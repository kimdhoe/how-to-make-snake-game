import React from 'react'

import {
  Chapter,
  Paragraph,
  InterestingWord,
  BoringWord,
  Snippet,
} from '../shared'
import * as snippets from '../../../snippets'

const Chapter00 = ({ title, title1 }) => (
  <Chapter title={'들어가며'}>
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

    <Snippet code={snippets.code01} />

    <Paragraph>
      학교 종이 땡땡땡 어서 모이자. 선생님이 우리를 기다리신다.학교 종이 땡땡땡 어서 모이자. 선생님이 우리를 기다리신다.학교 종이 땡땡땡 어서 모이자. 선생님이 우리를 기다리신다.학교 종이 땡땡땡 어서 모이자. 선생님이 우리를 기다리신다.    학교 종이 땡땡땡 어서 모이자. 선생님이 우리를 기다리신다.
    </Paragraph>
  </Chapter>
)

export default Chapter00
