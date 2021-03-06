import React from 'react'

import Chapter00 from './chapter00'
import Chapter01 from './chapter01'
import Chapter02 from './chapter02'
import Chapter03 from './chapter03'
import Chapter04 from './chapter04'
import Chapter05 from './chapter05'

const Chapters = ({ title, title1 }) => (
  <>
    <Chapter00 title={title} title1={title1} />
    <Chapter01 title={title} title1={title1} />
    <Chapter02 title={title} title1={title1} />
    <Chapter03 title={title} title1={title1} />
    <Chapter04 title={title} title1={title1} />
    <Chapter05 title={title} title1={title1} />
  </>
)

export default Chapters
