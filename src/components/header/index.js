import React from 'react'

import Game from './game'

const Header = ({ description }) => (
  <div css={[ styles.container ]}>
    <div css={[ styles.wrapper]}>
      <div css={[ styles.game ]}>
        <Game />
      </div>

      <div css={[ styles.heading ]}>
        <h1 css={[ styles.headingText ]}>
          <span css={[ styles.headingText1 ]}>
            How to Make
          </span>
          <span css={[ styles.headingLine ]} />
          <span css={[ styles.headingText2 ]}>
            Snake Game
          </span>
        </h1>
      </div>

      <div css={[ styles.note ]}>
        <p css={[ styles.noteTitle ]}>
          뱀 게임 만드는 법{' '}
        </p>
        <p css={[ styles.noteText ]}>
          시작하는 프로그래머를 위한 인터랙티브 튜토리얼.{' '}
          <span css={[ styles.em ]}>JavaScript</span>를 배웠고{' '}
          <span css={[ styles.em ]}>React</span>의{' '}
          <span css={[ styles.em ]}>setState</span>도 알지만{' '}
          <strong css={[ styles.strong ]}>프로그램을 짜는 법</strong>을 배우진 못했다고
          느끼나요? 고전 게임을 만들면서 프로그램을 조감하는 기분을 만끽해보세요.
        </p>
      </div>
    </div>
  </div>
)

const styles = {
  container: {
    margin: '0 auto',
    maxWidth: 960,
    borderRadius: 17,
    padding: '1em 1.5em 0',
  },
  wrapper: {
    position: 'relative',
    paddingBottom: '3em',
  },
  game: {
    position: 'relative',
    margin: '0 auto',
    paddingBottom: '38%',
    width: '40%',
    height: 0,
    borderRadius: 10,
    backgroundColor: '#f8f9fa',
    '@media (max-width: 768px)': {
      position: 'absolute',
      top: '1em',
      right: 0,
      opacity: 0.8,
      backgroundColor: 'transparent',
    },
  },
  heading: {
    position: 'absolute',
    top: '10%',
    left: 0,
    '@media (max-width: 768px)': {
      position: 'relative',
    },
  },
  headingText1: {
    paddingLeft: '0.2em',
    letterSpacing: '0.07em',
    textTransform: 'uppercase',
    fontSize: '1.9rem',
    fontWeight: 300,
    color: 'black',
  },
  headingLine: {
    display: 'block',
    margin: '0.2em',
    height: 2,
    width: '50%',
    backgroundColor: 'black',
  },
  headingText2: {
    fontSize: '4.4rem',
    fontFamily: 'Georgia',
    fontWeight: 600,
    fontStyle: 'italic',
    color: 'black',
  },
  note: {
    position: 'absolute',
    bottom: '7%',
    right: 0,
    padding: '0 1.5rem',
    width: '100%',
    maxWidth: 380,
    borderRadius: 5,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    color: 'black',
    '@media (max-width: 850px)': {
      position: 'relative',
      marginTop: '3em',
      padding: 0,
      maxWidth: '100%',
      backgroundColor: 'transparent',
    },
  },
  noteTitle: {
    marginBottom: 0,
    fontSize: '1.1em',
    fontWeight: 'bold',
  },
  noteTitleEn: {
    letterSpacing: '0.05em',
    fontFamily: 'Georgia',
    fontSize: '0.85em',
    fontStyle: 'italic',
  },
  noteText: {
    marginTop: '0.3em',
    fontSize: '0.85em',
    color: 'black',
  },
  em: {
    fontStyle: 'italic',
    fontFamily: 'Georgia',
  },
  strong: {
    textDecoration: 'underline',
    fontWeight: 400,
  },
}

export default Header
