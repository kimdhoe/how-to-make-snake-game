import React from 'react'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import {
  Chapters,
  Game,
} from '../components'

const IndexPage = ({ data }) => {
  const { title, title1 } = data.site.siteMetadata

  return (
    <Layout>
      <SEO />

      <div css={[ styles.container ]}>
        {/*<div css={[ styles.left ]}>*/}
          {/*<div css={[ styles.game ]}>*/}
            {/*<Game />*/}
          {/*</div>*/}
        {/*</div>*/}

        <div css={[ styles.right ]}>
          <Chapters title={title} title1={title1} />
          <div css={{ height: 700 }} />
        </div>
      </div>

    </Layout>
  )
}

const styles = {
  container: {
    display: 'flex',
  },
  left: {
    width: '40%',
  },
  right: {
    // marginLeft: 50,
    // width: '60%',
  },
  game: {
    position: 'sticky',
    top: '25vh',
    height: '50vh',
    // transform: 'translateY(-50%)',
  },
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        title1
      }
    }
  }
`

export default IndexPage
