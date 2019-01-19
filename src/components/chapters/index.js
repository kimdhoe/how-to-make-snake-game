import React from 'react'

import Chapter00 from './chapter00'
import Chapter01 from './chapter01'
import Chapter02 from './chapter02'

const Chapters = ({ title, title1 }) => (
  <>
    <Chapter00 title={title} title1={title1} />
    <Chapter01 title={title} title1={title1} />
    <Chapter02 title={title} title1={title1} />
  </>
)

export default Chapters
