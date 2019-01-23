import React from 'react'

import Game from './game'

const Header = () => (
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
          뱀 게임{' '}
          <span css={[ styles.noteTitleEn ]}>
            Feeding Snake
          </span>
        </p>
        <p css={[ styles.noteText ]}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt quaerat suscipit tempora voluptatibus.
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
  },
  heading: {
    position: 'absolute',
    top: '10%',
    left: 0,
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
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
    color: 'black',
  },
  noteTitle: {
    marginBottom: 0,
    fontSize: '1.05em',
    fontWeight: 'bold',
  },
  noteTitleEn: {
    letterSpacing: '0.05em',
    fontFamily: 'Georgia',
    fontSize: '0.85em',
    fontStyle: 'italic',
  },
  noteText: {
    marginTop: 0,
  },
}

export default Header
