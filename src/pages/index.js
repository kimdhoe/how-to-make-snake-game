import React from 'react'
import 'normalize.css'
import { graphql } from 'gatsby'

import SEO from '../components/seo'
import Layout from '../components/layout'
import {
  Chapters,
} from '../components'

const IndexPage = ({ data }) => {
  const { title, title1 } = data.site.siteMetadata

  return (
    <Layout>
      <SEO />

      <div css={[ styles.container ]}>
        <div css={[ styles.left ]}>
          <div css={[ styles.game ]}>
          </div>
        </div>

        <div css={[ styles.right ]}>
          <Chapters title={title} title1={title1}  />
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
    marginLeft: 50,
    width: '60%',
    height: 500,
  },
  game: {
    height: 0,
    paddingBottom: '100%',
    backgroundColor: 'gainsboro',
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
